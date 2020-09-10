import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"
import Img from "gatsby-image"

const Hero = ({ title, paragraph, buttonText, heroImage }) => {
  return (
    <div className="hero">
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
    </div>
  )
}

export default Hero
