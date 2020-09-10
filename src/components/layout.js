/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/main.scss"
import Footer from "./footer"
import scrollTo from "gatsby-plugin-smoothscroll"
import { FaChevronUp } from "react-icons/fa"

const Layout = ({ children }) => {
  const [scrolling, setScrolling] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
  }, [])
  const data = useStaticQuery(graphql`
    query {
      headerContent: contentfulHeader(
        id: { eq: "bd4009d2-c1ff-5e7f-83ee-512d12284d3c" }
      ) {
        favicon {
          fluid {
            src
          }
        }
      }
    }
  `)
  return (
    <>
      <Helmet>
        <link rel="icon" href={data.headerContent.favicon.fluid.src} />
      </Helmet>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <button
        className={`back ${scrolling && "show"}`}
        onClick={() => scrollTo("#main")}
      >
        <FaChevronUp />
      </button>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
