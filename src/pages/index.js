import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Home/hero"
import About from "../components/Home/about"
import TwoCol from "../components/Home/twoCol"
import Logos from "../components/Home/Logos"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTwoCols(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            id
            heading
            paragraph
            reverse
            image {
              fluid(maxWidth: 350, toFormat: WEBP) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
      allContentfulClientsLogos {
        edges {
          node {
            logo {
              fluid(toFormat: WEBP) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <div className="twoCol">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="main-heading">
                Everything You Need to Scale and Protect your Recurring Revenue
              </h2>
            </Col>
          </Row>
          {data.allContentfulTwoCols.edges.map(item => (
            <TwoCol
              key={item.node.id}
              heading={item.node.heading}
              paragraph={item.node.paragraph}
              imageLink={item.node.image.fluid}
              reverse={item.node.reverse}
            />
          ))}
        </Container>
        {/* <Logos logos={data.allContentfulClientsLogos.edges} /> */}
      </div>
    </Layout>
  )
}

export default IndexPage
