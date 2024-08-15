import { defineConfig } from 'vitepress';
import react from '@vitejs/plugin-react';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  vite: {
    plugins: [react()],
  },

  themeConfig: {
    nav: [
      { text: 'reactComp', link: '/reactComp' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'reactComp', link: '/reactComp' },
          // ...
        ],
      },
    ],
  },
});
