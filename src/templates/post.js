import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import Img from "gatsby-image"
import RichTextToReact from "rich-text-to-react"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const Post = ({ data }) => {
  const { title, featureImage } = data.contentfulBlogPosts

  return (
    <Layout>
      <SEO title={title} />
      <div className="post-template">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} sm>
              <h2 className="post-template__title">{title}</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col>
              <div className="post-template__img">
                <Img fluid={featureImage.fluid} />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm>
              <div className="post-template__content">
                <RichTextToReact
                  document={data.contentfulBlogPosts.content.json}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($id: String!) {
    contentfulBlogPosts(id: { eq: $id }) {
      title
      featureImage {
        fluid(maxHeight: 400) {
          ...GatsbyContentfulFluid
        }
      }
      content {
        json
        content
      }
    }
  }
`
