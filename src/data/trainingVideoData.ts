export type TrainingResourceType = "youtube" | "drive" | "pending";

export interface TrainingVideoItem {
  axis: string;
  title: string;
  platform: string;
  type: TrainingResourceType;
  youtubeId?: string;
  href?: string;
}

export interface TrainingVideoGroup {
  id: string;
  label: string;
  videos: TrainingVideoItem[];
}

export const trainingVideoGroups: TrainingVideoGroup[] = [
  {
    id: "energy-iot",
    label: "智慧節能與物聯網應用組",
    videos: [
      {
        axis: "主軸一",
        title: "智慧節能或低軌衛星物聯網的應用",
        platform: "高效率節能人工智慧模型服務平台",
        type: "pending",
      },
      {
        axis: "主軸二",
        title: "智慧物聯網技術開發",
        platform: "B5G AIoT 智慧農業平台",
        type: "pending",
      },
    ],
  },

  {
    id: "directional-security",
    label: "智慧指向性傳輸暨通訊網路與資訊安全組",
    videos: [
      {
        axis: "主軸一",
        title: "低軌衛星通訊網路與資訊安全",
        platform: "低軌衛星通訊網路與資訊安全平台",
        type: "pending",
      },
      {
        axis: "主軸二",
        title: "雙天線陣列智慧指向性傳輸與應用",
        platform: "雙毫米波天線陣列平台",
        type: "drive",
        href: "https://drive.google.com/drive/folders/12b6KhGeBEOk-VapR08FPFzgzC4zSl-FV",
      },
    ],
  },

  {
    id: "digital-app",
    label: "智慧數位應用組",
    videos: [
      {
        axis: "主軸一",
        title: "智慧交通安全新生活",
        platform: "5G-V2X 平台",
        type: "youtube",
        youtubeId: "CAP3EDdX7YY",
      },
      {
        axis: "主軸二",
        title: "即時智慧感知結合通訊應用",
        platform: "B5G 近海醫療衛星通訊整合平台",
        type: "pending",
      },
    ],
  },
];
