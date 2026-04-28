export interface ThemeItem {
  id: string;
  title: string;
  items: string[];
  iconBg: string;
  decorationBg: string;
  iconSrc: string;
}

export interface OrganizerItem {
  label: string;
  value: string | string[];
}

export interface CriteriaItem {
  percent: number;
  percentText: string;
  title: string;
  desc: string;
  barColor: string;
}

export interface PrizeCardItem {
  title: string;
  teams: string;
  amount: string;
  certificate: string;
  icon: string;
  cardClass: string;
  badgeClass: string;
  amountClass: string;
  iconSizeClass?: string;
}

export interface RuleSubItem {
  title: string;
  items: string[];
}

export interface RuleItem {
  text: string;
  subItems?: RuleSubItem[];
}

export const themes: ThemeItem[] = [
  {
    id: "theme-energy-iot",
    title: "智慧節能與物聯網應用組",
    items: [
      "主軸一、AI 模型服務平台於智慧節能或設備管理的應用（使用「高效率節能人工智慧模型服務平台」開發）",
      "主軸二、智慧物聯網技術開發（使用「B5G AIoT 智慧農業平台」開發）",
    ],
    iconBg: "bg-emerald-50",
    decorationBg: "bg-emerald-50",
    iconSrc: "/images/internet.png",
  },
  {
    id: "theme-directional-security",
    title: "智慧指向性傳輸暨通訊網路與資訊安全組",
    items: [
      "主軸一、低軌衛星通訊網路與資訊安全（使用「低軌衛星通訊網路與資訊安全」平台開發）",
      "主軸二、雙天線陣列智慧指向性傳輸與應用（使用「雙毫米波天線陣列平台」開發）",
    ],
    iconBg: "bg-purple-50",
    decorationBg: "bg-purple-50",
    iconSrc: "/images/hotspot.png",
  },
  {
    id: "theme-digital-app",
    title: "智慧數位應用組",
    items: [
      "主軸一、智慧交通安全新生活（使用「5G-V2X 平台」進行開發）",
      "主軸二、即時智慧感知結合通訊應用（使用「B5G近海醫療衛星通訊整合平台」進行開發）",
    ],
    iconBg: "bg-sky-50",
    decorationBg: "bg-sky-50",
    iconSrc: "/images/virtual-reality.png",
  },
];

export const organizers: OrganizerItem[] = [
  {
    label: "指導單位",
    value: "教育部、下世代行動通訊技術人才培育計畫辦公室",
  },
  {
    label: "主辦單位",
    value: "次世代超高速傳輸系統整合教學聯盟中心",
  },
  {
    label: "協辦單位",
    value: [
      "國立中興大學",
      "國立虎尾科技大學",
      "國立陽明交通大學",
      "國立清華大學",
      "國立臺灣科技大學",
      "元智大學",
      "長庚大學",
    ],
  },
];

export const prelimCriteria: CriteriaItem[] = [
  {
    percent: 20,
    percentText: "20%",
    title: "企劃書與簡報",
    desc: "",
    barColor: "bg-sky-300",
  },
  {
    percent: 20,
    percentText: "20%",
    title: "設計可行性",
    desc: "",
    barColor: "bg-sky-400",
  },
  {
    percent: 20,
    percentText: "20%",
    title: "設計創意性",
    desc: "",
    barColor: "bg-blue-400",
  },
  {
    percent: 40,
    percentText: "40%",
    title: "系統架構完整性",
    desc: "(含競賽平台關聯性)",
    barColor: "bg-blue-600",
  },
];

export const finalCriteria: CriteriaItem[] = [
  {
    percent: 20,
    percentText: "20%",
    title: "作品設計測試文件",
    desc: "",
    barColor: "bg-yellow-300",
  },
  {
    percent: 20,
    percentText: "20%",
    title: "簡報表現",
    desc: "",
    barColor: "bg-amber-400",
  },
  {
    percent: 60,
    percentText: "60%",
    title: "實體展示",
    desc: "",
    barColor: "bg-amber-500",
  },
];

