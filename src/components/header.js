import React, { useState, useEffect } from "react"

import PropTypes from "prop-types"
import { Row, Col, Navbar, Nav, Container } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { FaTimes, FaBars } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      headerContent: contentfulHeader(
        id: { eq: "bd4009d2-c1ff-5e7f-83ee-512d12284d3c" }
      ) {
        buttonText
        forSaasersText
        loginText
        pricingText
        logo {
          file {
            url
          }
        }
      }
    }
  `)
  const [scrolling, setScrolling] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setScrolling(false)
      } else if (window.scrollY !== 0) {
        setScrolling(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <div id="header" className={`navbar-area ${scrolling && "sticky"}`}>
      <Container>
        <Row>
          <Col>
            <Navbar expand="md">
              <AniLink
                entry={{
                  delay: 0.6,
                }}
                fade
                className="logo navbar-brand"
                to="/"
              >
                <img alt="logo" src={data.headerContent.logo.file.url} />
              </AniLink>
              <div
                role="button"
                click={() => setMenuOpen(true)}
                className="hamburger-icon"
              >
                <FaBars />
              </div>
              <Navbar
                className={`sub-menu-bar ${menuOpen && "showMenu"}`}
                navbar
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setMenuOpen(false)}
                  onKeyDown={() => setMenuOpen(false)}
                  className="cross-icon"
                >
                  <FaTimes />
                </div>
                <Nav>
                  <AniLink
                    entry={{
                      delay: 0.6,
                    }}
                    fade
                    className="nav-link"
                    to="/saasers"
                  >
                    {data.headerContent.forSaasersText}
                  </AniLink>
                  <AniLink
                    entry={{
                      delay: 0.6,
                    }}
                    fade
                    className="nav-link"
                    to="/pricing"
                  >
                    {data.headerContent.pricingText}
                  </AniLink>
                  <AniLink
                    entry={{
                      delay: 0.6,
                    }}
                    fade
                    className="nav-link"
                    to="/login"
                  >
                    {data.headerContent.loginText}
                  </AniLink>
                </Nav>
                <AniLink
                  entry={{
                    delay: 0.6,
                  }}
                  fade
                  to="/demo"
                  className="btn-dark-blue"
                >
                  {data.headerContent.buttonText}
                </AniLink>
              </Navbar>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
