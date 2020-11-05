import React from "react"
import { Container, Row, Col } from "react-bootstrap"
// import Img from "gatsby-image"

const About = ({ title, sectionImage }) => {
  return (
    <div className="about">
      <Container>
        <Row className="justify-content-center">
          <Col md sm>
            <h2 className="main-heading">{title}</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10} sm>
            {/* <Img fluid={sectionImage} /> */}
            <img alt="Intro" src={sectionImage} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
