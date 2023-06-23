# Next Js Player 🚀

"next-js-player" is video player that supports both react and next js(i.e pages router and app router)

## Demo 🔗

[See Demo](https://next-js-player.vercel.app/)

## Github

[Contribut On Github](https://github.com/ScreenTechnicals/next-js-player/)

## Stacks

[![My Skills](https://skillicons.dev/icons?i=html,css,tailwind,js,next,react)](https://skillicons.dev)

## Installation

1. Run the command below to install next-js-player

```
npm i next-js-player
```

2. Run the command below to install react-icons

```
npm i react-icons
```

3. Run the command below to install tailwindcss, if not installed

```
npm install -D tailwindcss
npx tailwindcss init
```

## Configurations

4. Add the below css to the globals.css (for Next Js) or to the index.css/App.css (for React Js)

```
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

.player-controls {
  bottom: -4rem !important;
}
.video-wraper:hover > .player-controls {
  bottom: -15px !important;
}
::-webkit-media-controls {
  display: none !important;
}
video::-webkit-media-controls {
  display: none !important;
}
video::-webkit-media-controls-enclosure {
  display: none !important;
}
```

### For Next Js:

5. Add the configs below to install tailwindcss.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/next-js-player/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
```

### For React Js:

5. Add the configs below to install tailwindcss.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: { extend: {}},
    plugins: [],
};
```

## How to use?(Example)

```
import Player from "next-js-player";
export default function Home() {
        return (
        <main>
            <Player source={"<source url/path>"} width={100} />
        </main>
    );
}
```

## Properties

**_Pass these attributes and values to the "Player" component._**
|Type |Attributes | Values |
|---|---|---|
| string | source | <url> or locale source of the video |  
| number | width | <value in %> and by default value is 100% |  
| boolean | loop | by default false |

# Versions

**v1.1.4** : This is the currently the stable version that you can use.
