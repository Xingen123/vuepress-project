module.exports = {
  theme: 'reco',
  title: '智慧气象前端文档',
  description: 'xingen',
  head: [['link', { rel: 'icon', href: '/logo.ico' }]],
  themeConfig: {
    displayAllHeaders: true,
    activeHeaderLinks: false,
    nav: [
      { text: '项目介绍', link: '/project/api' },
      {
        text: '前端编码风格',
        items: [
          { text: 'Vue风格', link: '/standard/vue-style' },
          { text: 'ES6风格', link: '/standard/es-style' },
        ],
      },
      { text: 'Git开发流程管理', link: '/git-standard/branch-mag' },
    ],
    sidebar: {
      '/project/': [
        {
          title: '项目介绍', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          children: ['api'],
        },
      ],
      '/standard/': getGuideSidebar('vue风格统一', 'es6风格统一'),
      '/git-standard/': [
        {
          title: '团队Git分支管理规范', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          children: ['branch-mag'],
        },
      ],
    },
  },
}
function getGuideSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ['vue-style'],
    },
    {
      title: groupB,
      collapsable: false,
      children: ['es-style'],
    },
  ]
}
