import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const Hero = ({ title, paragraph, buttonText, heroImage }) => {
  const HeroImages = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "top-imag.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroBg: file(relativePath: { eq: "top-background.png" }) {
        childImageSharp {
          fluid(quality: 90) {
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
          <Col md sm={12} className="hero__text-container">
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <Link to="/" className="gradient-btn-1">
              {buttonText}
            </Link>
          </Col>
          <Col md sm={12} className="hero__img-container">
            <Img fluid={heroImage} />
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  )
}

export default Hero
