import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import GeneralCounter from "./general/counter"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      footerContent: contentfulFooter(
        id: { eq: "8e156a76-0188-545b-b161-df5652d66c0f" }
      ) {
        id
        copyrightText
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
        <GeneralCounter />
        <div className="footer-bottom">
          <Row>
            <Col>
              <AniLink
                fade
                entry={{
                  delay: 0.6,
                }}
                to="/"
              >
                <img
                  alt="footer-logo"
                  className="footer-bottom__logo"
                  src={data.footerContent.logo.file.url}
                />
              </AniLink>
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
                    <AniLink
                      fade
                      entry={{
                        delay: 0.6,
                      }}
                      to="saasers"
                    >
                      For Saasers
                    </AniLink>
                  </li>
                  <li>
                    <AniLink
                      fade
                      entry={{
                        delay: 0.6,
                      }}
                      to="pricing"
                    >
                      Pricing
                    </AniLink>
                  </li>
                  <li>
                    <AniLink
                      fade
                      entry={{
                        delay: 0.6,
                      }}
                      to="about"
                    >
                      About
                    </AniLink>
                  </li>
                  <li>
                    <AniLink
                      fade
                      entry={{
                        delay: 0.6,
                      }}
                      to="faqs"
                    >
                      FAQs
                    </AniLink>
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
