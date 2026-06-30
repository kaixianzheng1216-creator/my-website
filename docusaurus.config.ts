import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: '基于 Docusaurus 构建的文档站点',
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
                    blogSidebarTitle: '更新日志',
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
    themes: [
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                hashed: true,
                language: ['zh', 'en'],
                highlightSearchTermsOnTargetPage: true,
                docsRouteBasePath: ['/', 'tech', 'requirements'],
            },
        ],
        '@docusaurus/theme-mermaid',
    ],
    plugins: [
        'docusaurus-plugin-image-zoom',
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'tech',
                path: 'docs-tech',
                routeBasePath: 'tech',
                sidebarPath: './sidebarsTech.ts',
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'requirements',
                path: 'docs-requirements',
                routeBasePath: 'requirements',
                sidebarPath: './sidebarsRequirements.ts',
            },
        ],
    ],
    themeConfig: {
        image: 'img/docusaurus-social-card.jpg',
        colorMode: {
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: 'Docusaurus',
            logo: {
                alt: 'Docusaurus Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: '教程文档',
                },
                {
                    type: 'docSidebar',
                    docsPluginId: 'requirements',
                    sidebarId: 'requirementsSidebar',
                    position: 'left',
                    label: '需求文档',
                },
                {
                    type: 'docSidebar',
                    docsPluginId: 'tech',
                    sidebarId: 'techSidebar',
                    position: 'left',
                    label: '技术文档',
                },
                {
                    to: '/blog',
                    position: 'left',
                    label: '更新日志'
                },
            ],
        },
        footer: {
            links: [
                {
                    title: '文档',
                    items: [
                        {
                            label: '文档',
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
