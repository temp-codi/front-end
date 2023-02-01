This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## lazy loading

![image](https://user-images.githubusercontent.com/102004753/216042208-66ae2a2a-5989-43b2-90e4-38ec54a79058.png)

## Flex Element (Atom)

tailwind class를 싸그리 박아넣는거 보다는 이렇게 쓰면 편리하겠쥬?

```js
<Flex
  align="center"
  justify="between"
  direction="row"
  positionClasses="absolute"
  lightClasses={["bg-slate-200"]}
  darkClasses={["dark:bg-slate-900"]}
  zIndex="z-10"
  transitionClasses={["transition-colors", "duration-700"]}
  style={{ border: "2px solid blue" }}
  className="w-full"
>
  <Flex>1</Flex>
  <Flex>2</Flex>
  <Flex>3</Flex>
</Flex>
```
