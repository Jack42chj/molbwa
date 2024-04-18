# Molbwa
> **유투브 국내 드라마 결말까지 몰아보기를 모아놓은 웹/앱 서비스**
![logo](https://github.com/Jack42chj/molbwa/assets/86552441/735934f3-6d78-4923-a892-440f7030865a)
- - -


## ⚙️ 요구 사항(Requirements)
> - Node.js 20.11.1
> - yarn 1.22.21
- - -


## 💡 실행 방법(Installation)
```bash
$ cd molbwa
$ yarn
$ yan dev
```
- - -


## 🖥️ 서비스 소개(Introduction)
> **결말이 포함된 국내 드라마 요약 유투브를 모아놓은 영상 스트리밍 서비스입니다.**
![sample](https://github.com/Jack42chj/molbwa/assets/86552441/54e90f6a-ad89-4b21-ae0e-673fef2d8241)
- - -


## 🔗 배포 바로가기(Deployment)
<https://molbwa.vercel.app>
- - -


## 🗓️ 개발 기간(Development Period)
> **2023.12.21 ~ 2024.02.24**
- - -


## 🙋‍♂️ 멤버 구성(Member)
> **1인 기획, 디자인, 개발**
- - -


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

- - -


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
