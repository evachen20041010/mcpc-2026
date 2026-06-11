export interface DownloadItem {
  title: string;
  fileName: string;
  desc?: string;
  fileType?: string;
  updatedAt?: string;
  href: string;
  previewSrc?: string;
  isExternal?: boolean;
  isAvailable?: boolean;
}

export const downloadItems: DownloadItem[] = [
  {
    title: "競賽海報",
    fileName: "poster_r4.pdf",
    desc: "可下載對外宣傳使用。",
    fileType: "PDF",
    updatedAt: "",
    href: "/downloads/poster_r4.pdf",
    previewSrc: "/downloads/poster_r4.png",
    isAvailable: true,
  },
  {
    title: "競賽作業須知",
    fileName: "2026行動通訊實務競賽-競賽作業須知V5.pdf",
    desc: "",
    fileType: "PDF",
    updatedAt: "",
    href: "/downloads/2026行動通訊實務競賽-競賽作業須知V5.pdf",
    previewSrc: "/downloads/2026行動通訊實務競賽-競賽作業須知V5.png",
    isAvailable: true,
  },
  {
    title: "活動切結書",
    fileName: "2026行動通訊實務競賽-活動切結書(空).docx",
    desc: "",
    fileType: "DOCX",
    updatedAt: "",
    href: "/downloads/2026行動通訊實務競賽-活動切結書(空).docx",
    previewSrc: "/downloads/2026行動通訊實務競賽-活動切結書(空).png",
    isAvailable: true,
  },
  {
    title: "提案企劃書",
    fileName: "2026行動通訊實務競賽-提案企劃書(空).docx",
    desc: "",
    fileType: "DOCX",
    updatedAt: "",
    href: "/downloads/2026行動通訊實務競賽-提案企劃書(空).docx",
    previewSrc: "/downloads/2026行動通訊實務競賽-提案企劃書(空).png",
    isAvailable: true,
  },
  {
    title: "工讀生參賽切結書",
    fileName: "2026行動通訊實務競賽-工讀生參賽切結書(空).docx",
    desc: "",
    fileType: "DOCX",
    updatedAt: "",
    href: "/downloads/2026行動通訊實務競賽-工讀生參賽切結書(空).docx",
    previewSrc: "/downloads/2026行動通訊實務競賽-工讀生參賽切結書(空).png",
    isAvailable: true,
  },
  {
    title: "更換隊員同意書",
    fileName: "2026行動通訊實務競賽-更換隊員同意書(空)_r1.docx",
    desc: "",
    fileType: "DOCX",
    updatedAt: "",
    href: "/downloads/2026行動通訊實務競賽-更換隊員同意書(空)_r1.docx",
    previewSrc: "/downloads/2026行動通訊實務競賽-更換隊員同意書(空)_r1.png",
    isAvailable: true,
  },
  // {
  //   title: "作品設計與測試文件",
  //   fileName: "2026行動通訊實務競賽-作品設計與測試文件(空)_r1.docx",
  //   desc: "",
  //   fileType: "DOCX",
  //   updatedAt: "",
  //   href: "/downloads/2026行動通訊實務競賽-作品設計與測試文件(空)_r1.docx",
  //   previewSrc: "/downloads/2026行動通訊實務競賽-作品設計與測試文件(空)_r1.png",
  //   isAvailable: true,
  // },
];
