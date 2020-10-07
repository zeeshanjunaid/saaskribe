import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import DemoForm from "../components/general/demoForm"
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
                <DemoForm
                  nameLabel={data.demo.nameLabel}
                  namePlaceholder={data.demo.namePlaceholder}
                  emailLabel={data.demo.emailLabel}
                  emailPlaceholder={data.demo.emailPlaceholder}
                  phoneLabel={data.demo.phoneLabel}
                  phonePlaceholder={data.demo.phonePlaceholder}
                  messageLabel={data.demo.messageLabel}
                  buttonText={data.demo.buttonText}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Demo
