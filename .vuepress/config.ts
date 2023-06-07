import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "星辰大海",
  description: "基于 vuepress-theme-reco 2.0 模板下的个人博客, 部署与vercel, 分享所见所闻",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/clock.png",
    author: "yinlean",
    authorAvatar: "/avatar.png",
    docsRepo: "https://github.com/yinlean/vuepress-reco-temp-app",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // 自动分类
    // autoSetBlogCategories: true,
    // // 自动将分类和标签添加至头部导航条
    // autoAddCategoryToNavbar: false,
    // catalogTitle: '自定义目录标题',
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "文章系列",
          children: ["home", "csdn"],
        },
        {
          text: "个人系列",
          children: ["article", "secret"],
        },
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      { text: "技术blog", link: "/categories/web/1/" },
      { text: "生活点滴", 
        children: [
          {
            text: 'tag1',
            link: "/tags/tag1/1/"
          },
          {
            text: 'tag2',
            link: "/tags/tag2/1/"
          }
        ]
      },
      {
        text: "其他",
        children: [
          { text: "有道云笔记", link: "https://note.youdao.com/web/#/file/CE3E8E3310A740C29931705EC4053757/note/WEB6966ef4fe38f02bc17dac7610c45ff31/" },
          { text: "关于", link: "/blogs/other/guide" },
        ],
      },
    ],
    // 公告配置
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
