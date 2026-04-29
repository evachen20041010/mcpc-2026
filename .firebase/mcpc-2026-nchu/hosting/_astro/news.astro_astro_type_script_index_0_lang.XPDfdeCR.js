import{q as w,c as E,d as T,o as B,g as M}from"./client.PQoiaQfj.js";import{g as l}from"./marked.esm.i_gIkIP3.js";document.addEventListener("DOMContentLoaded",async()=>{const o=document.getElementById("all-news-container");if(!o)return;l.setOptions({breaks:!0});const n=document.getElementById("news-modal"),c=document.getElementById("modal-backdrop"),g=document.querySelectorAll(".close-modal-btn"),i=document.getElementById("modal-date"),m=document.getElementById("modal-category"),u=document.getElementById("modal-title"),p=document.getElementById("modal-content"),x={},y=()=>{n&&(n.classList.add("hidden"),n.classList.remove("flex"),document.body.style.overflow="")};g.forEach(a=>a.addEventListener("click",y)),c&&c.addEventListener("click",y);try{const a=w(E(T,"news"),B("date","desc")),b=await M(a);if(o.innerHTML="",b.empty){o.innerHTML=`
          <div class="col-span-full text-center py-12 text-slate-500 bg-slate-50 rounded-2xl border border-slate-100">
            目前尚無最新消息發布。
          </div>
        `;return}let f=0;for(const d of b.docs){const e=d.data(),s=d.id;x[s]=e;const t=(f+1)*120,v=await l.parse(e.desc),r=document.createElement("div");r.innerHTML=v;const h=r.textContent||r.innerText||"",L=`
          <article
            class="group bg-white rounded-[2rem] p-7 border border-slate-200 hover:border-primary/50 hover:shadow-xl transition-all duration-500 flex flex-col h-full animate-fade-up"
            style="animation-delay: ${t}ms;"
          >
            <div class="flex items-center justify-between gap-3 mb-6 flex-wrap">
              <span class="text-sm font-bold text-white bg-[#F2994A] px-3 py-1 rounded shadow-sm">
                ${e.date}
              </span>
              <span class="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-500 rounded-full">
                ${e.category}
              </span>
            </div>

            <h3 class="text-xl font-bold text-slate-800 mb-4 leading-snug group-hover:text-primary transition-colors">
              ${e.title}
            </h3>

            <p class="text-slate-500 mb-6 line-clamp-3 leading-relaxed text-sm">
              ${h}
            </p>

            <div class="mt-auto text-right">
              <button
                data-id="${s}"
                class="expand-btn inline-flex items-center text-sm font-bold text-primary hover:text-blue-700 transition-colors cursor-pointer outline-none"
              >
                <span>顯示全文</span>
                <span class="ml-1 transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </article>
        `;o.insertAdjacentHTML("beforeend",L),f++}document.querySelectorAll(".expand-btn").forEach(d=>{d.addEventListener("click",async e=>{const s=e.currentTarget.getAttribute("data-id"),t=s?x[s]:null;t&&n&&i&&m&&u&&p&&(i.textContent=t.date,m.textContent=t.category,u.textContent=t.title,p.innerHTML=await l.parse(t.desc),n.classList.remove("hidden"),n.classList.add("flex"),document.body.style.overflow="hidden")})})}catch(a){console.error("讀取失敗:",a),o.innerHTML=`
        <div class="col-span-full text-center py-12 text-red-500 bg-red-50 rounded-2xl border border-red-100">
          無法載入，請確認網路連線。
        </div>
      `}});
