/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allContentfulBlogPosts {
        nodes {
          id
          title
          updatedAt(formatString: "DD  MMMM, YYYY", locale: "en")
          featureImage {
            fluid {
              src
            }
          }
          childContentfulBlogPostsContentRichTextNode {
            json
          }
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
        title: post.title,
        content: post.childContentfulBlogPostsContentRichTextNode,
        date: post.updatedAt,
        featuredImg: post.featureImage,
      },
    })
  })
}
