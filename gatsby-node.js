const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allFile(filter: { relativePath: { regex: "/gallery/" } }) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)
  // Creates a page for every product
  result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: "/gallery/" + node.name,
      component: path.resolve(`./src/templates/single-image.js`),
      context: {
        id: node.id,
      },
    })
  })
}
