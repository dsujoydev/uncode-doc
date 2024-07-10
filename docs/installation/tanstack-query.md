---
title: Tanstack Query Installation
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a Tanstack Query Hook

## Getting Started with Tanstack Query

**TanStack Query (FKA React Query)** is often described as the missing **data-fetching library** for web applications, but in more technical terms, it makes _fetching_, _caching_, _synchronizing_ and updating server state in your web applications a breeze.

:::tip Might turn out to be a wise tip

You can watch through whole document of [React Query](https://tanstack.com/query/latest/docs/framework/react/installation) find out what you want!
or just pick **g-uncode** and start firing all cylinders
:::

### Lets install Tanstack-Query

<Tabs>
    <TabItem value="npm" label="npm" default>
        ```bash
        npm i @tanstack/react-query
        ```
    </TabItem>
    <TabItem value="yarn" label="yarn" default>
        ```bash
        yarn add @tanstack/react-query
        ```
    </TabItem>
    <TabItem value="pnpm" label="pnpm" default>
       ```bash
        pnpm add @tanstack/react-query
        ```
    </TabItem>
</Tabs>

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
