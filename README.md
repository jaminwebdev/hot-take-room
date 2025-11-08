# Hot Take Room

This project is a real-time application for sharing and voting on "hot takes". It's built with SvelteKit and Convex.

## Tech Stack

- **Frontend:** [SvelteKit](https://kit.svelte.dev/) with [Svelte 5 Runes](https://svelte.dev/blog/runes)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn-Svelte](https://www.shadcn-svelte.com/)
- **Backend & Database:** [Convex](https://www.convex.dev/)
- **Authentication:** [Clerk](https://clerk.com/)

For more details on the project's principles and architecture, see the [constitution](/.specify/memory/constitution.md).

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.
