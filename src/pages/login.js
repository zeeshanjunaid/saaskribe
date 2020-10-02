import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa"

const Login = () => {
  const {
    headerContent,
    socialIcons,
    footerContent,
    loginContent,
  } = useStaticQuery(graphql`
    query {
      loginContent: contentfulLoginPage(
        id: { eq: "6e0449a0-cf0d-5d8e-bc48-64958920e501" }
      ) {
        loginWithGoogle
        loginWithMicrosoft
        emailLabel
        passwordLabel
        signInButton
        forgetPasswordText
        dontHaveAnAccountText
        dontHaveAnAccount
        signUpButtonText
        subHeading
        heading
        leftImage {
          file {
            url
          }
        }
        rightImage {
          file {
            url
          }
        }
      }
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
      <SEO title="Login" />
      <img
        alt="left-curve"
        className="left-curve"
        src={loginContent.leftImage.file.url}
      />
      <img
        alt="right-curve"
        className="right-curve"
        src={loginContent.rightImage.file.url}
      />
      <Container>
        <Row className="align-items-center jusitfy-content-center">
          <Col md={4} sm={6} xs={10}>
            <Link to="/">
              <img
                alt="logo"
                className="logo"
                src={headerContent.logo.file.url}
              />
            </Link>
            <h2>{loginContent.heading}</h2>
            <p>{loginContent.subHeading}</p>
            <Form className="login__form">
              <Form.Group controlId="formGroupEmail">
                <Form.Label>{loginContent.emailLabel}</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>{loginContent.passwordLabel}</Form.Label>
                <Form.Control type="password" />
              </Form.Group>
              <Form.Group>
                <Link className="fp" to="/">
                  {loginContent.forgetPasswordText}
                </Link>
              </Form.Group>
              <Button className="gradient-btn-1" type="submit" block>
                {loginContent.signInButton}
              </Button>
            </Form>
            {loginContent.dontHaveAnAccount && (
              <div className="signup-text">
                {loginContent.dontHaveAnAccountText}{" "}
                <Link to="/">{loginContent.signUpButtonText}</Link>
              </div>
            )}

            <div className="social-login">
              {loginContent.loginWithGoogle && (
                <a className="gmail-btn" href="/">
                  <img alt="google" src={require("../images/google.png")} />
                  Login with Gmail
                </a>
              )}

              {loginContent.loginWithMicrosoft && (
                <a className="window-btn" href="/">
                  <img
                    alt="microsoft"
                    src={require("../images/microsoft.png")}
                  />
                  Login with Microsoft
                </a>
              )}
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
