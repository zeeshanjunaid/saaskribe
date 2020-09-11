import React from "react"
import { Col, Container, Row } from "react-bootstrap"
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
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default Demo
