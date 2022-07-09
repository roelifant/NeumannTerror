# Neumann Terror

This project is the second iteration of a javascript web game documented [here](https://roelifant.com/projects/neumann/doc.php).

## Goals

The main goals of this project are:
1. Rebuild the original vanilla js game using Vue 3.
2. General UI redesign for better UX with attention to touch controls for tablets.
3. A more modular game system that would make it possible to enable or disable game features, so a single player campagne can be developed that introduces the game mechanics one by one and helps tutorialize the game. (Similar to how I handled [my other web game](https://roelifant.com/projects/blubmarine/doc.php))

## Stack
This project uses:
- Vite. Just run `npm run dev` to develop. ([docs](https://vitejs.dev/guide/))
- Vue 3, with composition api and setup script. ([docs](https://vuejs.org/api/) - note the Composition API section)
- Typescript. Please refrain from using `any`. ([docs](https://www.typescriptlang.org/docs/handbook/intro.html))
- Tailwind css. ([docs](https://tailwindcss.com/))