import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
// import Carousel from "react-elastic-carousel"
import "react-multi-carousel/lib/styles.css"
import Carousel from "react-multi-carousel"

const Logos = ({ logos, title }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  return (
    <div className="logos">
      <Container>
        <Row>
          <Col>
            <h2 className="main-heading">{title}</h2>
          </Col>
        </Row>
        <div className="align-items-center">
          <Carousel
            responsive={responsive}
            autoPlay
            autoPlaySpeed={1500}
            infinite={true}
          >
            {logos.map((item, index) => (
              <Img fluid={item.node.logo.fluid} key={index} />
            ))}
          </Carousel>
        </div>
      </Container>
    </div>
  )
}

export default Logos
