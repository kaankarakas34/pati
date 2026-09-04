import React from 'react';
import { ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react';

export default function CatalogPagination({page}) {
  return <div className="flex items-center justify-between gap-3 py-4" aria-live="polite">
    <span className="text-sm text-gray-600">{page.error || (page.loading?'Yukleniyor...':`${page.items.length} kayit`)}</span>
    <div className="flex gap-2 shrink-0">
      {page.error&&<button type="button" title="Tekrar dene" aria-label="Tekrar dene" onClick={page.reload} className="p-2 border rounded"><RefreshCw size={18}/></button>}
      <button type="button" title="Onceki sayfa" aria-label="Onceki sayfa" disabled={!page.hasPrevious||page.loading} onClick={page.previous} className="p-2 border rounded disabled:opacity-30"><ArrowLeft size={18}/></button>
      <button type="button" title="Sonraki sayfa" aria-label="Sonraki sayfa" disabled={!page.nextCursor||page.loading} onClick={page.next} className="p-2 border rounded disabled:opacity-30"><ArrowRight size={18}/></button>
    </div>
  </div>;
}
