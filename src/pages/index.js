import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Home/hero"
import About from "../components/Home/about"
import TwoCol from "../components/Home/twoCol"
import Logos from "../components/Home/logos"

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
      contentfulHeroSection(sectionid: { eq: 1 }) {
        buttonText
        paragraph
        sectionid
        title
        heroImage {
          fluid(toFormat: WEBP) {
            ...GatsbyContentfulFluid
          }
        }
      }
      contentfulAboutSection(sectionId: { eq: 1 }) {
        title
        sectionimage {
          fluid(toFormat: WEBP) {
            ...GatsbyContentfulFluid
          }
        }
      }
      TwoColumnTitle: contentfulHeading(sectionName: { eq: "TwoColumnTitle" }) {
        title
      }
      ClientsTitle: contentfulHeading(sectionName: { eq: "ClientsTitle" }) {
        title
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero
        title={data.contentfulHeroSection.title}
        paragraph={data.contentfulHeroSection.paragraph}
        heroImage={data.contentfulHeroSection.heroImage.fluid}
        buttonText={data.contentfulHeroSection.buttonText}
      />
      <About
        title={data.contentfulAboutSection.title}
        sectionImage={data.contentfulAboutSection.sectionimage.fluid}
      />
      <div className="twoCol">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <h2 className="main-heading">{data.TwoColumnTitle.title}</h2>
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
        <Logos
          title={data.ClientsTitle.title}
          logos={data.allContentfulClientsLogos.edges}
        />
      </div>
    </Layout>
  )
}

export default IndexPage
