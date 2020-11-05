import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Home/hero"
import About from "../components/Home/about"
import TwoCol from "../components/Home/twoCol"
import Logos from "../components/Home/logos"
import GeneralCounter from "../components/general/counter"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTwoCols: allContentfulProductFeatures(
        sort: { fields: createdAt, order: ASC }
      ) {
        edges {
          node {
            id
            heading
            paragraph
            reverse
            image {
              fluid(maxWidth: 350) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
      allContentfulClientsLogos: allContentfulCurrentCustomerLogos {
        edges {
          node {
            logo {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
      contentfulHeroSection: contentfulSaaSKribeHome(
        id: { eq: "f89e01c1-02f5-569a-9502-5e3b1fde1f74" }
      ) {
        buttonText
        paragraph
        title
        heroImage {
          file {
            url
          }
        }
      }
      contentfulAboutSection: contentfulSolutionDashboardWhySaaSKribe(
        id: { eq: "b7100798-58bf-51f0-be07-1318e8132d22" }
      ) {
        title
        sectionimage {
          file {
            url
          }
        }
      }
      TwoColumnTitle: contentfulSectionTitles(
        id: { eq: "e4cb4a6f-adbb-5203-98e8-3da41e0efce4" }
      ) {
        title
      }
      ClientsTitle: contentfulSectionTitles(
        id: { eq: "6c832d8c-30d6-50d2-a73b-8adc0ce4b187" }
      ) {
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
        heroImage={data.contentfulHeroSection.heroImage.file.url}
        buttonText={data.contentfulHeroSection.buttonText}
        link={"/pricing"}
      />
      <About
        title={data.contentfulAboutSection.title}
        sectionImage={data.contentfulAboutSection.sectionimage.file.url}
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
      <GeneralCounter />
    </Layout>
  )
}

export default IndexPage
