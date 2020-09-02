import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Row, Col, Navbar, NavbarBrand, Nav, Container } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { CgMenuCheese } from "react-icons/cg"
import { FaTimes } from "react-icons/fa"

const Header = () => {
  const Images = useStaticQuery(graphql`
    query {
      Logo: file(relativePath: { eq: "saaskribe_logo.png" }) {
        childImageSharp {
          fixed(width: 135) {
            ...GatsbyImageSharpFixed
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
              <NavbarBrand className="logo" tag={Link} to={"/"}>
                <Img alt="logo" fixed={Images.Logo.childImageSharp.fixed} />
              </NavbarBrand>
              <div onClick={() => setMenuOpen(true)} className="hamburger-icon">
                <CgMenuCheese />
              </div>
              <Navbar
                className={`sub-menu-bar ${menuOpen && "showMenu"}`}
                navbar
              >
                <div onClick={() => setMenuOpen(false)} className="cross-icon">
                  <FaTimes />
                </div>
                <Nav>
                  <Nav.Link to="/">for saasers</Nav.Link>
                  <Nav.Link to="/">pricing</Nav.Link>
                  <Nav.Link to="/">login</Nav.Link>
                </Nav>
                <Link to="/" className="btn-dark-blue">
                  Request Demo
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
