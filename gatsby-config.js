module.exports = {
  siteMetadata: {
    title: `Mugenosu`,
    description: `Generative drawings`,
    author: `@driescruyskens`,
    siteUrl: 'https://mugenosu.ink'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
        cmsConfig: `/static/admin/config.yml`,
      },
    },
    `gatsby-plugin-react-helmet`,
   "gatsby-remark-copy-linked-files",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-plugin-netlify-cms-paths`,
            options: {
              cmsConfig: `/static/admin/config.yml`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              showCaption: true,
              tracedSVG: true,
            },
          },
          {
            resolve: 'gatsby-remark-instagram-embed',
            options: {
              width: 320,
              height: 320,
            },
          },
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-optimize-svgs',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${__dirname}/src/content/works`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `works`,
        path: `${__dirname}/static`, // necessary for images uploaded through netlify-cms
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-favicon',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
}
