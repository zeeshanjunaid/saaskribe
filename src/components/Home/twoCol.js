import React from "react"
import { Row, Col } from "react-bootstrap"
import Img from "gatsby-image"

const TwoCol = ({ heading, paragraph, imageLink, reverse }) => {
  if (reverse) {
    return (
      <Row className="align-items-center mt-5 mb-5 reverse_row">
        <Col>
          <Img className="twoCol__image" fluid={imageLink} />
        </Col>
        <Col>
          <h3 className="twoCol__heading">{heading}</h3>
          <p className="twoCol__paragraph">{paragraph}</p>
        </Col>
      </Row>
    )
  } else {
    return (
      <Row className="align-items-center mt-5 mb-5">
        <Col>
          <h3 className="twoCol__heading">{heading}</h3>
          <p className="twoCol__paragraph">{paragraph}</p>
        </Col>
        <Col>
          <Img className="twoCol__image" fluid={imageLink} />
        </Col>
      </Row>
    )
  }
}

export default TwoCol
