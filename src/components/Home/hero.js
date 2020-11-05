import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Hero = ({ title, paragraph, buttonText, heroImage, link, date }) => {
  return (
    <div className="hero">
      <Container>
        <Row className="align-items-center">
          <Col md sm={12} className="hero__text-container">
            {date && <p className="hero__date">{date}</p>}
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <AniLink
              fade
              entry={{
                delay: 0.6,
              }}
              to={link}
              className="gradient-btn-1"
            >
              {buttonText}
            </AniLink>
          </Col>
          <Col md sm={12} className="hero__img-container">
            <img alt="hero" src={heroImage} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
