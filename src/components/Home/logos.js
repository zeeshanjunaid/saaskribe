import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import Carousel from "react-elastic-carousel"

const Logos = ({ logos, title }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 3 },
    { width: 1750, itemsToShow: 3 },
  ]
  return (
    <div className="logos">
      <Container>
        <Row>
          <Col>
            <h2 className="main-heading">{title}</h2>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Carousel
            autoPlaySpeed={1500}
            enableAutoPlay
            itemPadding={[0, 3]}
            breakPoints={breakPoints}
            itemsToShow={3}
            transitionMs={600}
            showArrows={false}
          >
            {logos.map((item, index) => (
              <Col className="logos_container" key={index}>
                <Img fluid={item.node.logo.fluid} />
              </Col>
            ))}
          </Carousel>
        </Row>
      </Container>
    </div>
  )
}

export default Logos
