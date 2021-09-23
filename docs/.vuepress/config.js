module.exports = {
  title: "RvNovae / Oliver Kogel",
  description: "Personal homepage of Oliver Kogel and his music alias RvNovae.",
  head: [["link", { rel: "icon", href: `/profile.png` }], ["link", { rel: "shortcut icon", href: "icons/favicon.ico" }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "RvNovae", link: "/" },
      { text: "Oliver Kogel", link: "/oliver/" },
      { text: "Attributions", link: "/attributions/" },
      { text: "Impressum", link: "/impressum/" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    }
    // lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

