import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"

const Demo = () => {
  const data = useStaticQuery(graphql`
    query {
      demo: contentfulRequestDemoPage(
        id: { eq: "a4110748-1029-580d-af2a-5a77e17a3909" }
      ) {
        id
        phone
        email
        heading
        address
        subHeading
        formTitle
        nameLabel
        namePlaceholder
        emailLabel
        emailPlaceholder
        phoneLabel
        phonePlaceholder
        messageLabel
        buttonText
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Request a Demo" />
      <div className="demo">
        <Container>
          <Row>
            <Col md={6} sm>
              <h2 className="demo__title">{data.demo.heading}</h2>
              <p className="demo__description">{data.demo.subHeading}</p>
              <div className="demo__contact-info">
                <h3>Contact information</h3>
                <ul>
                  <li>
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <p>{data.demo.address}</p>
                  </li>
                  <li>
                    <span>
                      <FaEnvelope />
                    </span>
                    <p>{data.demo.email}</p>
                  </li>
                  <li>
                    <span>
                      <FaPhoneAlt />
                    </span>
                    <p>{data.demo.phone}</p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={5} sm>
              <div className="demo__form-container">
                <h2>Request a demo</h2>
                <Form>
                  <Form.Group controlId="fullName">
                    <Form.Label>{data.demo.nameLabel}</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={data.demo.namePlaceholder}
                    />
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>{data.demo.emailLabel}</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder={data.demo.emailPlaceholder}
                    />
                  </Form.Group>
                  <Form.Group controlId="phone">
                    <Form.Label>{data.demo.phoneLabel}</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={data.demo.phonePlaceholder}
                    />
                  </Form.Group>
                  <Form.Group controlId="message">
                    <Form.Label>{data.demo.messageLabel}</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button className="gradient-btn-1" type="submit" block>
                    {data.demo.buttonText}
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
