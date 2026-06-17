import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: '我的网站',
    tagline: '一个使用 Docusaurus 构建的中文文档站点',
    favicon: 'img/favicon.ico',
    future: {
        v4: true,
    },
    url: 'https://your-docusaurus-site.example.com',
    baseUrl: '/',
    organizationName: 'facebook',
    projectName: 'docusaurus',
    onBrokenLinks: 'throw',
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
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
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
                    title: '更多',
                    items: [
                        {
                            label: '博客',
                            to: '/blog',
                        },
                    ],
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
