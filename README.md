# 2026 MCPC Website

2026 MCPC（行動通訊實務競賽）官方網站專案。

本專案用於建置競賽資訊網站，提供首頁形象展示、最新消息、競賽辦法、檔案下載、交通地點、競賽主題資訊，以及報名 / 資料上傳等內容。  
網站後端串接 Firebase，可支援最新消息與時程資料的動態管理，並提供管理後台供管理員登入維護內容。

---

## 特色

- 以 **Astro** 建立靜態與互動式競賽網站
- 使用 **Tailwind CSS** 製作響應式介面
- 串接 **Firebase Authentication** 做管理員登入
- 串接 **Cloud Firestore** 管理最新消息與重要時程
- 可部署至 **Firebase Hosting**
- 首頁 Hero 區塊包含倒數計時與動態時程顯示
- 提供後台頁面管理公告與日程資料

---

## 技術

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
  - Authentication
  - Cloud Firestore
  - Hosting

---

## 網站主要功能

### 前台頁面
- 首頁 Hero 視覺區塊
- 最新消息
- 競賽辦法
- 檔案下載
- 交通地點
- 競賽主題資訊
- 報名 / 資料上傳資訊

### 後台頁面
- 管理員登入
- 最新消息公告管理
- 重要日程管理

---

## 專案結構

```text
mcpc-2026/
├─ public/                  # 靜態資源
├─ src/
│  ├─ components/           # 各區塊元件
│  ├─ firebase/             # Firebase 初始化設定
│  ├─ layouts/              # 共用版型
│  ├─ pages/                # 網頁路由
│  └─ styles/               # 全域樣式
├─ firebase.json            # Firebase Hosting 設定
├─ firestore.rules          # Firestore 權限規則
├─ firestore.indexes.json   # Firestore 索引設定
├─ astro.config.mjs         # Astro 設定
├─ tailwind.config.mjs      # Tailwind 設定
└─ package.json
```

---

## A. PowerShell 權限

二選一：

### 永久比較方便

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

### 不改設定，直接用 `.cmd`

```powershell
npm.cmd install
```

---

## B. 專案環境建置與部署指令

### 1. 安裝套件

```powershell
npm.cmd install
```

### 2. 安裝 Firebase CLI

```powershell
npm.cmd install -g firebase-tools
```

### 3. Firebase 登入

```powershell
npx.cmd firebase login
```

### 4. 啟用 webframeworks

```powershell
npx.cmd firebase experiments:enable webframeworks
```

### 5. 本機 build

```powershell
npm.cmd run build
```

### 6. 部署到 Firebase

```powershell
npx.cmd firebase deploy
```

### 7. 啟動本機開發環境

```powershell
npm.cmd run dev
```

---

## C. VS Code 擴充套件

### 1. Astro（作者：Astro Build）

讓 `.astro` 語法、TS 檢查、格式化正常

### 2. Tailwind CSS IntelliSense（作者：Tailwind Labs）

class 提示、顏色 / 樣式預覽

### 3. Prettier - Code formatter（作者：Prettier）

格式統一（搭配 Astro 很常用）

### 4. Firebase（作者：Toba）

看 rules / deploy 會方便

---

## 建置與部署

### 建置正式版
```powershell
npm.cmd run build
```

### 部署到 Firebase Hosting
```powershell
npx.cmd firebase deploy
```

---

## Firebase 相關說明

本專案使用 Firebase 作為資料與驗證服務：

- **Authentication**
  - 管理員登入使用 Email / Password
- **Cloud Firestore**
  - 儲存最新消息
  - 儲存競賽重要時程
- **Hosting**
  - 部署正式網站

---

## 管理後台說明

後台頁面提供以下管理功能：

- 新增 / 刪除 / 管理最新消息
- 新增 / 編輯 / 管理重要時程
- 管理員登入 / 登出

使用前請先確認：

1. Firebase Authentication 已建立管理員帳號
2. Firestore Database 已建立
3. Firestore 規則已正確部署
4. `.env` 已填入正確的 Firebase Web App 設定

---

## 授權

本專案僅供 2026 MCPC 官方網站建置與維護使用。