export type UploadPageKey = "register" | "preliminary" | "final";

export type UploadPageData = {
  title: string;
  eyebrow: string;
  description: string;
  statusText: string;
};

export const uploadPages: Record<UploadPageKey, UploadPageData> = {
  register: {
    title: "線上報名",
    eyebrow: "REGISTRATION",
    description: "線上報名資訊尚在確認中，後續將於本頁公告報名方式與相關連結。",
    statusText: "尚未開放",
  },
  preliminary: {
    title: "初賽文件上傳",
    eyebrow: "PRELIMINARY SUBMISSION",
    description:
      "初賽資料上傳規範尚在確認中，後續將於本頁公告上傳方式與繳交內容。",
    statusText: "尚未開放",
  },
  final: {
    title: "決賽文件上傳",
    eyebrow: "FINAL SUBMISSION",
    description:
      "決賽文件上傳功能將於決賽入圍名單公布後開放，請入圍隊伍依後續公告之規定，於指定期限內完成相關資料繳交。",
    statusText: "尚未開放",
  },
};
