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
    fileName: "poster_r3.png",
    desc: "可下載對外宣傳使用。",
    fileType: "PNG",
    updatedAt: "",
    href: "/downloads/poster_r3.png",
    previewSrc: "/downloads/poster_r3.png",
    isAvailable: true,
  },
];