export const prizeCards: PrizeCardItem[] = [
  {
    title: "第一名",
    teams: "各 1 隊",
    amount: "50,000",
    certificate: "每人獎狀 乙 紙",
    icon: "/images/1st-prize.png",
    cardClass:
      "bg-gradient-to-br from-amber-50 to-orange-50/30 border border-amber-200/60",
    badgeClass: "text-amber-600",
    amountClass: "text-amber-600",
    iconSizeClass: "w-[82%] h-[82%]",
  },
  {
    title: "第二名",
    teams: "各 1 隊",
    amount: "30,000",
    certificate: "每人獎狀 乙 紙",
    icon: "/images/2nd-place.png",
    cardClass:
      "bg-gradient-to-br from-slate-100/80 to-slate-50 border border-slate-200/80",
    badgeClass: "text-slate-500",
    amountClass: "text-slate-600",
    iconSizeClass: "w-[82%] h-[82%]",
  },
  {
    title: "第三名",
    teams: "各 1 隊",
    amount: "10,000",
    certificate: "每人獎狀 乙 紙",
    icon: "/images/3rd-place.png",
    cardClass:
      "bg-gradient-to-br from-orange-100/50 to-amber-50/50 border border-orange-200/60",
    badgeClass: "text-orange-700/70",
    amountClass: "text-orange-700/80",
    iconSizeClass: "w-[82%] h-[82%]",
  },
];

export const honorablePrize: PrizeCardItem = {
  title: "佳作",
  teams: "各 2 隊",
  amount: "5,000",
  certificate: "每人獎狀 乙 紙",
  icon: "/images/medal.png",
  cardClass:
    "bg-white border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]",
  badgeClass: "text-slate-500",
  amountClass: "text-primary",
  iconSizeClass: "w-8 h-8",
};

