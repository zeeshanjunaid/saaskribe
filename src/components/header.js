import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Container, Row, Col, Navbar, NavbarBrand, Nav } from "react-bootstrap"
import Logo from "../images/saaskribe_logo.png"

const Header = () => {
  const [scrolling, setScrolling] = useState(false)

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
          <Col lg={12}>
            <Navbar collapseOnSelect expand="lg">
              <NavbarBrand className="logo" tag={Link} to={"/"}>
                <img alt="logo" src={Logo} />
              </NavbarBrand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="sub-menu-bar"
                navbar
              >
                <Nav className="mr-auto"></Nav>
                <Nav>
                  <Nav.Link to="/">for saasers</Nav.Link>
                  <Nav.Link to="/">pricing</Nav.Link>
                  <Nav.Link to="/">login</Nav.Link>
                </Nav>
                <Link to="/" className="btn-dark-blue">
                  Request Demo
                </Link>
              </Navbar.Collapse>
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
