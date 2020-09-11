import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const Login = () => {
  const { headerContent, socialIcons, footerContent } = useStaticQuery(graphql`
    query {
      headerContent: contentfulHeader(
        id: { eq: "bd4009d2-c1ff-5e7f-83ee-512d12284d3c" }
      ) {
        logo {
          file {
            url
          }
        }
      }
      socialIcons: allContentfulSocialMediaExternal {
        edges {
          node {
            name
            url
          }
        }
      }
      footerContent: contentfulFooter(
        id: { eq: "8e156a76-0188-545b-b161-df5652d66c0f" }
      ) {
        copyrightText
      }
    }
  `)
  return (
    <div className="login">
      <img
        className="left-curve"
        src={require("../images/login-leftcurve.svg")}
      />
      <img
        className="right-curve"
        src={require("../images/login-rightcurve.svg")}
      />
      <Container>
        <Row className="align-items-center jusitfy-content-center">
          <Col md={4} sm={6} xs={10}>
            <Link to="/">
              <img className="logo" src={headerContent.logo.file.url} />
            </Link>
            <h2>Welcome Back</h2>
            <p>Enter your details below</p>
            <Form className="login__form">
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group>
                <Link className="fp" to="/">
                  Forget password?
                </Link>
              </Form.Group>
              <Button className="gradient-btn-1" type="submit" block>
                Sign in
              </Button>
            </Form>
            <div className="signup-text">
              Don't have an account? <Link to="/">Sign up</Link>
            </div>
            <div className="social-login">
              <a className="gmail-btn" href="/">
                <img src={require("../images/google.png")} />
                Login with Gmail
              </a>
              <a className="window-btn" href="/">
                <img src={require("../images/microsoft.png")} />
                Login with Microsoft
              </a>
            </div>
            <div className="login__footer">
              <div className="ss">
                {socialIcons.edges.map((sl, index) => (
                  <a
                    key={index}
                    href={sl.node.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {sl.node.name === "Facebook" ? <FaFacebookF /> : ""}
                    {sl.node.name === "Twitter" ? <FaTwitter /> : ""}
                    {sl.node.name === "LinkedIn" ? <FaLinkedinIn /> : ""}
                  </a>
                ))}
              </div>
              <p className="copyright-text">{footerContent.copyrightText}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
