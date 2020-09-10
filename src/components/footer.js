import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import Counter from "react-number-counter"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      footerContent: contentfulFooter(
        id: { eq: "8e156a76-0188-545b-b161-df5652d66c0f" }
      ) {
        id
        buttonText
        copyrightText
        heading
        logo {
          file {
            url
          }
        }
      }
      socialIcons: allContentfulSocialMediaExternal {
        edges {
          node {
            name
            url
          }
        }
      }
    }
  `)
  return (
    <div className="footer">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-top" md={8} sm>
            <div class="footer__counter">
              <Counter start={0} end={50000} delay={1} />
              <span>+</span>
            </div>
            <h2 className="main-heading">{data.footerContent.heading}</h2>

            <Link className="gradient-btn-2" to="/">
              {data.footerContent.buttonText}
            </Link>
          </Col>
        </Row>
        <div className="footer-bottom">
          <Row>
            <Col>
              <Link to="/">
                <img
                  className="footer-bottom__logo"
                  src={data.footerContent.logo.file.url}
                />
              </Link>
              <p className="copyright">{data.footerContent.copyrightText}</p>
            </Col>
            <Col className="footer-bottom__right">
              <div className="footer-bottom__social-icons">
                {data.socialIcons.edges.map((sl, index) => (
                  <a
                    key={index}
                    href={sl.node.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {sl.node.name === "Facebook" ? <FaFacebookF /> : ""}
                    {sl.node.name === "Twitter" ? <FaTwitter /> : ""}
                    {sl.node.name === "LinkedIn" ? <FaLinkedinIn /> : ""}
                  </a>
                ))}
              </div>
              <div className="footer-bottom__menu">
                <ul>
                  <li>
                    <Link to="/saasers">For Saasers</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/faqs">FAQs</Link>
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
