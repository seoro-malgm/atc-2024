# Stacks

- Frontend + Backend : [Nuxt 3](https://nuxt.com/docs/getting-started/introduction)
- DB : [Firebase Firestore](https://firebase.google.com/docs/firestore?authuser=0&hl=ko)
- Hosting : [Nuxt 3 + Firebase Functions + Firebase Hosting](https://nuxt.com/deploy/firebase)

## 설치

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## 로컬 서버 시작

`http://localhost:3000`에서 확인하도록 서버를 시작합니다

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## 빌드 및 배포

### 1. firebase login

firebase CLI를 사용하여 배포하기 위해 fierbase에 로그인 해야합니다.

```bash
firebase login
```

로그인할 때, 현재 프로젝트의 소유자 혹은 편집자 권한을 얻은 계정으로 로그인을 해야합니다.
권한이 있는지는 [firebase console](https://console.firebase.google.com/)에 접속하여 어떤 프로젝트가 현재 로그인된 계정에 있는지 확인하시고, 배포하려는 프로젝트가 권한으로 포함된 계정으로 접속하세요.
로그인은 한 번 하면 됩니다.

로그아웃할 경우

```bash
firebase logout
```

### 2. 빌드

프로젝트를 빌드합니다. `nuxt.config.ts` 파일에

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

## 3. 배포

Firebase 로 빌드한 '.output/public' 폴더를 배포합니다.
배포할 때, SSR을 구현하기 위해

1. Nuxt 3 프로젝트를 'firebase functions'가 SSR 배포를 위한 파일로 제작
2. 'firebase hosting'이 그 파일을 배포함 순으로 이어집니다.
   이 과정이 현재는 2~5분정도 걸립니다.

```bash
firebase deploy
```

## SEO

SEO 설정을 위한 head 영역은 json파일을 불러오도록 설정했습니다.
`/data/seo.json`파일을 수정해야합니다.

## 사진 에셋 변경

`compsables`에 선언된 `getRefURL`로 불러오는 이미지들은 프로젝트의 `firebase storage`에서 불러오는 것을 의미합니다.

1. [firebase console](https://console.firebase.google.com/)에 접속하여프로젝트로 이동
2. `Firebase Storage`로 이동
3. 해당 위치가 루트 '/'에 해당합니다. 즉, `getRefURL`로 불러오는 이미지는 firebase Storage에서 경로가 일치해야합니다.
