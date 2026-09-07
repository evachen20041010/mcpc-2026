export interface RegistrationStep {
  step: string;
  title: string;
  desc: string;
}

export const registrationSteps: RegistrationStep[] = [
  {
    step: "01",
    title: "詳閱簡章",
    desc: "請先下載競賽簡章，確認所有參賽規定與時程。",
  },
  {
    step: "02",
    title: "填寫報名表單",
    desc: "至線上報名表單填寫隊伍資訊，並上傳活動切結書。",
  },
  {
    step: "03",
    title: "初賽文件上傳",
    desc: "將提案企劃書與提案簡報上傳至初賽文件表單。",
  },
  {
    step: "04",
    title: "完成報名",
    desc: "送出表單後留意收信，收到確認信即代表報名成功。",
  },
];
