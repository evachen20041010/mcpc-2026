import{q as w,d as E,e as T,g as B,l as M,h as I}from"./client.DOiQ--ep.js";import{g as l}from"./marked.esm.i_gIkIP3.js";document.addEventListener("DOMContentLoaded",async()=>{l.setOptions({breaks:!0});const o=document.getElementById("news-container");if(!o)return;const n=document.getElementById("news-modal"),c=document.getElementById("modal-backdrop"),g=document.querySelectorAll(".close-modal-btn"),i=document.getElementById("modal-date"),m=document.getElementById("modal-category"),u=document.getElementById("modal-title"),p=document.getElementById("modal-content"),x={},y=()=>{n&&(n.classList.add("hidden"),n.classList.remove("flex"),document.body.style.overflow="")};g.forEach(a=>a.addEventListener("click",y)),c&&c.addEventListener("click",y);try{const a=w(E(T,"news"),B("date","desc"),M(3)),b=await I(a);if(o.innerHTML="",b.empty){o.innerHTML='<div class="col-span-full text-center py-12 text-slate-500 bg-slate-50 rounded-2xl border border-slate-100">目前尚無最新消息發布。</div>';return}let f=0;for(const d of b.docs){const t=d.data(),s=d.id;x[s]=t;const e=(f+1)*150,v=await l.parse(t.desc),r=document.createElement("div");r.innerHTML=v;const h=r.textContent||r.innerText||"",L=`
          <div class="group bg-white border-2 border-slate-100 rounded-[1.5rem] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary flex flex-col h-full animate-fade-up" style="animation-delay: ${e}ms;">
            <div class="flex items-center justify-between mb-6">
              <span class="text-sm font-bold text-white bg-[#F2994A] px-3 py-1 rounded shadow-sm">${t.date}</span>
              <span class="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-500 rounded-full">${t.category}</span>
            </div>
            
            <h3 class="text-xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors">${t.title}</h3>
            
            <p class="news-content text-slate-500 mb-6 line-clamp-2 leading-relaxed text-sm transition-all duration-300">
              ${h}
            </p>
            
            <div class="mt-auto text-right z-10">
              <button data-id="${s}" class="expand-btn inline-flex items-center text-sm font-bold text-primary hover:text-blue-700 transition-colors cursor-pointer outline-none">
                <span class="btn-text">顯示全文</span>
                <span class="btn-icon ml-1 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        `;o.insertAdjacentHTML("beforeend",L),f++}document.querySelectorAll(".expand-btn").forEach(d=>{d.addEventListener("click",async t=>{const s=t.currentTarget.getAttribute("data-id"),e=s?x[s]:null;e&&n&&i&&m&&u&&p&&(i.textContent=e.date,m.textContent=e.category,u.textContent=e.title,p.innerHTML=await l.parse(e.desc),n.classList.remove("hidden"),n.classList.add("flex"),document.body.style.overflow="hidden")})})}catch(a){console.error("讀取失敗:",a),o.innerHTML='<div class="col-span-full text-center py-12 text-red-500 bg-red-50 rounded-2xl border border-red-100">無法載入，請確認網路連線。</div>'}});
