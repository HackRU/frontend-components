# HackRU: Ludicrous Component Library
_"Everything is ludicrous!"_

## Quick Start
```
git clone blahb blah blah
cd lcs
npm install
cd example
npm install
cd ..
npm run dev
```
> For the last npm run dev, if it crashes for the first run, restart npm run dev. This is because by default the dist directory doesn't exist, so react bugs out. After the restart, since the rollup build already ran once, the dist folder exists so it should work