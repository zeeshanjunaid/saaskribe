import React from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"

const Demo = () => {
  return (
    <Layout>
      <SEO title="Request a Demo" />
      <div className="demo">
        <Container>
          <Row>
            <Col md={6} sm>
              <h2 className="demo__title">
                Start Growing With
                <br />
                SaasKribe Today
              </h2>
              <p className="demo__description">
                Question about your account or want to know more about
                Saaskribe? Complete the form and we’ll get back to you.
              </p>
              <div className="demo__contact-info">
                <h3>Contact information</h3>
                <ul>
                  <li>
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <p>
                      3000 Lawrence Street
                      <br />
                      Denver, CO 80205
                    </p>
                  </li>
                  <li>
                    <span>
                      <FaEnvelope />
                    </span>
                    <p>support@taskade.com</p>
                  </li>
                  <li>
                    <span>
                      <FaPhoneAlt />
                    </span>
                    <p>(877) 788-0653</p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={5} sm>
              <div className="demo__form-container">
                <h2>Request a demo</h2>
                <Form>
                  <Form.Group controlId="fullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="John Smith" />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="john.smith@gmail.com"
                    />
                  </Form.Group>
                  <Form.Group controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="877-788-0653" />
                  </Form.Group>
                  <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button className="gradient-btn-1" type="submit" block>
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Demo
