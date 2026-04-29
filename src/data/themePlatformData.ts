export type ThemeKey =
  | "energy-iot"
  | "directional-security"
  | "digital-app";

export interface CampSession {
  region: string;
  datetime: string;
  location: string;
  note?: string;
}

export interface PlatformInfo {
  name: string;
  intro?: string;
  rentalMethod?: string;
  trainingContact?: string;
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
        intro: "",
        rentalMethod: "",
        trainingContact: "",
        campSessions: [
          {
            region: "北部場",
            datetime: "115年08月07日（五）09:00 - 17:00",
            location: "新竹清華大學",
          },
          {
            region: "南部場",
            datetime: "115年08月11日（二）09:00 - 17:00",
            location: "南臺科技大學",
          },
        ],
      },
      {
        name: "B5G AIoT智慧農業平台",
        intro: "",
        rentalMethod: "",
        trainingContact: "",
        campSessions: [
          {
            region: "北部場",
            datetime: "預計115年08月27日（四）13:00 - 17:00",
            location: "陽明交通大學",
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
        intro: "",
        rentalMethod: "",
        trainingContact: "",
        campSessions: [
          {
            region: "北部場",
            datetime: "預計115年08月上旬",
            location: "待敲定場地",
          },
        ],
      },
      {
        name: "雙毫米波天線陣列平台",
        intro: "",
        rentalMethod: "",
        trainingContact: "",
        campSessions: [
          {
            region: "北部場",
            datetime: "預計115年08月03日（一）",
            location: "待敲定場地",
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
        name: "5G-V2X平台",
        intro: "",
        rentalMethod: "",
        trainingContact: "",
        campSessions: [
          {
            region: "中部場",
            datetime: "115年08月03日（一）10:00 - 17:00",
            location: "臺中中興大學",
          },
        ],
      },
      {
        name: "B5G近海醫療衛星通訊整合平台",
        intro: "",
        rentalMethod: "",
        trainingContact: "",
        campSessions: [
          {
            region: "北部場",
            datetime: "預計115年07月20日（一）09:00 - 17:00",
            location: "桃園長庚大學",
          },
        ],
      },
    ],
  },
};

export const trainingCampIntro = [
  "培訓營課程將教導如何操作各平台與感測器元件",
  "為體恤參賽團隊交通便利性，各平台培訓有規劃北部、中部及南部場次，參賽團隊可依所在區域選擇場次參與",
  "辦理培訓營期間，如發生颱風、水災地震等重大天然災害、法定傳染病疫情、空襲、火災等重大事故，以及報名人數不足5人時，則取消辦理該場次培訓營"
];
