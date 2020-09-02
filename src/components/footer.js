import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={8}>
            <h2 className="main-heading">
              Supporting over 50 thousand subscriptions globally, and counting
            </h2>
            <Link className="gradient-btn-2" to="/">
              get started
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
