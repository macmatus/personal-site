import { Link } from "gatsby"
import React from "react"

import * as headingStyles from "./heading.module.scss"

const Heading = ({ title, link, name }) => {
  return (
    <div className={headingStyles.heading} id={name}>
      <h2>{title}</h2>
      {link ? <Link to={link}>View all</Link> : null}
    </div>
  )
}

export default Heading
