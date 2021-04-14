import { Link } from "gatsby"
import React from "react"
import { FaArrowLeft } from "react-icons/fa"

const BackButton = link => {
  return (
    <Link to={link.link} className="back-button">
      <FaArrowLeft />
      Go Back
    </Link>
  )
}

export default BackButton
