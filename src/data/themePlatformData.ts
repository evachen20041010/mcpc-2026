export type ThemeKey = "energy-iot" | "directional-security" | "digital-app";

export interface CampSession {
  region: string;
  datetime: string;
  location: string;
  registrationLink?: string;
  note?: string;
}

export interface ContactInfo {
  name?: string;
  phone?: string;
  email?: string;
}

export interface PlatformInfo {
  name: string;
  axis?: {
    label: string;
    title: string;
  };
  intro?: string;
  features?: string[];
  rentalMethod?: string;
  equipmentReservationLink?: string;
  materialLink?: string;
  trainingContacts?: ContactInfo[];
  campSessions: CampSession[];
}

export interface ThemeInfo {
  pageTitle: string;
  heroLabel: string;
  platforms: PlatformInfo[];
}

export const themePlatformData: Record<ThemeKey, ThemeInfo> = {
  "energy-iot": {
    pageTitle: "智慧節能與物聯網應用組",
    heroLabel: "THEME INFORMATION",
    platforms: [
      {
        name: "高效率節能人工智慧模型服務平台",
        axis: {
          label: "主軸一",
          title: "AI 模型服務平台於智慧節能或設備管理的應用",
        },
        intro:
          "旨在透過雲端技術與跨層次系統整合，打造一個數據驅動、智慧應用的實作環境。學生可通過本平台利用人工智慧及統計等方法模型來進行數據分類分析或預測數據走向，並根據分析 / 預測結果實作出具有智慧節能目的的應用，如能耗分析、智慧控制等，以實現對能源的精確節約和控制。",
        rentalMethod: `本平台鼓勵參賽團隊使用自己手邊的物聯網感測器進行應用，惟部分設備可提供外借，但感測器種類跟數量有限(會收押金)，故僅限晉級「題目主軸一. 智慧節能或低軌衛星物聯網的應用」的決賽團隊以"參賽團隊"為單位申請設備外借，不便之處，敬請見諒。`,
        equipmentReservationLink: "https://forms.gle/L2G6LMgkNmnJbBQ8A",
        trainingContacts: [
          {
            name: "劉紫瑩",
            phone: "03-5731200",
            email: "liuty@mx.nthu.edu.tw",
          },
        ],
        campSessions: [
          {
            region: "短期課程",
            datetime: "115 年 9 月（預計）",
            location: "台中科技大學",
            note: "受邀到學校課堂推廣，故不開放對外報名。",
          },
          {
            region: "北部場",
            datetime: "115 年 8 月 7 日（五）10:00 - 17:00（預計）",
            location: "新竹清華大學",
            registrationLink: "https://forms.gle/vS9KMzfsaBH6PJBK8",
          },
          {
            region: "南部場",
            datetime: "115 年 8 月 11 日（二）10:00 - 17:00（預計）",
            location: "南臺科技大學",
            registrationLink: "https://forms.gle/vS9KMzfsaBH6PJBK8",
          },
        ],
      },
      {
        name: "B5G AIoT 智慧農業平台",
        axis: {
          label: "主軸二",
          title: "智慧物聯網技術開發",
        },
        intro:
          "「5G AIoT 智慧農業平台」結合 5G 通訊與 AIoT 技術，推動農業邁向自動化與智慧化，提升農作物的種植、管理與收成效率。透過感測器蒐集土壤濕度、氣候條件等關鍵數據，系統能夠精準調控灌溉，確保作物獲得適量水分，降低用水成本。此外，根據即時監測數據與 AI 分析結果，平台可提供最佳施肥方案，避免土壤酸化與病蟲害，提高農產品的健康與品質。依靠 5G 與 AIoT 技術，該平台能建立農田監測系統，全天候掌握環境變化與作物生長狀況。透過數據分析與機器學習演算法，預測作物生長趨勢及可能面臨的病蟲害風險，協助農民提前採取應對措施，減少損失並提升產量。這不僅讓農業管理更精確，也能有效運用資源，實現更高效的農業生產模式。此外，5G AIoT 智慧農業平台還能推動臺灣農產品的生產追溯制度，透過感測器記錄作物生長的各個環節，建立完整的農產品追溯體系。",
        rentalMethod:
          "本平台鼓勵同學參與培訓營進行創意發想及交流，不提供設備租借。",
        equipmentReservationLink: "https://forms.gle/mwxMnF1Z785SQctq5",
        trainingContacts: [
          {
            name: "尤哲昊",
            phone: "0976218729",
            email: "youzhehao0924.ee13@nycu.edu.tw",
          },
        ],
        campSessions: [
          {
            region: "北部場",
            datetime: "115 年 8 月 27 日（四）13:00 - 17:00（暫定）",
            location: "陽明交通大學（校區暫定）",
            registrationLink: "https://forms.gle/3MgNvhz2q6EAEjzL8",
          },
        ],
      },
    ],
  },

  "directional-security": {
    pageTitle: "智慧指向性傳輸暨通訊網路與資訊安全組",
    heroLabel: "THEME INFORMATION",
    platforms: [
      {
        name: "低軌衛星通訊網路與資訊安全平台",
        axis: {
          label: "主軸一",
          title: "低軌衛星通訊網路與資訊安全",
        },
        intro:
          "本次活動將介紹低軌衛星通訊網路與資訊安全平台，針對通訊網路與資訊安全進行課程教學說明，學生可進行衛星網路通訊模擬與安全機制驗證之整合應用，該平台可實現下列多項功能：",
        features: [
          "固定速率流量下之衛星網路傳輸效能模擬",
          "衛星隨機存取機制之效能評估",
          "多使用者與 ACM 機制之衛星效能分析",
          "多波束衛星架構下之網路換手情境模擬",
          "可視化衛星網路拓樸與路由行為視覺化分析",
          "動態存取控制之政策引擎決策與合規性自動驗證",
          "雲端原生工作負載之動態身分核發與零信任通訊驗證",
          "專屬公鑰基礎設施建置與 mTLS 雙向加密身分驗證",
          "基礎設施配置檔之安全錯誤掃描與自動化修復建議",
          "雲端叢集資源部屬之動態合規性攔截與策略管控",
          "應用程式原始碼語義比對與漏洞快速偵測",
          "持續整合流程與本機端之機密資訊攔截與暴露掃描",
        ],
        rentalMethod:
          "本平台鼓勵同學參與培訓營進行創意發想及交流，不提供設備租借。",
        trainingContacts: [
          {
            name: "林嵩庭",
            phone: "02-2733-3141 分機 7715",
            email: "m11407521@mail.ntust.edu.tw",
          },
        ],
        campSessions: [
          {
            region: "北部場",
            datetime: "115 年 7 月 25 日（六）08:30 - 17:00",
            location: "臺灣科技大學 第二教學大樓 T2-510",
            registrationLink: "https://forms.gle/jvVTc8RoJckzC38V7",
          },
        ],
      },
      {
        name: "雙毫米波天線陣列平台",
        axis: {
          label: "主軸二",
          title: "雙天線陣列智慧指向性傳輸與應用",
        },
        intro:
          "該雙毫米波天線陣列平台將可被雙電腦控制波束智慧指向及通訊傳輸應用，該平台可實現下列多項功能：",
        features: [
          "雙天線陣列波束成型",
          "Broadside 方向雙天線調校前 / 後頻譜驗證",
          "雙天線多角度校正前 / 後能量增長",
          "雙天線自動化多角度指向之場型圖",
          "雙天線天線陣列方位角估測",
          "雙天線陣列波束指向與通訊訊號傳輸",
        ],
        rentalMethod:
          "本平台設備因體積與重量不便之故，僅提供遠端操作使用，不提供租借攜回操作。",
        equipmentReservationLink:
          "請直接 Email 聯絡窗口，安排設備預約線上使用。",
        trainingContacts: [
          {
            name: "蘇佾凡",
            phone: "03-4638800 分機 7701",
            email: "s1110435@mail.yzu.edu.tw",
          },
          {
            name: "李苡瑄",
            phone: "03-4638800 分機 7701",
            email: "s1110323@mail.yzu.edu.tw",
          },
        ],
        campSessions: [
          {
            region: "北部場",
            datetime: "115 年 08 月 03 日（一）",
            location: "元智大學 7 館 307 教室",
            registrationLink:
              "https://docs.google.com/forms/d/e/1FAIpQLSdeWY-BBfNM8iilp3lbwl1p8Cfg8f1CcOvofjM-BGBjyd__rg/viewform",
          },
        ],
      },
    ],
  },

  "digital-app": {
    pageTitle: "智慧數位應用組",
    heroLabel: "THEME INFORMATION",
    platforms: [
      {
        name: "5G-V2X 平台",
        axis: {
          label: "主軸一",
          title: "智慧交通安全新生活",
        },
        intro:
          "本競賽平台建構於一套整合 ETSI MEC Platform、開源 5G 核心網 free5GC 與開源無線接取模擬環境 UERANSIM 的開源測試平台（testbed）之上，提供完整且彈性的 5G 邊緣運算實驗環境。參賽者可於此平台上開發與部署 V2X（Vehicle-to-Everything）應用服務，並以 MEC APP 形式實現低延遲、高即時性的車聯網應用情境。透過此開源架構，不僅能加速創新服務的驗證與實作，也讓參賽團隊能深入掌握 5G 核網與邊緣運算整合之關鍵技術，打造具實務價值與未來擴展性的智慧交通解決方案。",
        rentalMethod:
          "本平台主要以開源系統軟體與模擬器建構，參賽團隊在虛擬機上即可建置，無需租借設備。",
        equipmentReservationLink:
          "本平台僅採用模擬器進行實作，因此無需使用任何硬體設備，亦不提供設備租借服務。",
        materialLink:
          "https://drive.google.com/drive/folders/1Ahr8ZSu7FG9ZYLY0MlUriMlbwHr2NKO8?usp=sharing",
        trainingContacts: [
          {
            name: "杜俊育",
            phone: "06-2533131 分機 3239",
            email: "duketu@stust.edu.tw",
          },
          {
            name: "鄭昀賾",
            phone: "0968-880356",
            email: "4bog0928@stust.edu.tw",
          },
        ],
        campSessions: [
          {
            region: "中部場",
            datetime: "115 年 08 月 04 日（五）10:00 - 17:00",
            location: "國立中興大學電機系 4 樓 402 電腦教室",
            registrationLink: "https://reurl.cc/rEqO5E",
          },
        ],
      },
      {
        name: "B5G 近海醫療衛星通訊整合平台",
        axis: {
          label: "主軸二",
          title: "即時智慧感知結合通訊應用",
        },
        intro:
          "本平台結合衛星通訊與近海醫療技術，聚焦於 B5G/6G 技術之高速、穩定與低延遲特性，可垂直整合應用於海上遠距醫療監測。透過結合 B5G 與低軌衛星，提升醫療服務可及性與即時性。平台具實作導向學習，培育具備通訊與智慧醫療整合能力之下世代專業人才。",
        rentalMethod:
          "本平台鼓勵同學參與培訓營進行創意發想及交流，不提供設備租借。",
        equipmentReservationLink: "https://forms.gle/kv5r4FZJMR8b5e8v9",
        trainingContacts: [
          {
            name: "詹皇瑱",
            phone: "03-2118800 分機 5698",
            email: "htchan@cgu.edu.tw",
          },
        ],
        campSessions: [
          {
            region: "北部場",
            datetime: "預定 115 年 7 月 20 日（一）09:00 - 17:00",
            location: "桃園長庚大學",
            registrationLink: "https://forms.gle/2nSjdrC7toTUR4RH6",
          },
        ],
      },
    ],
  },
};

export const trainingCampIntro = [
  "培訓營課程將教導如何操作各平台與感測器元件。",
  "各平台培訓營之辦理時間、地點及相關內容，主辦單位保留調整及變更之權利，最新資訊請以各平台官方網站公告為準，本競賽作業須知所列之培訓營場次與時間僅供參考，實際辦理情形依各平台公告內容為準。",
  "為體恤參賽團隊交通便利性，各平台培訓有規劃北部、中部及南部場次，參賽團隊可依所在區域選擇場次參與。",
];
