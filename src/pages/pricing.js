import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Layout from "../components/layout"
import Hero from "../components/Home/hero"
import PricingPackage from "../components/Pricing/pricing-package"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"

const Pricing = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulHeroSection: contentfulSaaSKribeHome(
        id: { eq: "c6d17a74-1958-5188-af9b-d637e7094573" }
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
      PricingTitle: contentfulSectionTitles(
        id: { eq: "80335c7b-aa03-57be-8fc2-350b7e310a82" }
      ) {
        title
      }
      StarterPackage: contentfulPricingPackages(
        id: { eq: "881b957d-bcfb-55e4-ba68-18a9bc2078f6" }
      ) {
        price
        packageTitle
        pricingSubHeading
        id
        buttonText
        description {
          json
        }
      }
      EasyStartPackage: contentfulPricingPackages(
        id: { eq: "331a5971-b736-57b4-aede-8858cb552a6e" }
      ) {
        price
        packageTitle
        pricingSubHeading
        id
        buttonText
        description {
          json
        }
      }
      EssentialPackage: contentfulPricingPackages(
        id: { eq: "6a1cd285-8280-5cc4-919f-b8c0f0f07351" }
      ) {
        price
        packageTitle
        pricingSubHeading
        id
        buttonText
        description {
          json
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Pricing" />
      <div className="pricing-page">
        <Hero
          title={data.contentfulHeroSection.title}
          paragraph={data.contentfulHeroSection.paragraph}
          heroImage={data.contentfulHeroSection.heroImage.file.url}
          buttonText={data.contentfulHeroSection.buttonText}
        />
        <div className="pricing-page__packages">
          <Container>
            <Row className="mb-5">
              <Col lg={12}>
                <h2 className="main-heading">{data.PricingTitle.title}</h2>
              </Col>
            </Row>
            <div className="packages-container">
              <PricingPackage
                title={data.StarterPackage.packageTitle}
                price={data.StarterPackage.price}
                priceSub={data.StarterPackage.pricingSubHeading}
                buttonText={data.StarterPackage.buttonText}
                description={data.StarterPackage.description.json}
              />
              <PricingPackage
                title={data.EasyStartPackage.packageTitle}
                price={data.EasyStartPackage.price}
                priceSub={data.EasyStartPackage.pricingSubHeading}
                buttonText={data.EasyStartPackage.buttonText}
                description={data.EasyStartPackage.description.json}
              />
              <PricingPackage
                title={data.EssentialPackage.packageTitle}
                price={data.EssentialPackage.price}
                priceSub={data.EssentialPackage.pricingSubHeading}
                buttonText={data.EssentialPackage.buttonText}
                description={data.EssentialPackage.description.json}
              />
            </div>
          </Container>
        </div>
      </div>
    </Layout>
  )
}

export default Pricing
