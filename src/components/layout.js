/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/main.scss"
import Footer from "./footer"

const Layout = ({ children }) => {
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
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
