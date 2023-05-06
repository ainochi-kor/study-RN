# React-Native + Next.js + Typescript + Tailwindcss + Expo

## 설치

> $ yarn install

## Dev

### tailwindcss 자동완성 설정

확장 -> Tailwind CSS IntelliSense -> 톱니 바퀴 -> 확장 설정 -> Tailwind CSS › Experimental: Class Regex -> 아래 코드 삽입

```json
"tailwindCSS.experimental.classRegex": [
  "tw`([^`]*)", // tw`...`
  "tw=\"([^\"]*)", // <div tw="..." />
  "tw={\"([^\"}]*)", // <div tw={"..."} />
  "tw\\.\\w+`([^`]*)", // tw.xxx`...`
  "tw\\(.*?\\)`([^`]*)" // tw(Component)`...`
]
```

## 실행

> $ npx expo start --tunnel
