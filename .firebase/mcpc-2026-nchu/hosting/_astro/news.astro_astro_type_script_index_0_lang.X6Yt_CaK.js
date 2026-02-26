import{q as y,d as f,e as g,f as v,g as h}from"./client.BdXJJ-2L.js";document.addEventListener("DOMContentLoaded",async()=>{const o=document.getElementById("all-news-container");if(!o)return;const n=document.getElementById("news-modal"),l=document.getElementById("modal-backdrop"),b=document.querySelectorAll(".close-modal-btn"),r=document.getElementById("modal-date"),c=document.getElementById("modal-category"),i=document.getElementById("modal-title"),m=document.getElementById("modal-content"),u={},x=()=>{n&&(n.classList.add("hidden"),n.classList.remove("flex"),document.body.style.overflow="")};b.forEach(a=>a.addEventListener("click",x)),l&&l.addEventListener("click",x);try{const a=y(f(g,"news"),v("date","desc")),p=await h(a);if(o.innerHTML="",p.empty){o.innerHTML='<div class="col-span-full text-center py-12 text-slate-500 bg-slate-50 rounded-2xl border border-slate-100">目前尚無最新消息發布。</div>';return}p.forEach(s=>{const t=s.data(),d=s.id;u[d]=t;const e=`
          <div class="group bg-white border-2 border-slate-100 rounded-[1.5rem] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary flex flex-col h-full animate-fade-up">
            <div class="flex items-center justify-between mb-6">
              <span class="text-sm font-bold text-white bg-[#F2994A] px-3 py-1 rounded shadow-sm">${t.date}</span>
              <span class="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-500 rounded-full">${t.category}</span>
            </div>
            
            <h3 class="text-xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors">${t.title}</h3>
            
            <p class="news-content text-slate-500 mb-6 line-clamp-2 leading-relaxed text-sm transition-all duration-300">
              ${t.desc}
            </p>
            
            <div class="mt-auto text-right">
              <button data-id="${d}" class="expand-btn inline-flex items-center text-sm font-bold text-primary hover:text-blue-700 transition-colors cursor-pointer outline-none">
                <span class="btn-text">了解更多</span> 
                <span class="btn-icon ml-1 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>
        `;o.insertAdjacentHTML("beforeend",e)}),document.querySelectorAll(".expand-btn").forEach(s=>{s.addEventListener("click",t=>{const d=t.currentTarget.getAttribute("data-id"),e=d?u[d]:null;e&&n&&r&&c&&i&&m&&(r.textContent=e.date,c.textContent=e.category,i.textContent=e.title,m.textContent=e.desc,n.classList.remove("hidden"),n.classList.add("flex"),document.body.style.overflow="hidden")})})}catch(a){console.error("讀取失敗:",a),o.innerHTML='<div class="col-span-full text-center py-12 text-red-500 bg-red-50 rounded-2xl border border-red-100">無法載入，請確認網路連線。</div>'}});
