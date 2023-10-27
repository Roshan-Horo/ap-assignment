# This is an Assignment Project build on Remix,Tailwind,Shadcn UI with TypeScript.

- [Remix](https://remix.run)
- [Tailwind css](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)

# Folder Structure


```
├── package.json            #package.json file for project
├── package-lock.json
├── README.md
└── app
    ├── root.ts             # main root file for remix app
    ├── data.ts             # methods for fetching data         #
    └── components          # components folder for each component
        ├── ui              # UI for shadcn UI component
             ├── badge.js
             └── button.tsx
        ├── site-header.js  # site-header component used in app
        └── intro.tsx    
    └── routes              # routes folder for remix route path
        └── _index.ts
```



## Development

From your terminal:

### For Installing
```sh
npm install
```
### For Running

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
