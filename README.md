Personal portfolio website written using Astro, Tailwind and Typescript, with a very small amount of SolidJS for stateful components.

## Commands

All commands are run from the root of the project, from a terminal:

Replace npm with your package manager of choice. `npm`, `pnpm`, `yarn`, `bun`, etc

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run dev:network`     | Starts dev server on local network               |
| `npm run sync`            | Generates TypeScript types for all Astro modules.|
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run preview:network` | Starts preview server on local network           |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run ESLint                                       |
| `npm run lint:fix`        | Auto-fix ESLint issues                           |

## Folder structure

A one line summary of what each file and directory is for:
```js
/
├── public/ // Files publicly available to the browser
│   ├── fonts/ // The default fonts for Astro Sphere
│   │   └── atkinson-bold.woff  // default font weight 700
│   │   └── atkinson-regular.woff // default font weight 400
│   ├── js/ // Javascript that will be imported into <head>
│   │   └── animate.js // function for animating page elements
│   │   └── bg.js // function for generating the background
│   │   └── scroll.js // scroll handler for the header styles
│   │   └── theme.js // controls the light and dark theme
│   └── brand.svg //the icon that displays in header and footer
│   └── favicon.svg //the icon that displays in the browser
│   └── ui.svg // an svg sprite for all ui icons on the website
│   └── social.svg // an svg sprite for all social media icons
│   └── open-graph.jpg // the default image for open-graph
│   └── robots.txt // for web crawlers and bots to index the website
├── src/ // Everything that will be built for the website
│   ├── components/ // All astro and SolidJs components
│   ├── content/ // Contains all static markdown to be compiled
│   │   |  blog/ // Contains all blog post markdown
│   │   |  projects/ // Contains all projects markdown
│   │   |  work/ // Contains all work page markdown
│   │   |  legal/ // Contains all legal docs markdown
│   │   └── config.ts // Contains the collection config for Astro
│   ├── layouts/ // Reused layouts across the website
│   └── pages/ // All of the pages on the website
│   └── styles/ // CSS and global tailwind styles
│   └── lib/ // Global helper functions
│   └── consts.ts // Page metadata, general configuration
│   └── types.ts // Types for consts.ts
└── .gitignore // Files and directories to be ignored by Git
└── eslint.config.js // ESLint configuration
└── astro.config.mjs // Astro configuration
└── tailwind.config.mjs // Tailwind configuration
└── tsconfig.json // Typescript configuration
└── package.json // All the installed packages
```

## Acknowledgement

Theme inspired by [Paco Coursey](https://paco.me/), [Lee Robinson](https://leerob.io/) and [Hayden Bleasel](https://www.haydenbleasel.com/)

## License

MIT
