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

## Lets jump into make a custom hook and reusable component with Tanstack Query

A **Summary** of files needs to be created under `src/` to fulfill the **custom hook and reusable component**:

- `src/pages/Query.tsx` → `localhost:3000/query`
- `src/types.ts` → **Type constants**
- `src/components/dataFetcher/DataFetcher.tsx` → **Reusable Component** (_U should make unique Component according to fetch item_)

:::info Example

For fetching a **country api**, you can name the component as `CountryFetcher.tsx`

:::

- `src/components/dataFetcher/DataList.tsx` → **Reusable Component** (_U should make unique Component according to fetch item_)

:::info Example

For fetching a **country api**, you can name the component as `CountryList.tsx`

:::

- `src/hooks/useFetch.ts` → **Function** where the actual **functionality of React-Query** is managed.

## Create your first root query Page

Create a file at `src/pages/`:

```jsx title="src/pages/Query.tsx"
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DataFetcher from "../components/dataFetcher/DataFetcher";

const url = "Required Api URL";
const queryClient = new QueryClient();

const Query = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <DataFetcher url={url} keyword="country" />
    </QueryClientProvider>
  );
};

export default Query;
```

A new page is now available at [http://localhost:3000/Query](http://localhost:3000/Query).

## Create your first Component

Create a file at `src/components/dataFetcher`:

```jsx title="src/components/dataFetcher/DataFetcher.tsx"
import React from "react";
import { useFetch } from "@site/src/hooks/useFetch";
import { Country } from "@site/src/types";
import DataList from "./DataList";

interface DataFetcherProps {
  url: string;
  keyword: string;
}

const DataFetcher: React.FC<DataFetcherProps> = ({ url, keyword }) => {
  const { data, isError, isLoading } = useFetch<Country[]>(url, keyword);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return <DataList data={data ?? []} />;
};

export default DataFetcher;
```

## Create your first custom hook

Create a file at `src/hooks/`:

```jsx title="src/hooks/useFetch.ts"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetch = <T>(url: string, keyword: string) => {
  return useQuery<T>({
    queryKey: [{ keyword }, url],
    queryFn: async (): Promise<T> => {
      try {
        const result = await axios.get(url);
        return result.data;
      } catch (error: any) {
        if (error.response && error.response.status === 404) {
          return [] as unknown as T;
        } else {
          throw error;
        }
      }
    },
  });
};
```
