const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allContentfulBlogPosts {
        nodes {
          id
          title
        }
      }
    }
  `)
  if (!data.allContentfulBlogPosts) return null
  data.allContentfulBlogPosts.nodes.forEach(post => {
    const slug = post.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "")
    createPage({
      path: `/posts/${slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: slug,
        id: post.id,
      },
    })
  })
}
