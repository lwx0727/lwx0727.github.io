# 血液肿瘤课题组介绍网页（静态站点模板）

这是一套**纯静态**的课题组介绍网页模板，风格面向**血液肿瘤/血液学科研**，支持**中英双语切换**与移动端自适应。

## 目录结构

- `index.html`：主页面（单页滚动）
- `assets/styles.css`：样式与主题（酒红/深蓝 + 流式点阵/血细胞纹理）
- `assets/app.js`：渲染与交互（中英切换、数据渲染）
- `content/site-data.js`：内容数据（推荐修改这里，双击即可生效）
- `content/site-data.json`：同结构 JSON（可用于部署在服务器时由 `fetch` 加载）
- `assets/img/`：背景 SVG / favicon / 图片资源

## 快速预览（最省事）

直接双击打开 `index.html` 即可预览。

> 注意：在 `file://` 方式下浏览器通常不允许 `fetch` 读取本地 JSON，所以页面默认使用 `content/site-data.js`。

## 本地服务器预览（推荐，用于验证 JSON）

如果你希望页面从 `content/site-data.json` 加载数据，请启动本地服务器：

### 方法 A：Python

```bash
python -m http.server 8000
```

然后在浏览器打开：`http://localhost:8000/`

### 方法 B：Node（可选）

```bash
npx --yes serve .
```

## 如何替换内容

1. 打开 `content/site-data.js`（中英双语都在里面）
2. 替换：课题组名称、研究方向、团队成员、论文、基金、动态、招生、联系方式
3. 图片放到 `assets/img/`，然后在数据里填入路径，例如：`assets/img/group.jpg`

## 部署建议

这是静态站点，可部署到任意静态托管：
- GitHub Pages / Gitee Pages
- 学校/医院服务器（Nginx/Apache 静态目录）
- 任意对象存储 + CDN



