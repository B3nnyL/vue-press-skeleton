//global config for vuejs project
module.exports = {
    title: 'Title',
    description: 'Default escription in header meta',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    ga: 'GA-U-XXXXXX',
    themeConfig: {
        docsDir: 'docs',
        sidebar: [
            '/',
            '/welcome',
            '/test'
        ],
        nav: [
            {
                text: 'Blog',
                link: '/posts/p1',
            }
        ]
    }
}
