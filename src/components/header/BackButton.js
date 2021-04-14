import { Link } from "gatsby"
import React from "react"

const BackButton = link => {
  return (
    <Link to={link.link} className="back-button">
      Go Back
    </Link>
  )
}

export default BackButton
