# 📺 유투브 국내 드라마 결말까지 몰아보기를 모아놓은 웹/앱 서비스 Molbwa?!

![logo](https://github.com/Jack42chj/molbwa/assets/86552441/735934f3-6d78-4923-a892-440f7030865a)

## ⚙️ 요구 사항(Requirements)

- Node.js 20.11.1
- yarn 1.22.21

## 💡 실행 방법(Installation)

```bash
$ cd molbwa
$ yarn
$ yan dev
```

## 🖥️ 서비스 소개(Introduction)

![sample](https://github.com/Jack42chj/molbwa/assets/86552441/54e90f6a-ad89-4b21-ae0e-673fef2d8241)

- 결말이 포함된 국내 드라마 요약 유투브를 모아놓은 영상 스트리밍 서비스입니다.
-   구글 로그인을 제공하며 로그인한 사용자에게 찜 기능과 유튜브 영상 이어보기 기능을 제공합니다.
-   유튜브 임베드 영상 링크를 사용해 유튜브 플레이어 스트리밍을 제공합니다.
-   검색을 통해 사용자가 원하는 영상을 제공합니다.

## 🔗 배포 사이트 바로가기(Deployment)

https://molbwa.vercel.app

## 🗓️ 개발 기간(Development Period)
**2023.12.21 ~ 2024.02.24**

## 🙋‍♂️ 멤버 구성(Member)
**1인 기획, 디자인, 개발**

## 📚 기술 스택(Stacks)

### 🛣️ 개발 환경(Environment)
<div>
  <img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

### 💫 Config
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">


### 🛠️ 개발 기술(Development)
<div>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white">
  <img src="https://img.shields.io/badge/Zustand-696969?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
</div>


### 🪄 디자인(Design)
<div>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
</div>

### 🪄 배포(Deployment)
<div>
  <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
</div>

## 📂 디렉토리 구조

```bash
molbwa-master
├─ .eslintrc.cjs
├─ .git
├─ .gitignore
├─ index.html
├─ package.json
├─ public
│  ├─ logo.png
│  ├─ logo.svg
│  └─ robots.txt
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  ├─ error
│  │  │  ├─ 404found.webp
│  │  │  └─ error.webp
│  │  ├─ fonts
│  │  │  ├─ BMJUA_ttf.ttf
│  │  │  └─ font.css
│  │  └─ qr
│  │     └─ kakao-qr.png
│  ├─ components
│  │  ├─ best-video.tsx
│  │  ├─ carousel.tsx
│  │  ├─ footer.tsx
│  │  ├─ header.tsx
│  │  ├─ kakao-plus.tsx
│  │  ├─ scroll-top.tsx
│  │  ├─ search-bar.tsx
│  │  ├─ search-list.tsx
│  │  ├─ search-modal.tsx
│  │  ├─ skeleton
│  │  │  ├─ all-skeleton.tsx
│  │  │  ├─ best-skeleton.tsx
│  │  │  ├─ best-video-skeleton.tsx
│  │  │  ├─ carousel-skeleton.tsx
│  │  │  ├─ media-skeleton.tsx
│  │  │  ├─ search-list-skeleton.tsx
│  │  │  └─ slider-skeleton.tsx
│  │  └─ slider.tsx
│  ├─ custom.d.ts
│  ├─ interface
│  │  └─ interfaces.ts
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ all.tsx
│  │  ├─ best.tsx
│  │  ├─ home.tsx
│  │  ├─ media.tsx
│  │  ├─ notfound.tsx
│  │  ├─ search.tsx
│  │  └─ signin.tsx
│  ├─ styles
│  │  └─ styles.css
│  ├─ supabase
│  │  └─ supabase.tsx
│  ├─ vite-env.d.ts
│  └─ zustand
│     └─ store.ts
├─ tsconfig.json
├─ tsconfig.node.json
├─ vercel.json
├─ vite.config.ts
└─ yarn.lock
```

## ⚡ 웹 페이지 속도 측정(렌더링 속도)

![render](https://github.com/Jack42chj/molbwa/assets/86552441/6371f0ee-fa69-40c7-af35-461b35e051b1)

https://tools.pingdom.com/

## 🌟 주요 기능(Specification)
#### ▶️ 선택 영상 유튜브 스트리밍(Player)
- 유튜브 영상 중 국내 드라마 결말포함 몰아보기 영상 제공

#### 🔑 로그인/회원가입(Auth)
- Supabase Google OAuth2 로그인/회원가입
- 구글 로그인을 통한 이전에 보던 유튜브 영상 이어보기 가능

#### 🔍 검색 기능(Search)
- 입력 받은 검색어를 기반으로 DB에서 결과 조회
- 이전 검색어와 같거나 비어 있으면 검색 요청 안함

#### 🔥 인기순, 조회순, 등록순 영상 제공(Filtering)
- 인기순, 조회순, 등록순으로 영상들을 필터링을 하여 메인 화면에서 사용자에게 영상 추천

## 🔥 트러블 슈팅(Trouble Shooting)

#### 🗄️ Firebase에서 Supabase로 변경

문제: 프로젝트 초기에는 Google에서 지원하는 서비스형 백엔드 Firebase를 활용하였다. 그러나 무료로 제공되는 기간이 정해져 있다 보니 추후 문제가 될 것으로 생각하여 유사한 서비스형 백엔드 Supabase로 바꾸었다.
다만 Supabase는 아직 Firebase 만큼 커뮤니티가 활성화되어 있지 않고 공식 문서 Docs밖에 없어 도입하는데 좀 어려움이 존재하였다.

해결: 프로젝트를 Firebase로 진행하여 우선 UI 및 기능 구현을 마치고 Supabase 도입을 하였다. 도입하게 되면서 우선 공식 Docs를 읽고 몇 가지를 직접 시도해보면서 Supabase를 배워보니 Firebase와 크게 차이점이 존재하지 않았다.
Supabase도 Firebase에서 지원하는 OAuth2, Storage, Database 등 다양한 기능을 제공하기 때문에 오히려 무료 기간이 정해진 Firebase보다 좋다고 생각한다. 직접 부딪히면서 구현을 해보니 비교적 빨리 적응한 것 같다.

#### 📹 유튜브 임메드 영상 수집

문제: 초기 기획 단계에서 유튜브 영상 수집을 해당 영상 링크를 수집하는 크롤러를 구현해 수집할 예정이었다. 그러나 해당 영상을 사용해 다른 곳에 사용하려면 일반 유튜브 영상 링크가 아닌 고유의 임베드 영상 링크가 필요로하였다.
다만 이는 간단한 크롤링으로 수집할 수 없어 직접 임베드 영상 링크를 수집할 수밖에 없었다.

대안: 임베드 영상 주소를 직접 수집하고 동시에 영상의 유효성을 검수하는 과정을 직접 맡아 데이터를 수집하였다. 단, 데이터 수집 과정에서 시간이 오래 걸리는 문제는 어쩔 수 없는 것 같다.
