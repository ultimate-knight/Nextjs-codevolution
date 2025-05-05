# This project contains Next.js App Router Features

## I'm working on these project from this youtube playlist https://www.youtube.com/watch?v=ZjAqacIC_3c&list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI

## File-Based Routing
- **Nested Routes**: Create hierarchical URLs using folder structure - `/dashboard/settings`
- **Dynamic Routes**: Use square brackets [param] for dynamic URL segments - `/products/[id]`
- **Nested Dynamic**: Combine multiple dynamic parameters - `/shop/[category]/[product]`
- **Route Handlers**: API endpoints using route.js files for server-side logic

## Advanced Routing Patterns
- **Catch-all Segments**: `[...slug]` captures any number of URL segments - `/docs/guide/getting-started`
- **Optional Catch-all**: `[[...slug]]` makes catch-all segments optional - `/shop` or `/shop/electronics`
- **Parallel Routes**: Display multiple pages simultaneously using `@folder` convention
- **Intercepting Routes**: Override routes for modals with `(..)` syntax

## File Organization
- **Not Found Pages**: Custom 404 handling at any route level using `not-found.js`
- **File Colocation**: Keep components, styles, and tests alongside route files
- **Private Folders**: Prefix with underscore `_folder` to exclude from routing
- **Route Grouping**: Organize routes using `(group)` without affecting URL structure

## Layout System
- **Layouts**: Shared UI components that wrap child routes and preserve state
- **Nested Layouts**: Create layout hierarchies that compose from root to leaf
- **Multiple Root Layouts**: Use route groups to create separate root layouts
- **Loading States**: Show loading UI using `loading.js` files

## Navigation & Metadata
- **Link Component**: Client-side navigation with prefetching capabilities
- **Active Links**: Track current route using `usePathname()` hook
- **Routing Metadata**: Configure SEO meta tags and social sharing
- **Dynamic Metadata**: Generate metadata based on route parameters
- **Title Templates**: Define consistent title patterns across pages

## Data Access
- **Route Parameters**: Access dynamic segments via `params` object
- **Search Parameters**: Query strings available through `searchParams`
- **Server Components**: Fetch data directly in components
- **Server Actions**: Handle form submissions and mutations