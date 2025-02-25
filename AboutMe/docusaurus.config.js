// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'That\`s Me',
  tagline: 'Guess who am I',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ragamuffin85.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ThatsMe/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ragamuffin85', // Usually your GitHub org/user name.
  projectName: 'ThatsMe', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // offline search, src: https://github.com/praveenn77/docusaurus-lunr-search
  // install npm dependency with:
  // yarn add docusaurus-lunr-search
  plugins: [require.resolve('docusaurus-lunr-search')],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'That\'s me',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            // title: 'Docs',
            // items: [
            //   {
            //     label: 'Tutorial',
            //     to: '/docs/intro',
            //   },
            // ],
          },
          {
            // title: 'Community',
            // items: [
            //   {
            //     label: 'Stack Overflow',
            //     href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //   },
            //   {
            //     label: 'Discord',
            //     href: 'https://discordapp.com/invite/docusaurus',
            //   },
            //   {
            //     label: 'X',
            //     href: 'https://x.com/docusaurus',
            //   },
            // ],
          },
          {
            // title: 'More',
            // items: [
            //   {
            //     label: 'Blog',
            //     to: '/blog',
            //   },
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/facebook/docusaurus',
              // },
            // ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} That's Me, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
