import { useEffect, useRef, useState } from 'react';

export function useAdminCollection(resource, filters = {}, enabled = true) {
  const key = JSON.stringify({ resource, filters, enabled });
  const [navigation, setNavigation] = useState({ key, cursors: [null] });
  const cursors = navigation.key === key ? navigation.cursors : [null];
  const cursor = cursors.at(-1);
  const [revision, setRevision] = useState(0);
  const requestKey = JSON.stringify({ key, cursor, revision });
  const [state, setState] = useState({});
  const [mutation, setMutation] = useState({ busy: false, error: '', message: '' });
  const mutationLock = useRef(false);

  useEffect(() => {
    if (!enabled) return;
    const controller = new AbortController();
    const timer = setTimeout(async () => {
      const params = new URLSearchParams({ envelope: 'true', limit: '24' });
      for (const [name, value] of Object.entries(filters)) {
        if (value !== undefined && value !== null && value !== '' && value !== 'all') params.set(name, String(value));
      }
      if (cursor) params.set('cursor', cursor);
      try {
        const response = await fetch(`/api/admin/${resource}?${params}`, {
          signal: controller.signal,
          headers: { 'x-admin-token': sessionStorage.getItem('admin_token') || '' }
        });
        const page = await response.json();
        if (!response.ok) throw new Error(page.error || 'Kayitlar yuklenemedi.');
        if (!Array.isArray(page.data)) throw new Error('Gecersiz liste yaniti.');
        if (!controller.signal.aborted) setState({ requestKey, items: page.data, nextCursor: page.nextCursor, error: '' });
      } catch (error) {
        if (!controller.signal.aborted) setState({ requestKey, items: [], nextCursor: null, error: error.message });
      }
    }, 200);
    return () => { clearTimeout(timer); controller.abort(); };
  }, [requestKey]);

  const current = enabled && state.requestKey === requestKey;
  const reload = () => setRevision(value => value + 1);
  const mutate = async (method, item, status) => {
    if (!enabled || mutationLock.current) return false;
    mutationLock.current = true;
    setMutation({ busy: true, error: '', message: '' });
    try {
      if ((method !== 'POST' || item.id) && (!Number.isInteger(item.version) || item.version < 1)) {
        throw new Error('Kayit surumu eksik. Listeyi yenileyip tekrar deneyin.');
      }
      const headers = { 'Content-Type': 'application/json', 'x-admin-token': sessionStorage.getItem('admin_token') || '' };
      if (method === 'DELETE') headers['If-Match'] = String(item.version);
      const url = method === 'PATCH' ? `/api/admin/${resource}/${encodeURIComponent(item.id)}/status`
        : `/api/${resource}${method === 'DELETE' ? '/' + encodeURIComponent(item.id) : ''}`;
      const response = await fetch(url, {
        method, headers,
        ...(method === 'DELETE' ? {} : { body: JSON.stringify(method === 'PATCH' ? { status, version: item.version } : item) })
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error(result.error || 'Islem tamamlanamadi.');
      setMutation({ busy: false, error: '', message: 'Islem kaydedildi.' });
      reload();
      return true;
    } catch (error) {
      setMutation({ busy: false, error: error.message, message: '' });
      return false;
    } finally {
      mutationLock.current = false;
    }
  };

  return {
    items: current ? state.items : [], nextCursor: current ? state.nextCursor : null,
    loading: enabled && !current, error: current ? state.error : '',
    hasPrevious: cursors.length > 1, reload,
    next: () => { if (current && state.nextCursor) setNavigation({ key, cursors: [...cursors, state.nextCursor] }); },
    previous: () => { if (cursors.length > 1) setNavigation({ key, cursors: cursors.slice(0, -1) }); },
    busy: mutation.busy, mutationError: mutation.error, message: mutation.message,
    save: item => mutate('POST', item),
    remove: item => mutate('DELETE', item),
    moderate: (item, status) => mutate('PATCH', item, status)
  };
}
