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
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn'
        },pages: {
          path: 'src/pages'
        }
        ,
        theme: {
          customCss: ['./src/css/custom.css',
          './src/css/suerteGanadora.css',

          //aqui pueden seguir agregando sus estilos 

          ]
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
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Projects',
        },
        {
          to: '/blog', 
          label: 'Infrastructure', 
          position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
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
              to: '/docs/intro',
            },
            {
              label: 'Projects',
              to: '/docs/intro',
            }
            
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: "https://www.crudzaso.com"
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
