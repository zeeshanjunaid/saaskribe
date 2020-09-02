import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      footerLogo: file(relativePath: { eq: "saaskribe_flogo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-top" lg={8}>
            <h2 className="main-heading">
              Supporting over 50 thousand subscriptions globally, and counting
            </h2>
            <Link className="gradient-btn-2" to="/">
              get started
            </Link>
          </Col>
        </Row>
        <div className="footer-bottom">
          <Row>
            <Col>
              <Img
                className="footer-bottom__logo"
                fluid={data.footerLogo.childImageSharp.fluid}
              />
              <p className="copyright">© 2020 SassKribe, all rights reserved</p>
            </Col>
            <Col className="footer-bottom__right">
              <div className="footer-bottom__social-icons">
                <a href="#" target="_blank">
                  <FaFacebookF />
                </a>
                <a href="#" target="_blank">
                  <FaTwitter />
                </a>
                <a href="#" target="_blank">
                  <FaInstagram />
                </a>
              </div>
              <div className="footer-bottom__menu">
                <ul>
                  <li>
                    <Link to="/">For Saasers</Link>
                  </li>
                  <li>
                    <Link to="/">For Saasers</Link>
                  </li>
                  <li>
                    <Link to="/">For Saasers</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Footer
