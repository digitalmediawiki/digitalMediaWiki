module.exports = {
    base: process.env.VUEPRESS_BASE || "/",
    title: 'DigitalMediaWiki',
    description: '',
    head: [
        // scrollbar improve
        ['style',{'type':'text/css'},`
            html ::-webkit-scrollbar {
                width: 5px !important;
                height: 5px !important; }
            html ::-webkit-scrollbar-corner,
            html ::-webkit-scrollbar-track {
                background: transparent !important; }
            html ::-webkit-resizer,
            html ::-webkit-scrollbar-thumb {
                background: #aaa;
                border-radius: 3px; }
            html ::-webkit-scrollbar-thumb:hover {
                background: #888; }
            html,
            html * {
                scrollbar-color: #aaa transparent;
                scrollbar-width: thin !important; 
            }
        `]
    ],

    themeConfig: {
        // 导航栏 Logo
        logo: '/img/logo.png',

        // 仓库配置
        repo: 'digitalmediawiki/DigitalMediaWiki',
        docsDir: 'Src/docs',
        editLinks: true,
        docsBranch: 'main',
        editLinkText: '在Github上编辑！',

        nav: [
            { text: '指南', link: '/guide/intro' },
            { text: '介绍', link: '/intro/about_dm' },
            {
                text: '考研方向',
                // '/postgraduate/'
                ariaLabel: '考研方向',
                items: [
                    { text: '计算机类考研', link: '/postgraduate/cs' },
                    { text: '通信方向考研', link: '/postgraduate/te' },
                    { text: '艺术类考研', link: '/postgraduate/fa' },
                ]
            },
            {
                text: '就业方向',
                // '/job/'
                ariaLabel: '就业方向',
                items: [
                    { 
                        text: '游戏相关',
                        link: '/job/game'
                    },
                    { 
                        text: '影视方向',
                        link: '/job/film'
                    },
                    { 
                        text: '互动媒体',
                        link: '/job/meta'
                    }
                ]
            },
            {
                text: '学科能力',
                // '/ability/'
                ariaLabel: '学科能力',
                items: [
                    { 
                        text: '程序思维',
                        link: '/ability/program'
                    },    
                    { 
                        text: '设计能力',
                        link: '/ability/design'
                    }
                ]
            },
            //{ text: 'Github', link: 'https://github.com/digitalmediawiki/digitalMediaWiki' , target:'_blank'},
        ],
        sidebar: {
            '/guide/':[
                {
                    title:"简介",
                    path:"intro"
                },
                {
                    title:"使用指南",
                    path:"how_to_use"
                },
                {
                    title:"参与贡献",
                    path:"contribution"
                },
            ],
            '/intro/':[
                {
                    title:"关于数字媒体",
                    path:"about_dm"
                },
                {
                    title:"课程开设",
                    path:"school_class"
                },
            ],
            '/postgraduate/':[

            ],
            '/job/':[

            ],
            '/ability/':[

            ],
        },
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