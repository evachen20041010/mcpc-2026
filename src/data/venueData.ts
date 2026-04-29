export interface TransportMethod {
  title: string;
  desc: string;
  iconSrc: string;
  bgClass: string;
}

export interface VenueInfo {
  schoolName: string;
  buildingName: string;
  address: string;
  mapTitle: string;
  mapEmbedUrl: string;
  transportMethods: TransportMethod[];
}

export const venueData: VenueInfo = {
  schoolName: "國立中興大學",
  buildingName: "電機資訊學院暨電機大樓 1 樓",
  address: "臺中市南區興大路145號",
  mapTitle: "中興大學電機資訊學院",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d910.3525594043513!2d120.67599010506343!3d24.12222711670683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d02be604cd3%3A0xd49a3b0aa67b6d87!2z6Zu75qmf6LOH6KiK5a246Zmi5pqo6Zu75qmf5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1774498608097!5m2!1szh-TW!2stw",
  transportMethods: [
    {
      title: "搭乘市區公車",
      desc: "<strong>【自高鐵臺中站】</strong>可搭乘 33、158 路。<br/><strong>【自臺中火車站】</strong>可搭乘 35、50、52、59、65、73 等路。<br/><span class='text-[13px] opacity-75 mt-1.5 block leading-tight'>※ 興大路正門及國光路側門皆有站牌，上車前請先向司機確認行駛方向。</span>",
      iconSrc: "/images/bus.png",
      bgClass: "bg-emerald-500",
    },
    {
      title: "雙鐵轉乘與計程車",
      desc: "<strong>【計程車】</strong>火車站至本校約 10-15 分鐘；高鐵站約 20-30 分鐘。<br/><strong>【火車轉乘】</strong>可於高鐵站轉搭台鐵區間車至「臺中火車站」，出站後再轉乘公車或計程車前往本校。",
      iconSrc: "/images/taxi.png",
      bgClass: "bg-blue-600",
    },
    {
      title: "公共自行車 YouBike",
      desc: "本校距臺中火車站約 2.7 公里，校園周邊設有多個租借站點（如：國立中興大學、中興湖、興大美村路口），借還車便利，邀請您一同響應低碳環保。",
      iconSrc: "/images/bicycle.png",
      bgClass: "bg-orange-500",
    },
    {
      title: "自行開車",
      desc: `導航請定位「國立中興大學」。<a href="https://oga.nchu.edu.tw/unit-news-detail/id/1204/unit/4/mid/29" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2">停車線上繳費連結</a><br/><span class='text-[13px] text-rose-500 font-bold mt-1.5 block leading-tight'>※ 貼心提醒：車輛進入校園需依規定繳交停車管理費，離校前至行政大樓繳費機繳費（可用現金、行動及電子支付），另可採掃描 QRcode 線上繳費，未逾 30 分鐘免費，逾 30 分鐘自入校時起每小時 40 元，每日／次收費上限 300 元，建議參賽者多加利用大眾運輸工具。</span>`,
      iconSrc: "/images/car.png",
      bgClass: "bg-slate-700",
    },
  ],
};
