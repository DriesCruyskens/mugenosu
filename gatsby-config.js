module.exports = {
  siteMetadata: {
    title: `Mugenosu`,
    description: `Generative drawings`,
    author: `@driescruyskens`,
    siteUrl: 'https://mugenosu.xyz'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
        name: `works`,
        path: `${__dirname}/src/works`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-favicon',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Permanent Marker`,
          },
          {
            family: `ABeeZee`,
          },
        ],
      },
    }
  ],
}
