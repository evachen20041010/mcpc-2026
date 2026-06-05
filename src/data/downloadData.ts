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
];
