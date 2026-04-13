import{q as O,c as N,d as q,o as H,g as B}from"./client.PQoiaQfj.js";const v=async()=>{const c=document.getElementById("rules-overview-timeline-container");if(!(c instanceof HTMLElement))return;const _={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},p=(r="")=>String(r).replace(/[&<>"']/g,i=>_[i]??i),w=()=>{const r=new Date,i=r.getFullYear(),e=String(r.getMonth()+1).padStart(2,"0"),l=String(r.getDate()).padStart(2,"0");return`${i}-${e}-${l}`};try{const r=O(N(q,"timeline"),H("dateStr","asc")),i=await B(r),e=[];if(i.forEach(t=>{const s=t.data();e.push({id:t.id,dateStr:s.dateStr??"",title:s.title??"未命名日程",desc:s.desc??""})}),e.length===0){c.innerHTML=`
          <div class="text-center text-slate-500 py-10">
            目前尚無日程資訊
          </div>
        `;return}const l=w(),g=e.findIndex(t=>t.dateStr>=l),m=2,u=2,x=m+u+1;let o=0,n=e.length;if(g===-1)n=e.length,o=Math.max(0,n-x);else{o=Math.max(0,g-m),n=Math.min(e.length,g+u+1);const t=n-o;if(t<x){const s=x-t;o===0?n=Math.min(e.length,n+s):n===e.length&&(o=Math.max(0,o-s))}}const b=e.slice(o,n),y=b.findIndex(t=>t.dateStr>=l);let h="";b.forEach((t,s)=>{const S=p(t.dateStr),$=p(t.title),f=p(t.desc),a=t.dateStr<l,d=y!==-1&&s===y,k=s===b.length-1,E=d?"bg-primary border-white shadow-[0_0_0_6px_rgba(59,130,246,0.12),0_0_18px_rgba(59,130,246,0.35)]":a?"bg-slate-300 border-white":"bg-white border-primary/50 shadow-[0_0_0_6px_rgba(59,130,246,0.08)]",M=a?"bg-gradient-to-b from-slate-200/80 via-slate-200/40 to-transparent":d?"bg-gradient-to-b from-primary/60 via-primary/20 to-transparent":"bg-gradient-to-b from-slate-200 via-slate-200/55 to-transparent",C=d?"bg-primary/10 text-primary border border-primary/15":a?"bg-slate-100 text-slate-500 border border-slate-200 line-through":"bg-sky-50 text-sky-700 border border-sky-100",T=d?"border-primary/25 shadow-[0_18px_40px_rgba(2,6,23,0.08)]":a?"border-slate-100":"border-slate-200 group-hover:border-primary/25 group-hover:shadow-[0_18px_45px_rgba(2,6,23,0.10)]",I=a?"text-slate-500 line-through":"text-slate-800",D=a?"text-slate-400":"text-slate-600",L=d?'<span class="text-[11px] font-black tracking-widest text-primary bg-primary/10 border border-primary/15 px-2 py-1 rounded-full">NEXT</span>':a?'<span class="text-[11px] font-black tracking-widest text-slate-500 bg-slate-100 border border-slate-200 px-2 py-1 rounded-full">DONE</span>':'<span class="text-[11px] font-black tracking-widest text-sky-700 bg-sky-50 border border-sky-100 px-2 py-1 rounded-full">UPCOMING</span>';h+=`
          <div class="group grid grid-cols-[28px_1fr] md:grid-cols-[36px_1fr] gap-6 items-start ${a?"opacity-60":""}">
            <div class="flex flex-col items-center pt-2">
              <div class="w-3.5 h-3.5 rounded-full border-4 ${E} transition-all duration-300"></div>
              ${k?"":`<div class="mt-4 w-px flex-1 min-h-[92px] ${M}"></div>`}
            </div>

            <div class="${a?"":"transition-transform duration-300 group-hover:-translate-y-0.5"}">
              <div class="flex items-center justify-between gap-3 mb-3">
                <span class="font-mono text-sm md:text-base font-bold px-3 py-1 rounded-xl inline-flex items-center ${C}">
                  ${S.replace(/-/g,".")}
                </span>
                ${L}
              </div>

              <div class="bg-white border ${T} p-5 md:p-6 rounded-2xl transition-all duration-300">
                <h4 class="text-lg md:text-xl font-black ${I}">
                  ${$}
                </h4>
                ${f?`<p class="mt-2 text-sm md:text-base leading-relaxed ${D}">${f}</p>`:""}
              </div>
            </div>
          </div>
        `}),c.innerHTML=h}catch(r){console.error("Error loading rules overview timeline:",r),c.innerHTML=`
        <div class="text-center text-rose-500 py-10">
          載入日程失敗，請重新整理頁面。
        </div>
      `}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",v):v();
