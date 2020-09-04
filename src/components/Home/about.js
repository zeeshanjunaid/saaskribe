import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const About = ({ title, sectionImage }) => {
  return (
    <div className="about">
      <Container>
        <Row className="justify-content-center">
          <Col sm>
            <h2 className="main-heading">{title}</h2>
          </Col>
          <Col md={10} sm>
            <Img fluid={sectionImage} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
