import{q as _,c as S,d as w,o as $,g as M}from"./client.PQoiaQfj.js";const k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},u=(r="")=>String(r).replace(/[&<>"']/g,e=>k[e]??e),E=()=>{const r=new Date,e=r.getFullYear(),d=String(r.getMonth()+1).padStart(2,"0"),i=String(r.getDate()).padStart(2,"0");return`${e}-${d}-${i}`},T=(r,e,d)=>{let i="";return r.forEach((c,a)=>{const p=u(c.dateStr),g=u(c.title),x=u(c.desc),t=c.dateStr<e,s=d!==-1&&a===d,b=a===r.length-1,m=s?"bg-primary border-white shadow-[0_0_0_6px_rgba(59,130,246,0.12),0_0_18px_rgba(59,130,246,0.35)]":t?"bg-slate-300 border-white":"bg-white border-primary/50 shadow-[0_0_0_6px_rgba(59,130,246,0.08)]",o=t?"bg-gradient-to-b from-slate-200/80 via-slate-200/40 to-transparent":s?"bg-gradient-to-b from-primary/60 via-primary/20 to-transparent":"bg-gradient-to-b from-slate-200 via-slate-200/55 to-transparent",n=s?"bg-primary/10 text-primary border border-primary/15":t?"bg-slate-100 text-slate-500 border border-slate-200 line-through":"bg-sky-50 text-sky-700 border border-sky-100",l=s?"border-primary/25 shadow-[0_18px_40px_rgba(2,6,23,0.08)]":t?"border-slate-100":"border-slate-200 group-hover:border-primary/25 group-hover:shadow-[0_18px_45px_rgba(2,6,23,0.10)]",f=t?"text-slate-500 line-through":"text-slate-800",h=t?"text-slate-400":"text-slate-600",v=s?'<span class="text-[11px] font-black tracking-widest text-primary bg-primary/10 border border-primary/15 px-2 py-1 rounded-full">NEXT</span>':t?'<span class="text-[11px] font-black tracking-widest text-slate-500 bg-slate-100 border border-slate-200 px-2 py-1 rounded-full">DONE</span>':'<span class="text-[11px] font-black tracking-widest text-sky-700 bg-sky-50 border border-sky-100 px-2 py-1 rounded-full">UPCOMING</span>';i+=`
        <div class="group grid grid-cols-[28px_1fr] md:grid-cols-[36px_1fr] gap-6 items-start ${t?"opacity-60":""}">
          <div class="flex flex-col items-center pt-2">
            <div class="w-3.5 h-3.5 rounded-full border-4 ${m} transition-all duration-300"></div>
            ${b?"":`<div class="mt-4 w-px flex-1 min-h-[92px] ${o}"></div>`}
          </div>

          <div class="${t?"":"transition-transform duration-300 group-hover:-translate-y-0.5"}">
            <div class="flex items-center justify-between gap-3 mb-3">
              <span class="font-mono text-sm md:text-base font-bold px-3 py-1 rounded-xl inline-flex items-center ${n}">
                ${p.replace(/-/g,".")}
              </span>
              ${v}
            </div>

            <div class="bg-white border ${l} p-5 md:p-6 rounded-2xl transition-all duration-300">
              <h4 class="text-lg md:text-xl font-black ${f}">
                ${g}
              </h4>
              ${x?`<p class="mt-2 text-sm md:text-base leading-relaxed ${h}">${x}</p>`:""}
            </div>
          </div>
        </div>
      `}),i},C=async r=>{const e=r.querySelector("[data-timeline-container]");if(!(e instanceof HTMLElement))return;const d=r.dataset.variant??"full";try{const i=_(S(w,"timeline"),$("dateStr","asc")),c=await M(i),a=[];if(c.forEach(t=>{const s=t.data();a.push({id:t.id,dateStr:s.dateStr??"",title:s.title??"未命名日程",desc:s.desc??""})}),a.length===0){e.innerHTML=`
          <div class="text-center text-slate-500 py-10">
            目前尚無日程資訊
          </div>
        `;return}const p=E();let g=[...a],x=g.findIndex(t=>t.dateStr>=p);if(d==="overview"){const t=a.findIndex(l=>l.dateStr>=p),s=2,b=2,m=s+b+1;let o=0,n=a.length;if(t===-1)n=a.length,o=Math.max(0,n-m);else{o=Math.max(0,t-s),n=Math.min(a.length,t+b+1);const l=n-o;if(l<m){const f=m-l;o===0?n=Math.min(a.length,n+f):n===a.length&&(o=Math.max(0,o-f))}}g=a.slice(o,n),x=g.findIndex(l=>l.dateStr>=p)}e.innerHTML=T(g,p,x)}catch(i){console.error("Error loading timeline:",i),e.innerHTML=`
        <div class="text-center text-rose-500 py-10">
          載入日程失敗，請重新整理頁面。
        </div>
      `}},y=async()=>{const r=document.querySelectorAll("[data-rules-content]");for(const e of r)e instanceof HTMLElement&&await C(e)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",y):y();
