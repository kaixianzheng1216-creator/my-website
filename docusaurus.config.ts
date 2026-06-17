import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// 这里的配置运行在 Node.js 中，不要使用客户端代码（浏览器 API、JSX 等）。

const config: Config = {
  title: '我的网站',
  tagline: '一个使用 Docusaurus 构建的中文文档站点',
  favicon: 'img/favicon.ico',

  // 未来特性开关，参见 https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // 提升与即将发布的 Docusaurus v4 的兼容性。
  },

  // 在这里设置站点的生产环境 URL。
  url: 'https://your-docusaurus-site.example.com',
  // 设置站点服务所在的 /<baseUrl>/ 路径。
  // 部署到 GitHub Pages 时，通常是 '/<projectName>/'。
  baseUrl: '/',

  // GitHub Pages 部署配置。
  // 如果不使用 GitHub Pages，可以不需要这些配置。
  organizationName: 'facebook', // 通常是你的 GitHub 组织名或用户名。
  projectName: 'docusaurus', // 通常是你的仓库名。

  onBrokenLinks: 'throw',

  // 即便不使用多语言切换,也可以通过该字段设置 HTML 语言等元数据。
  // 单语言中文站点使用 zh-CN。
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // 请将这里改为你的仓库地址。
          // 删除该配置可以移除“编辑此页”链接。
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 请将这里改为你的仓库地址。
          // 删除该配置可以移除“编辑此页”链接。
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // 用于强制执行博客最佳实践的实用选项。
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 替换为你项目自己的社交分享图。
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '我的网站',
      logo: {
        alt: '我的网站 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '文档入门',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `版权所有 © ${new Date().getFullYear()} 我的项目。使用 Docusaurus 构建。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
