import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import CountUp from "react-countup"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      footerContent: contentfulFooterContent(
        id: { eq: "8e156a76-0188-545b-b161-df5652d66c0f" }
      ) {
        id
        buttonText
        copyrightText
        heading
        logo {
          fluid(sizes: "350") {
            ...GatsbyContentfulFluid
          }
        }
      }
      socialIcons: allContentfulSocialLinks {
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
              <CountUp end={50000} />
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
              <Img
                className="footer-bottom__logo"
                fluid={data.footerContent.logo.fluid}
              />
              <p className="copyright">{data.footerContent.copyrightText}</p>
            </Col>
            <Col className="footer-bottom__right">
              <div className="footer-bottom__social-icons">
                {data.socialIcons.edges.map((sl, index) => (
                  <a key={index} href={sl.node.url} target="_blank">
                    {sl.node.name === "Facebook" ? <FaFacebookF /> : ""}
                    {sl.node.name === "Twitter" ? <FaTwitter /> : ""}
                    {sl.node.name === "LinkedIn" ? <FaLinkedinIn /> : ""}
                  </a>
                ))}
              </div>
              <div className="footer-bottom__menu">
                <ul>
                  <li>
                    <Link to="/">For Saasers</Link>
                  </li>
                  <li>
                    <Link to="/">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/">About</Link>
                  </li>
                  <li>
                    <Link to="/">FAQs</Link>
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
