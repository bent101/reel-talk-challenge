# Design Decisions

- configured Tailwind to use the design system from Figma (e.g. `border-primary`, `text-headline` instead of `border-orange-500`, `text-lg`)
- used [`clsx`](https://www.npmjs.com/package/clsx) for better conditional Tailwind
- made each stage of onboarding a separate route (`/onboarding/1` - `/onboarding/5`)
- made it kinda responsive
- encapsulated logic for selecting 5 things (`src/pages/onboarding/use-top-5.ts`)
- abstracted the **Top 5 Movies** and **Top 5 Shows** pages into 1 component
- only put pages and layouts in `src/pages`, put everything else in `src/lib`
  - (`layout.tsx` isn't a reserved filename, just a convention I'm using)
