# 网站

本站使用 [Docusaurus](https://docusaurus.io/) 构建，一个现代化的静态网站生成器。

## 安装

```bash
yarn
```

## 本地开发

```bash
yarn start
```

该命令会启动一个本地开发服务器，并自动打开浏览器窗口。大多数修改会实时刷新，无需重启服务器。

## 构建

```bash
yarn build
```

该命令会把静态内容生成到 `build` 目录，可以使用任意静态内容托管服务来部署。

## 部署

使用 SSH：

```bash
USE_SSH=true yarn deploy
```

不使用 SSH：

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

如果使用 GitHub Pages 托管，这个命令可以方便地构建网站并推送到 `gh-pages` 分支。
