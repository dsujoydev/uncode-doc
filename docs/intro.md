---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Intro

Introducing **UnCode**: _Accelerate Your Development with Pre-Built, Customizable Modules_

## Getting Started

This is **NOT** a component library. It's a collection of re-usable components that you can **copy and paste** into your apps.

## Why Uncode?

Unlike traditional development workflows that often require building features from scratch or piecing together disparate libraries, **UnCode offers a cohesive and streamlined solution**. The idea is to make it easy to get started and **_integrate important modules into your existing projects from a single place._**

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new project with your fav framework

Generate a new site using [Vite](https://vitejs.dev/guide/)

The classic template will automatically be added to your project after you run the command:

<Tabs>
    <TabItem value="npm" label="npm" default>
        ```bash
        npm create vite@latest
        ```
    </TabItem>
    <TabItem value="yarn" label="yarn" default>
        ```bash
        yarn create vite@latest
        ```
    </TabItem>
    <TabItem value="pnpm" label="pnpm" default>
       ```bash
        pnpm create vite@latest
        ```
    </TabItem>
</Tabs>

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run **Uncode**.

## Start your site

Run the development server:

```bash
cd your-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.
