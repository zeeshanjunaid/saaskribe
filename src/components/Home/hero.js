import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
  const HeroImages = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "top-imag.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroBg: file(relativePath: { eq: "top-background.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      Tag="div"
      fluid={HeroImages.heroBg.childImageSharp.fluid}
      className="hero"
    >
      <Container>
        <Row className="align-items-center">
          <Col md={5} sm={12}>
            <h2>The renewal solution for SaaS Companies</h2>
            <p>
              Fully Support your Renewal, Forecasting, Investor, and
              Subscription needs, from a Single Platform
            </p>
            <Link to="/" className="gradient-btn-1">
              Pricing and plans
            </Link>
          </Col>
          <Col md={6} sm={12}>
            <Img fluid={HeroImages.heroImage.childImageSharp.fluid} />
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  )
}

export default Hero
