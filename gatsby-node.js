const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        let slug = createFilePath({ node, getNode, basePath: `content/works` })
        slug = slug.match(/^\/([^\/]*)\//)[0]
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }

    if (node.internal.type === `MarkdownRemark`) {
      let slug = createFilePath({ node, getNode, basePath: `content/products` })
      slug = slug.match(/^\/([^\/]*)\//)[0]
      createNodeField({
          node,
          name: 'slug',
          value: slug
      })
  }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // **Note:** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    const workNodes = await graphql(`
      query {
        allMarkdownRemark(filter: {fields: {sourceName: {eq: "works"}}}) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    workNodes.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })

      const productNodes = await graphql(`
      query {
        allMarkdownRemark(filter: {fields: {sourceName: {eq: "products"}}}) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    productNodes.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/product.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
  }