(()=>{
  const track=(method,url)=>{
    if(typeof gtag==='function')gtag('event','share',{method,content_type:'page',item_id:url});
  };
  const copy=async text=>{
    if(navigator.clipboard&&window.isSecureContext){
      await navigator.clipboard.writeText(text);
      return;
    }
    const area=document.createElement('textarea');
    area.value=text;
    area.style.position='fixed';
    area.style.opacity='0';
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    area.remove();
  };
  const button=(label,className,ariaLabel,handler)=>{
    const item=document.createElement('button');
    item.type='button';
    item.className=`share-action ${className}`;
    item.textContent=label;
    item.setAttribute('aria-label',ariaLabel);
    item.addEventListener('click',handler);
    return item;
  };
  const temporaryLabel=(item,label)=>{
    const original=item.textContent;
    item.textContent=label;
    setTimeout(()=>item.textContent=original,2200);
  };

  const panels=[...document.querySelectorAll('.content-share-actions')];
  const firstSource=panels[0]?.querySelector('[data-share-url]');
  if(!firstSource)return;
  const url=firstSource.dataset.shareUrl;
  const title=firstSource.dataset.shareTitle||document.title;
  const text=firstSource.dataset.shareText||'Found this on UCanWorkFromHome:';
  const messageBody=`${title}\n${text} ${url}`;

  const makeFacebook=()=>button('Facebook','share-facebook','Share this page on Facebook',()=>{
    track('facebook',url);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      'facebook-share',
      'width=700,height=600,noopener,noreferrer'
    );
  });
  const makeText=()=>button('Text','share-text-message','Share this page by text message',()=>{
    track('sms',url);
    const separator=/iPhone|iPad|iPod/i.test(navigator.userAgent)?'&':'?';
    window.location.href=`sms:${separator}body=${encodeURIComponent(messageBody)}`;
  });

  panels.forEach(actions=>{
    if(actions.dataset.socialEnhanced==='true')return;
    const source=actions.querySelector('[data-share-url]');
    if(!source)return;
    actions.dataset.socialEnhanced='true';
    actions.insertBefore(makeFacebook(),actions.firstChild);
    actions.insertBefore(makeText(),source);
    const native=actions.querySelector('[data-share-mode="native"]');
    if(native)native.textContent='More options';
  });

  const topActions=document.createElement('div');
  topActions.className='top-share-actions';
  topActions.append(makeFacebook(),makeText());
  topActions.append(button('More options','share-more','Open more sharing options',async function(){
    track('native',url);
    if(navigator.share&&window.isSecureContext&&location.protocol==='https:'){
      try{await navigator.share({title,text,url})}catch(error){if(error?.name!=='AbortError')throw error}
    }else{
      await copy(url);
      temporaryLabel(this,'Link copied!');
    }
  }));
  topActions.append(button('Copy link','share-copy','Copy this page link',async function(){
    await copy(url);
    track('copy_link',url);
    temporaryLabel(this,'Link copied!');
  }));

  const topShare=document.createElement('section');
  topShare.className='top-share-strip';
  topShare.setAttribute('aria-label','Share this page');
  const inner=document.createElement('div');
  inner.className='wrap top-share-inner';
  const prompt=document.createElement('strong');
  prompt.textContent='Share this page:';
  inner.append(prompt,topActions);
  topShare.append(inner);
  document.querySelector('main')?.prepend(topShare);
})();
