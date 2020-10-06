import React from "react"
import RichTextToReact from "rich-text-to-react"
import { Button } from "react-bootstrap"

const PricingPackage = ({
  title,
  price,
  priceSub,
  buttonText,
  description,
}) => {
  return (
    <div className="package">
      <div className="package__header">
        <h2>{title}</h2>
        <h3>{`$${price}`}</h3>
        <p>{priceSub}</p>
      </div>
      <div className="package__body">
        <RichTextToReact document={description} />
      </div>
      <div className="package__footer">
        <Button className="gradient-btn-1" block>
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

export default PricingPackage
