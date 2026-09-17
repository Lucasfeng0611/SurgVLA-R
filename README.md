# SurgVLA-R 项目页（GitHub Pages）

GitHub 账户：https://github.com/Lucasfeng0611

把整个 `github-pages/` 目录推到个人站点即可，例如：

```text
https://lucasfeng0611.github.io/surgvla-r/
```

对应仓库名建议：`surgvla-r` 或放进 `Lucasfeng0611.github.io`。

或把本目录内容放到仓库的 `docs/`，在 GitHub Settings → Pages 选 Deploy from branch / docs。

## 本地预览

在本目录打开即可（相对路径，不必起服务器）：

- `index.html` 概览
- `results.html` 量化结果
- `videos.html` 演示视频
- `diagnosis.html` hold-open 诊断
- `about.html` 项目维护者、研究范围与引用

若视频无法播放，用任意静态服务器：

```bash
python -m http.server 8080
```

## 内容范围

页面已同步至 2026-09-17 的研究进展，包含状态 ACT 基线、SmolVLA pilot、物理抓取盆地、局部 RGB-D 闭环、定位诊断与最新离线泛化实验。

首页采用研究项目作品集叙事；结果页按证据等级区分状态基线、物理验证、局部闭环和离线实验。视频中的主演示记录截至 2026-08-26 的阶段，最新量化结论以结果页为准。

About 页包含项目维护者、独立完成的工作、项目演进、研究范围与引用信息。
