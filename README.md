# MyFamilyBank.eu

Standalone English landing page for MyFamilyBank.eu.

The landing page is intentionally separate from the existing SeimosBankas codebase. Bank and Sandbox entry points are connected through redirects configured in `next.config.mjs`.

## Development

```bash
npm install
npm run dev
```

Local URL:

```text
http://127.0.0.1:3001
```

## Bank Integration

Set the bank app base URL in production:

```bash
BANK_BASE_URL=https://seimosbankas.lt
NEXT_PUBLIC_BANK_BASE_URL=https://seimosbankas.lt
```

Current routes:

- `/sandbox` redirects to `${BANK_BASE_URL}/sandbox?brand=myfamilybank&lang=en`
- `/register` redirects to `${BANK_BASE_URL}/register?brand=myfamilybank&lang=en`
- `/bank/:path*` redirects to `${BANK_BASE_URL}/:path*`

When the bank app supports `brand=myfamilybank`, it can render the English Sandbox and registration flow from the same backend.

## SEO Articles

The English article layer is static and pre-rendered for SEO:

- `/articles`
- `/articles/[slug]`
- `/sitemap.xml`
- `/robots.txt`

Article content lives in:

```text
src/content/articles.ts
```

Each article includes title, description, category, reading time, publish/update dates, body sections and optional Lithuanian source URL for `hreflang` metadata.
