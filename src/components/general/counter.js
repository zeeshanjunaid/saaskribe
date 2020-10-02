import React from "react"
import { Col, Row } from "react-bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import Counter from "react-number-counter"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const GeneralCounter = () => {
  const data = useStaticQuery(graphql`
    query {
      footerContent: contentfulFooter(
        id: { eq: "8e156a76-0188-545b-b161-df5652d66c0f" }
      ) {
        buttonText

        heading
        counterEnd
        counterSpeed
        counterStart
      }
    }
  `)
  return (
    <Row className="align-items-center justify-content-center">
      <Col className="col-top" md={8} sm>
        <div className="footer__counter">
          <Counter
            start={data.footerContent.counterStart}
            end={data.footerContent.counterEnd}
            delay={data.footerContent.counterSpeed}
          />
          <span>+</span>
        </div>
        <h2 className="main-heading">{data.footerContent.heading}</h2>

        <AniLink
          fade
          entry={{
            delay: 0.6,
          }}
          className="gradient-btn-2"
          to="/"
        >
          {data.footerContent.buttonText}
        </AniLink>
      </Col>
    </Row>
  )
}

export default GeneralCounter
