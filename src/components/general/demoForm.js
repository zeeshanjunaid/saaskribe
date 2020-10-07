import React, { Component } from "react"
import { Alert, Button, Form, Row } from "react-bootstrap"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class DemoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      success: false,
      error: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "Request Demo", ...this.state }),
    })
      .then(() =>
        this.setState({
          success: true,
          name: "",
          email: "",
          phone: "",
          message: "",
          error: false,
        })
      )
      .catch(error =>
        this.setState({
          error: true,
          name: "",
          email: "",
          phone: "",
          message: "",
          success: false,
        })
      )

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, phone, message, error, success } = this.state
    const {
      nameLabel,
      namePlaceholder,
      emailLabel,
      emailPlaceholder,
      phoneLabel,
      phonePlaceholder,
      messageLabel,
      buttonText,
    } = this.props
    return (
      <Form
        name="Request Demo"
        method="POST"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="Request Demo" />
        <Form.Group controlId="fullName">
          <Form.Label>{nameLabel}</Form.Label>
          <Form.Control
            type="text"
            placeholder={namePlaceholder}
            onChange={this.handleChange}
            value={name}
            name="name"
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>{emailLabel}</Form.Label>
          <Form.Control
            type="email"
            placeholder={emailPlaceholder}
            onChange={this.handleChange}
            value={email}
            name="email"
            required
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>{phoneLabel}</Form.Label>
          <Form.Control
            type="text"
            placeholder={phonePlaceholder}
            onChange={this.handleChange}
            value={phone}
            name="phone"
            required
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>{messageLabel}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={this.handleChange}
            value={message}
            name="message"
            required
          />
        </Form.Group>
        <Button className="gradient-btn-1" type="submit" block>
          {buttonText}
        </Button>
        <div className="demo_alerts">
          {success && (
            <Alert
              variant="success"
              className="mt-10"
              dismissible
              onClose={() =>
                this.setState({
                  success: false,
                })
              }
            >
              Thanks! The form has been submitted successfully.
            </Alert>
          )}
          {error && (
            <Alert
              onClose={() =>
                this.setState({
                  error: false,
                })
              }
              variant="danger"
              className="mt-10"
              dismissible
            >
              Something went wrong, please refresh the page and try again.
            </Alert>
          )}
        </div>
      </Form>
    )
  }
}
export default DemoForm
