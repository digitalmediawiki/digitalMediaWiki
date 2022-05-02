module.exports = {
    themeConfig: {
        // 导航栏 Logo
        logo: '/assets/img/logo.png',
        nav: [
            { text: '导航', link: '/building/' },
            {
                text: '考研方向',
                ariaLabel: '考研方向',
                items: [
                    { text: '计算机类考研', link: '/building/' },
                    { text: '通信方向考研', link: '/building/' },
                    { text: '艺术类考研', link: '/building/' },
                ]
            },
            {
                text: '就业方向',
                ariaLabel: '就业方向',
                items: [
                    { 
                        text: '游戏相关',
                        items: [
                            { text: '美术类', link: '/building/' },
                            { text: '程序类', link: '/building/' },
                            { text: '策划类', link: '/building/' },
                        ]
                    },
                    { 
                        text: '影视方向',
                        items: [
                            { text: '美术类', link: '/building/' },
                            { text: '程序类', link: '/building/' },
                            { text: '策划类', link: '/building/' },
                        ]
                    },
                    { 
                        text: '互动媒体',
                        items: [
                            { text: '虚拟现实', link: '/building/' },
                            { text: '增强现实', link: '/building/' },
                            { text: '人机交互', link: '/building/' },
                        ]
                    }
                ]
            },
            {
                text: '学科能力',
                ariaLabel: '学科能力',
                items: [
                    { 
                        text: '程序思维',
                        items: [
                            { text: '数据结构与算法', link: '/building/' },
                            { text: '图形学', link: '/building/' },
                            { text: '信号处理', link: '/building/' },
                        ]
                    },
                    { 
                        text: '设计能力',
                        items: [
                            { text: '图形创意能力', link: '/building/' },
                            { text: '数字转化能力', link: '/building/' },
                            { text: '艺术鉴赏能力', link: '/building/' },
                        ]
                    }
                ]
            },
            { text: 'Github', link: 'https://github.com/digitalmediawiki/digitalMediaWiki' , target:'_blank'},
        ],
        lastUpdated: '最后更新'
    },
    plugins: [
        [
          '@vuepress/google-analytics',
          {
            'ga': '' 
          }
        ]
      ]
  }