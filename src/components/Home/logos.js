import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

const Logos = ({ logos }) => {
  return (
    <div className="logos">
      <Container>
        <Row>
          <Col>
            <h2 className="main-heading">Our Clients</h2>
          </Col>
        </Row>
        <Row>
          {logos.map((item, index) => (
            <Col key={index}>
              <Img fluid={item.node.logo.fluid} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Logos
