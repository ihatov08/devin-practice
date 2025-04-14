<div align="center"><strong>Next.js 15 Admin Dashboard Template</strong></div>
<div align="center">Built with the Next.js App Router</div>
<br />
<div align="center">
<a href="https://next-admin-dash.vercel.app/">Demo</a>
<span> · </span>
<a href="https://vercel.com/templates/next.js/admin-dashboard-tailwind-postgres-react-nextjs">Clone & Deploy</a>
<span>
</div>

## Overview

This is a starter template using the following stack:

- Framework - [Next.js (App Router)](https://nextjs.org)
- Language - [TypeScript](https://www.typescriptlang.org)
- Auth - [Auth.js](https://authjs.dev)
- Database - [Postgres](https://vercel.com/postgres)
- Deployment - [Vercel](https://vercel.com/docs/concepts/next.js/overview)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Components - [Shadcn UI](https://ui.shadcn.com/)
- Analytics - [Vercel Analytics](https://vercel.com/analytics)
- Formatting - [Prettier](https://prettier.io)
- Docker - [Docker](https://www.docker.com/)

This template uses the new Next.js App Router. This includes support for enhanced layouts, colocation of components, tests, and styles, component-level data fetching, and more.

## Getting Started

To get started, clone the repository and install the dependencies:

```bash
npm install
```

Next, copy the `.env.example` file to `.env` and update the values. Follow the instructions in the `.env.example` file to set up your GitHub OAuth application.

To set up the database, you can use the following command:

```bash
docker run --name postgres-container \
  -e POSTGRES_PASSWORD=yourpassword \
  -e POSTGRES_DB=yourdatabase \
  -p 5432:5432 \
  -v $(pwd)/docker-entrypoint-initdb.d:/docker-entrypoint-initdb.d \
  -d postgres
```

Finally, run the following commands to start the development server:

```
npm run dev
```

You should now be able to access the application at http://localhost:3000.