export const rulesList: RuleItem[] = [
  {
    text: "參賽隊伍未於期限完成或未依規定繳交各項參賽文件及相關資料者，即自動喪失參賽資格，無有異議。",
  },
  {
    text: "參賽作品必須由參賽隊伍自行創作，不得抄襲或委託他人代勞，也不得侵犯著作權、專利權、智慧財產權或其他權利。參賽者若違反此規定，需自行承擔法律責任，主辦單位不負責任。如果經檢舉、告發或查證屬實，將取消其參賽和得獎資格，並追回已發放的獎金和獎狀。",
  },
  {
    text: "參賽作品在創作過程中使用人工智慧(Artificial Intelligence，以下簡稱 AI)或生成式人工智慧(生成式 AI)作為輔助工具，而非用於產生最終設計成果，參賽者必須在初賽文件或決賽簡報中揭露使用過程或步驟並進行標注。若經查核發現使用 AI 但未在初賽文件或決賽簡報中標明，主辦單位有權重新評分或不予計分。此外，若經檢舉、告發或查證屬實，將取消其參賽資格及得獎資格，並追回所得獎金及獎狀。",
  },
  {
    text: "參賽者同意授權主辦單位及其指定的第三方，無償且不限時間及次數，使用其參賽作品及提案企劃書內容。這些使用方式包括但不限於紙本、實體、影音、網站及其他媒體形式的公布、展示、出版、刊登、發表和宣傳，並用於推廣及學校教學教材等非營利用途。參賽者同意不對主辦單位及其指定第三方行使智慧財產人格權（包括專利及著作人格權）。",
  },
  {
    text: "參賽隊伍若以同一作品參加其他競賽並獲得獎項，不得參加本競賽。若經查證違反此規定，將立即取消其得獎資格，且不得提出異議。",
  },
  {
    text: "參賽隊伍若以同一作品同時報名本競賽和其他競賽，並在本競賽決賽前接獲其他競賽通知進入該競賽之決賽（或複賽），必須放棄參加其他競賽，才能參加本競賽決賽。若被發現違反此規定，將取消其得獎資格，不得提出異議。",
  },
  {
    text: "如果參賽作品已經在其他競賽中獲得獎勵，但經過顯著改進或修正（由競賽評審委員認定），則可以報名參加本次競賽。在初賽文件或決賽簡報中，必須詳細說明本次參賽作品與之前獲獎作品之間的不同之處。若被發現違反此規定，主辦單位將直接取消其得獎資格，不得提出任何異議。",
  },
  {
    text: "如果參賽作品已接受國內外機構的經費補助，應在初賽文件或決賽簡報中註明補助單位及補助金額。此外，若有技術合作單位，也應一併揭露。",
  },
  { text: "請勿使用已商品化作品參加本競賽。" },
  {
    text: "如果參賽隊伍提出異議，必須提供具體證明。除非能具體證明其他作品違反本作業須知規定，否則不得提出其他異議。",
  },
  {
    text: "晉級決賽之參賽隊伍必須依主辦單位規定的時間與地點參加決賽實地測試，未於指定時間到場者，視同放棄。",
  },
  {
    text: "決賽當天提供電源和無線網路，主辦單位不提供電腦給參賽者，請自行攜帶筆記型電腦及所需設備。",
  },
  { text: "獲獎隊伍將個別通知並於活動網頁公告之，未獲獎者不另行通知。" },
  {
    text: "參賽隊伍同意活動期間，由主辦單位全程拍攝及錄製相關之活動及影像並得予以呈現。",
  },
  {
    text: "參賽者同意主辦單位基於競賽評選工作及競賽活動運作等相關目的所需，茲同意以下事項(參賽者必須同意主辦單位及執行單位蒐集、處理及利用其個人資料)：(參賽者必須同意主辦單位及執行單位蒐集、處理及利用其個人資料)：",
    subItems: [
      {
        title: "(一) 個人資料之蒐集目的和類別",
        items: [
          "1. 主辦單位因執行業務及活動蒐集您的個人資料。",
          "2. 主辦單位所蒐集您的個人資料類別，包括姓名、出生年月日、地址、身分證統一編號、學歷、帳戶資料、聯絡地址、住家電話、行動電話、電子信箱、任職單位及其他得以直接或間接方式識別個人資料之身分文件等相關資料。個人資料之處理或利用主辦單位遵循「個人資料保護法」與相關法令規範並依據主辦單位隱私權政策聲明，蒐集、處理及利用您的個人資料。",
        ],
      },
      {
        title:
          "(二) 主辦單位利用您的個人資料之方式為書面、電子、網際網路或其他適當方式。請務必提供完整正確的個人資料，若您不提供您的個人資料或提供不完整、有錯誤，將可能影響您相關的權益。您依個人資料保護法第3條規定得行使之權利及方式。",
        items: [
          "1. 查詢或請求閱覽、請求製給複製本，主辦單位得酌收必要成本費用。",
          "2. 請求補充或更正。",
          "3. 請求停止蒐集、處理或利用您的個人資料，或請求刪除您的個人資料，但因主辦單位執行職務或業務所必須者，不在此限。",
          "4. 行使權利之方式：可親自至主辦單位或請代理人填委託書申請。",
          "5. 若您行使上述權利，而影響權益時，主辦單位將不負相關賠償責任。如您對上述事項有相關疑問時，請與主辦單位聯繫。",
        ],
      },
    ],
  },
  {
    text: "如於競賽期間發生颱風、水災地震等重大天然災害、法定傳染病疫情、空襲、火災等重大事故時，競賽是否延期以主辦單位公告為主，主辦單位有權更改賽制或變更審查方式，盡力維護參賽者權益。",
  },
  {
    text: "為因應嚴重特殊傳染性疾病發生，主辦單位得配合政府相關規定或疫情發展狀況採取對應防疫措施，各隊伍應隨時注意主辦單位公告資訊並遵守相關規定，如有違規之情事經勸阻無效者，將取消入場及競賽資格，以維護公共衛生安全。",
  },
  { text: "本作業須知如有未盡事宜，得隨時修正之，並公告於競賽網頁。" },
];

export const toChineseNum = (num: number) => {
  const chineseNums = [
    "零",
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "十二",
    "十三",
    "十四",
    "十五",
    "十六",
    "十七",
    "十八",
    "十九",
    "二十",
    "二十一",
    "二十二",
  ];
  return chineseNums[num] || num.toString();
};
