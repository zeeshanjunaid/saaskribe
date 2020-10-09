import React from "react"
import { Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Hero from "../components/Home/hero"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Saasers = () => {
  const data = useStaticQuery(graphql`
    query {
      posts: allContentfulBlogPosts(limit: 40) {
        edges {
          node {
            id
            title
            updatedAt(formatString: "DD  MMMM, YYYY", locale: "en")
            featureImage {
              fluid(maxHeight: 275) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
      featuredPost: contentfulBlogPosts(featured: { eq: true }) {
        id
        title
        excerpt
        updatedAt(formatString: "DD  MMMM, YYYY", locale: "en")
        featureImage {
          file {
            url
          }
        }
      }
    }
  `)
  const slug = data.featuredPost.title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
  const featuredPostID = data.featuredPost.id
  return (
    <Layout>
      <SEO title="Blog for Saasers" />
      <div className="blog">
        <div className="blog__featured-post">
          <Hero
            link={`/posts/${slug}`}
            title={data.featuredPost.title}
            buttonText="read more"
            date={data.featuredPost.updatedAt}
            heroImage={data.featuredPost.featureImage.file.url}
            paragraph={data.featuredPost.excerpt}
          />
        </div>

        <Container>
          <Row>
            <div className="blog__posts">
              {data.posts.edges.map((post, index) => {
                const slug = post.node.title
                  .toLowerCase()
                  .replace(/ /g, "-")
                  .replace(/[^\w-]+/g, "")
                if (featuredPostID === post.node.id) {
                  return null
                } else {
                  return (
                    <div key={index} className="blog__post">
                      <AniLink
                        fade
                        entry={{
                          delay: 0.6,
                        }}
                        to={`/posts/${slug}`}
                      >
                        <div className="blog__post-img">
                          <Img fluid={post.node.featureImage.fluid} />
                        </div>
                        <div className="blog__post-date">
                          {post.node.updatedAt}
                        </div>
                        <div className="blog__post-title">
                          <h2>{post.node.title}</h2>
                        </div>
                      </AniLink>
                    </div>
                  )
                }
              })}
            </div>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Saasers
