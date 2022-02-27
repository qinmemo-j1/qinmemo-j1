# Qin Todo

## 技術選定

- React
- Next.Js
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- JEST
- Storybook

## Design

- Figma

# Develop

＃ 開発を行う場合

```
yarn dev // localhost:3000 で起動
```

＃ 本番の動作確認を行う場合

```
yarn build
yarn start // localhost:3000 で起動。dev中はportを変える必要があります。
```

# Git Branch

```
main
```

- 本番環境

```
develop
```

- ステージング環境

```
feature/issue番号
```

- 開発の際は基本的に develop を最新にしてから feature ブランチに分岐し、PR を作成後 develop にマージする。
