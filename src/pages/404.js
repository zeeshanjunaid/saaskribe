import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentful404Page(id: { eq: "97d673b9-870b-5c03-80e3-5d0f7c918329" }) {
        heading
        description
        backgroundImage {
          file {
            url
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div
        class="notfound"
        style={{
          backgroundImage: `url(${data.contentful404Page.backgroundImage.file.url})`,
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md sm={12} className="hero__text-container">
              <h2>{data.contentful404Page.heading}</h2>
              <p>{data.contentful404Page.description}</p>
              <Link to="/" className="gradient-btn-1">
                Go back home
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default NotFoundPage
