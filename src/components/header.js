import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Row, Col, Navbar, NavbarBrand, Nav, Container } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import { FaTimes, FaBars } from "react-icons/fa"

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
              <Link className="logo navbar-brand" tag={Link} to="/">
                <img alt="logo" src={data.headerContent.logo.file.url} />
              </Link>
              <div onClick={() => setMenuOpen(true)} className="hamburger-icon">
                <FaBars />
              </div>
              <Navbar
                className={`sub-menu-bar ${menuOpen && "showMenu"}`}
                navbar
              >
                <div onClick={() => setMenuOpen(false)} className="cross-icon">
                  <FaTimes />
                </div>
                <Nav>
                  <Nav.Link to="/">
                    {data.headerContent.forSaasersText}
                  </Nav.Link>
                  <Nav.Link to="/">{data.headerContent.pricingText}</Nav.Link>
                  <Nav.Link to="/">{data.headerContent.loginText}</Nav.Link>
                </Nav>
                <Link to="/" className="btn-dark-blue">
                  {data.headerContent.buttonText}
                </Link>
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
