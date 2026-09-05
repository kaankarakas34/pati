import React, { useEffect, useState } from 'react';
import { getHotelPath, getVetPath } from '../../lib/seo-slugs';

export default function DetailLoader({ resource, id, hotelSlugs, vetSlugs, onLoad, children }) {
  const requestKey = JSON.stringify({ resource, id, hotelSlugs, vetSlugs });
  const [state, setState] = useState({ key: '', item: null, error: '' });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setState({ key: requestKey, item: null, error: '' });
    async function read(path) {
      const response = await fetch(path, { signal: controller.signal });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Kayit yuklenemedi.');
      return data;
    }
    async function load() {
      try {
        let recordId = id;
        if (resource === 'hotels' && hotelSlugs) {
          const params = new URLSearchParams({ ...hotelSlugs, limit: '1', envelope: 'true' });
          const page = await read(`/api/hotels?${params}`);
          if (!Array.isArray(page.data)) throw new Error('Gecersiz liste yaniti.');
          recordId = page.data[0]?.id;
        }
        if (resource === 'vets' && vetSlugs) {
          const params = new URLSearchParams({ ...vetSlugs, limit: '1', envelope: 'true' });
          const page = await read(`/api/vets?${params}`);
          if (!Array.isArray(page.data)) throw new Error('Gecersiz liste yaniti.');
          recordId = page.data[0]?.id;
        }
        if (!recordId) throw new Error('Kayit bulunamadi.');
        const [item, complaintCount] = await Promise.all([
          read(`/api/${resource}/${encodeURIComponent(recordId)}`),
          ['hotels', 'boardings', 'taxis', 'vets'].includes(resource) ? read(`/api/complaints/count?${new URLSearchParams({ targetId: recordId })}`) : Promise.resolve(null)
        ]);
        if (!item || item.id !== recordId) throw new Error('Gecersiz detay yaniti.');
        if (complaintCount) {
          if (!Number.isInteger(complaintCount.count) || complaintCount.count < 0) throw new Error('Gecersiz sikayet sayisi.');
          item.approvedComplaintCount = complaintCount.count;
        }
        if (controller.signal.aborted) return;
        if (resource === 'hotels') window.history.replaceState(null, '', getHotelPath(item));
        if (resource === 'vets') window.history.replaceState(null, '', getVetPath(item));
        setState({ key: requestKey, item, error: '' });
        onLoad?.(item);
      } catch (error) {
        if (!controller.signal.aborted) setState({ key: requestKey, item: null, error: error.message });
      }
    }
    load();
    return () => controller.abort();
  }, [requestKey, attempt, onLoad]);

  if (state.key !== requestKey || (!state.item && !state.error)) {
    return <p role="status" className="p-12 text-center">Yukleniyor...</p>;
  }
  if (state.error) {
    return <div className="p-12 text-center space-y-4">
      <p role="alert">{state.error}</p>
      <button onClick={() => setAttempt(value => value + 1)} className="underline">Tekrar dene</button>
    </div>;
  }
  return children(state.item);
}
