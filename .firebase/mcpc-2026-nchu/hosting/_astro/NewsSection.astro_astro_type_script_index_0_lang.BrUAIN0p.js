import{q as h,d as L,e as E,f as w,l as B,g as I}from"./client.BdXJJ-2L.js";import{marked as b}from"https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";document.addEventListener("DOMContentLoaded",async()=>{const o=document.getElementById("news-container");if(!o)return;const n=document.getElementById("news-modal"),r=document.getElementById("modal-backdrop"),f=document.querySelectorAll(".close-modal-btn"),l=document.getElementById("modal-date"),c=document.getElementById("modal-category"),i=document.getElementById("modal-title"),m=document.getElementById("modal-content"),u={},p=()=>{n&&(n.classList.add("hidden"),n.classList.remove("flex"),document.body.style.overflow="")};f.forEach(a=>a.addEventListener("click",p)),r&&r.addEventListener("click",p);try{const a=h(L(E,"news"),w("date","desc"),B(3)),x=await I(a);if(o.innerHTML="",x.empty){o.innerHTML='<div class="col-span-full text-center py-12 text-slate-500 bg-slate-50 rounded-2xl border border-slate-100">目前尚無最新消息發布。</div>';return}let y=0;x.forEach(s=>{const e=s.data(),d=s.id;u[d]=e;const t=(y+1)*150,g=b.parse(e.desc),v=`
          <div class="group bg-white border-2 border-slate-100 rounded-[1.5rem] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary flex flex-col h-full animate-fade-up" style="animation-delay: ${t}ms;">
            <div class="flex items-center justify-between mb-6">
              <span class="text-sm font-bold text-white bg-[#F2994A] px-3 py-1 rounded shadow-sm">${e.date}</span>
              <span class="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-500 rounded-full">${e.category}</span>
            </div>
            
            <h3 class="text-xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors">${e.title}</h3>
            
            <div class="news-content text-slate-500 mb-6 line-clamp-2 leading-relaxed text-sm markdown-body">
              ${g}
            </div>
            
            <div class="mt-auto text-right z-10">
              <button data-id="${d}" class="expand-btn inline-flex items-center text-sm font-bold text-primary hover:text-blue-700 transition-colors cursor-pointer outline-none">
                <span class="btn-text">了解更多</span> 
                <span class="btn-icon ml-1 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        `;o.insertAdjacentHTML("beforeend",v),y++}),document.querySelectorAll(".expand-btn").forEach(s=>{s.addEventListener("click",e=>{const d=e.currentTarget.getAttribute("data-id"),t=d?u[d]:null;t&&n&&l&&c&&i&&m&&(l.textContent=t.date,c.textContent=t.category,i.textContent=t.title,m.innerHTML=b.parse(t.desc),n.classList.remove("hidden"),n.classList.add("flex"),document.body.style.overflow="hidden")})})}catch(a){console.error("讀取失敗:",a),o.innerHTML='<div class="col-span-full text-center py-12 text-red-500 bg-red-50 rounded-2xl border border-red-100">無法載入，請確認網路連線。</div>'}});
