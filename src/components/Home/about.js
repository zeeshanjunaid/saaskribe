import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      Image: file(relativePath: { eq: "content-img1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="about">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <h2 className="main-heading">
              The Fastest Growing SaaS Companies in the world trust SaaSKribe to
              manage and renew their subscriptions
            </h2>
          </Col>
          <Col lg={10}>
            <Img fluid={data.Image.childImageSharp.fluid} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
