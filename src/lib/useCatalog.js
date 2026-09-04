import { useEffect, useState } from 'react';

export function useCatalog(resource,filters={},admin=false,enabled=true) {
  const key=JSON.stringify({resource,filters,admin});
  const [navigation,setNavigation]=useState({key,cursors:[null]});
  const cursors=navigation.key===key?navigation.cursors:[null];
  const cursor=cursors.at(-1);
  const [state,setState]=useState({items:[],nextCursor:null,loading:true,error:''});
  const [revision,setRevision]=useState(0);
  useEffect(()=>{
    if(!enabled)return;
    const controller=new AbortController();
    setState(previous=>({...previous,loading:true,error:''}));
    const timer=setTimeout(async()=>{
      const params=new URLSearchParams({envelope:'true',limit:'24'});
      for(const [name,value] of Object.entries(filters)) {
        for(const item of Array.isArray(value)?value:[value]) if(item!==undefined&&item!==null&&item!==''&&item!=='all')params.append(name,String(item));
      }
      if(cursor)params.set('cursor',cursor);
      try {
        const response=await fetch(`/api/${admin?'admin/':''}${resource}?${params}`,{
          signal:controller.signal, headers:admin?{'x-admin-token':sessionStorage.getItem('admin_token')||''}:{}
        });
        const page=await response.json();
        if(!response.ok)throw new Error(page.error || 'Kayitlar yuklenemedi.');
        if(!Array.isArray(page.data))throw new Error('Gecersiz liste yaniti.');
        if(!controller.signal.aborted)setState({items:page.data,nextCursor:page.nextCursor,loading:false,error:''});
      }catch(error){if(!controller.signal.aborted)setState({items:[],nextCursor:null,loading:false,error:error.message});}
    },200);
    return()=>{clearTimeout(timer);controller.abort();};
  },[key,cursor,revision,enabled]);
  return {...state,hasPrevious:cursors.length>1,
    next:()=>{if(state.nextCursor)setNavigation({key,cursors:[...cursors,state.nextCursor]});},
    previous:()=>setNavigation({key,cursors:cursors.slice(0,-1)}),
    reload:()=>setRevision(value=>value+1)};
}
