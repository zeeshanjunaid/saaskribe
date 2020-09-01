import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Home/hero"
import About from "../components/Home/about"
import TwoCol from "../components/Home/twoCol"

const IndexPage = () => {
  const ColImages = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "content_img2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "content_img3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <div className="twoCol">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="main-heading">
                Everything You Need to Scale and Protect your Recurring Revenue
              </h2>
            </Col>
          </Row>
          <TwoCol
            heading="Take the admin work out of your renewal process, focus on Customer Retention "
            paragraph="Automate the subscription renewal process and track renewal
      notifications and confirmations"
            imageLink={ColImages.image1.childImageSharp.fluid}
            reverse={false}
          />
          <TwoCol
            heading="Manage all of your subscription renewals from a single dashboard"
            paragraph="A full suite of subscription management tools at your fingertips, all with real time reporting."
            imageLink={ColImages.image2.childImageSharp.fluid}
            reverse={true}
          />
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage
