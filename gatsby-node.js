const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/posts/'+ node.frontmatter.slug,
      component: path.resolve('./src/templates/post-details.js'),
      context: { slug: node.frontmatter.slug }
    })
  })

}