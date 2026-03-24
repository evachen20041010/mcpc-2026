import{q as C,d as L,e as M,g as T,h as D}from"./client.DOiQ--ep.js";const x=async()=>{const d=document.getElementById("full-timeline-container");if(!(d instanceof HTMLElement))return;const m={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},i=(t="")=>String(t).replace(/[&<>"']/g,a=>m[a]??a),y=()=>{const t=new Date,a=t.getFullYear(),n=String(t.getMonth()+1).padStart(2,"0"),l=String(t.getDate()).padStart(2,"0");return`${a}-${n}-${l}`};try{const t=C(L(M,"timeline"),T("dateStr","asc")),a=await D(t),n=[];if(a.forEach(e=>{const s=e.data();n.push({id:e.id,dateStr:s.dateStr??"",title:s.title??"未命名日程",desc:s.desc??""})}),n.length===0){d.innerHTML=`
          <div class="text-center text-slate-500 py-10">
            目前尚無日程資訊
          </div>
        `;return}const l=y(),c=n,p=c.findIndex(e=>e.dateStr>=l);let g="";c.forEach((e,s)=>{const u=i(e.dateStr),f=i(e.title),b=i(e.desc),r=e.dateStr<l,o=p!==-1&&s===p,h=s===c.length-1,v=o?"bg-primary border-white shadow-[0_0_0_6px_rgba(59,130,246,0.12),0_0_18px_rgba(59,130,246,0.35)]":r?"bg-slate-300 border-white":"bg-white border-primary/50 shadow-[0_0_0_6px_rgba(59,130,246,0.08)]",_=r?"bg-gradient-to-b from-slate-200/80 via-slate-200/40 to-transparent":o?"bg-gradient-to-b from-primary/60 via-primary/20 to-transparent":"bg-gradient-to-b from-slate-200 via-slate-200/55 to-transparent",w=o?"bg-primary/10 text-primary border border-primary/15":r?"bg-slate-100 text-slate-500 border border-slate-200 line-through":"bg-sky-50 text-sky-700 border border-sky-100",$=o?"border-primary/25 shadow-[0_18px_40px_rgba(2,6,23,0.08)]":r?"border-slate-100":"border-slate-200 group-hover:border-primary/25 group-hover:shadow-[0_18px_45px_rgba(2,6,23,0.10)]",S=r?"text-slate-500 line-through":"text-slate-800",k=r?"text-slate-400":"text-slate-600",E=o?'<span class="text-[11px] font-black tracking-widest text-primary bg-primary/10 border border-primary/15 px-2 py-1 rounded-full">NEXT</span>':r?'<span class="text-[11px] font-black tracking-widest text-slate-500 bg-slate-100 border border-slate-200 px-2 py-1 rounded-full">DONE</span>':'<span class="text-[11px] font-black tracking-widest text-sky-700 bg-sky-50 border border-sky-100 px-2 py-1 rounded-full">UPCOMING</span>';g+=`
          <div class="group grid grid-cols-[28px_1fr] md:grid-cols-[36px_1fr] gap-6 items-start ${r?"opacity-60":""}">
            <div class="flex flex-col items-center pt-2">
              <div class="w-3.5 h-3.5 rounded-full border-4 ${v} transition-all duration-300"></div>
              ${h?"":`<div class="mt-4 w-px flex-1 min-h-[92px] ${_}"></div>`}
            </div>

            <div class="${r?"":"transition-transform duration-300 group-hover:-translate-y-0.5"}">
              <div class="flex items-center justify-between gap-3 mb-3">
                <span class="font-mono text-sm md:text-base font-bold px-3 py-1 rounded-xl inline-flex items-center ${w}">
                  ${u.replace(/-/g,".")}
                </span>
                ${E}
              </div>

              <div class="bg-white border ${$} p-5 md:p-6 rounded-2xl transition-all duration-300">
                <h4 class="text-lg md:text-xl font-black ${S}">
                  ${f}
                </h4>
                ${b?`<p class="mt-2 text-sm md:text-base leading-relaxed ${k}">${b}</p>`:""}
              </div>
            </div>
          </div>
        `}),d.innerHTML=g}catch(t){console.error("Error loading full timeline:",t),d.innerHTML=`
        <div class="text-center text-rose-500 py-10">
          載入日程失敗，請重新整理頁面。
        </div>
      `}};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",x):x();
