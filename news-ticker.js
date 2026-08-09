(function(){
  'use strict';
  if (window.__ucanNewsTickerLoaded) return;
  window.__ucanNewsTickerLoaded = true;
  const REFRESH_MS = 10 * 60 * 1000;

  function esc(s){ return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function cleanTitle(t){ return String(t || '').replace(/\s+/g,' ').trim(); }
  function ensureStyles(){
    if(document.getElementById('ucan-news-ticker-style')) return;
    const s=document.createElement('style'); s.id='ucan-news-ticker-style';
    s.textContent=`
      :root{--ucan-ticker-h:42px} html{scroll-padding-bottom:var(--ucan-ticker-h)} body{padding-bottom:var(--ucan-ticker-h)!important}
      #ucan-news-ticker{position:fixed;left:0;right:0;bottom:0;height:var(--ucan-ticker-h);z-index:2147483000;background:#111;color:#fff;display:flex;align-items:center;font-family:Arial,Helvetica,sans-serif;box-shadow:0 -2px 10px rgba(0,0,0,.25);overflow:hidden}
      #ucan-news-ticker .unt-badge{height:100%;display:flex;align-items:center;gap:7px;flex:0 0 auto;background:#c81920;color:#fff;text-decoration:none;font-weight:800;letter-spacing:.04em;padding:0 15px;z-index:2}
      #ucan-news-ticker .unt-live{width:7px;height:7px;border-radius:50%;background:#fff;box-shadow:0 0 0 0 rgba(255,255,255,.6);animation:untPulse 1.8s infinite}
      #ucan-news-ticker .unt-window{overflow:hidden;white-space:nowrap;min-width:0;flex:1}.unt-track{display:inline-flex;align-items:center;will-change:transform;animation:untScroll var(--unt-duration,100s) linear infinite;padding-left:100%}
      #ucan-news-ticker:hover .unt-track{animation-play-state:paused}.unt-item{color:#fff;text-decoration:none;font-size:14px;font-weight:600;margin-right:38px}.unt-item:hover{text-decoration:underline}.unt-source{color:#bcbcbc;font-weight:400;margin-left:6px}.unt-sep{color:#e33;margin-right:38px;font-weight:900}.unt-status{font-size:14px;padding-left:18px;color:#ddd}.unt-close{border:0;background:transparent;color:#ddd;font-size:20px;width:38px;height:100%;cursor:pointer;flex:0 0 auto}.unt-close:hover{color:#fff;background:#222}
      @keyframes untScroll{from{transform:translateX(0)}to{transform:translateX(-100%)}} @keyframes untPulse{70%{box-shadow:0 0 0 7px rgba(255,255,255,0)}100%{box-shadow:0 0 0 0 rgba(255,255,255,0)}}
      @media(max-width:640px){:root{--ucan-ticker-h:38px}.unt-badge{padding:0 9px!important;font-size:12px}.unt-item,.unt-status{font-size:12px!important}.unt-close{width:32px!important}}
      @media(prefers-reduced-motion:reduce){.unt-track{animation-duration:180s!important}}
    `; document.head.appendChild(s);
  }
  function makeTicker(){
    if(document.getElementById('ucan-news-ticker')) return document.getElementById('ucan-news-ticker');
    ensureStyles(); const el=document.createElement('div'); el.id='ucan-news-ticker'; el.setAttribute('role','region'); el.setAttribute('aria-label','Live news headlines');
    el.innerHTML='<a class="unt-badge" href="news.html" title="Open the live news page"><span class="unt-live"></span>LIVE NEWS</a><div class="unt-window"><div class="unt-status">Loading current headlines…</div></div><button class="unt-close" type="button" aria-label="Hide news ticker" title="Hide ticker">×</button>';
    el.querySelector('.unt-close').addEventListener('click',()=>{el.remove();document.body.style.paddingBottom='0';}); document.body.appendChild(el); return el;
  }
  function latest(){ const d=window.UCAN_NEWS_DATA; return d && d.categories && Array.isArray(d.categories.Latest) ? d.categories.Latest : []; }
  function render(){
    const el=makeTicker(), win=el.querySelector('.unt-window'), items=latest().slice(0,18);
    if(!items.length){ win.innerHTML='<div class="unt-status">Live news will activate after the site is published. <a href="news.html" style="color:#fff">Open News</a></div>'; return; }
    const doubled=items.concat(items); const track=document.createElement('div'); track.className='unt-track';
    track.innerHTML=doubled.map(x=>`<a class="unt-item" href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${esc(cleanTitle(x.title))} <span class="unt-source">${esc(x.source||'news')}</span></a><span class="unt-sep">●</span>`).join('');
    const duration=Math.max(75,Math.min(210,items.reduce((n,x)=>n+cleanTitle(x.title).length,0)*.45)); track.style.setProperty('--unt-duration',duration+'s'); win.replaceChildren(track);
  }
  function reloadData(){
    if(location.protocol==='file:'){ render(); return; }
    const old=document.getElementById('ucan-news-data-refresh'); if(old) old.remove();
    const s=document.createElement('script'); s.id='ucan-news-data-refresh'; s.src='news-data.js?t='+Date.now(); s.onload=render; document.head.appendChild(s);
  }
  function start(){ makeTicker(); if(window.UCAN_NEWS_DATA) render(); else { const s=document.createElement('script'); s.src='news-data.js'; s.onload=render; s.onerror=render; document.head.appendChild(s); } setInterval(reloadData,REFRESH_MS); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true}); else start();
})();
