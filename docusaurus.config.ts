import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Crudzaso',
  tagline: 'Más que solo crud\'s',
  favicon: 'img/logo.png',

  url: 'https://docs.crudzaso.com',
  
  baseUrl: '/',

  organizationName: 'Crudzaso',
  projectName: 'Crudzaso',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
          },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
          
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn'
        // },
        pages: {
          path: 'src/pages'
        }
        ,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Crudzaso',
      logo: {
        alt: 'Crudzaso Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'projectsSidebar',
          position: 'left',
          label: 'Projects',
        },
        {
          type: 'docSidebar',
          sidebarId: 'infrastructureSidebar',
          label: 'Infrastructure', 
          position: 'left'},
        {
          href: 'https://github.com/Crudzaso',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Infrastructure',
              to: '/docs/infrastructure/introduction',
            },
            {
              label: 'Projects',
              to: '/docs/projects/introduction',
            }
            
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/NhkMa4FY7P',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: "https://crudzaso.com"
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Crudzaso'
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Documentation, Inc. Crudzaso.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
