# Prototype

A dashboard-style app shell for quick product prototypes: React + Vite on Cloudflare Workers, styled with [Kumo](https://www.npmjs.com/package/@cloudflare/kumo), Cloudflare's open-source design system. No authentication.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check and production build
npm run deploy   # build and deploy to Cloudflare Workers
```

## What's in the box

| Piece | Where | Notes |
| --- | --- | --- |
| Side menu | `src/app/AppSidebar.tsx` | Kumo `Sidebar`: groups, expandable sections, badges, collapses to icons, mobile sheet |
| Menu config | `src/app/navigation.ts` | One list drives the whole menu |
| Routes | `src/app/router.tsx` | React Router; `handle.crumb` feeds the breadcrumb bar |
| Layout | `src/app/AppShell.tsx` | Sidebar + top bar with breadcrumbs + page outlet |
| Theme | `src/lib/theme.tsx` | System / light / dark, saved in the browser |
| API client | `src/lib/api.ts` | Typed `fetch` wrapper for `/api/*` |
| Worker API | `worker/index.ts` | `"METHOD /path"` route table; `GET /api/health` included |
| Component reference | `/components` page | Live examples of the Kumo parts in use |

## Add a screen

1. Create `src/pages/MyPage.tsx` (start with `PageHeader` and Kumo components).
2. Add a route in `src/app/router.tsx` with `handle: crumb('My page')`.
3. Add a menu entry in `src/app/navigation.ts`.

## Styling rules (from Kumo)

- Use semantic tokens (`bg-kumo-base`, `text-kumo-subtle`, `border-kumo-line`), not raw Tailwind colours.
- Don't use `dark:` variants; dark mode comes from `data-mode="dark"` on `<html>`.
- Icons come from `@phosphor-icons/react`.
- Component docs: `npx @cloudflare/kumo ls` and `npx @cloudflare/kumo doc Sidebar`.
