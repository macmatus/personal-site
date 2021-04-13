import React from "react"
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

import * as socialsStyles from "./socials.module.scss"

const Socials = () => {
  return (
    <div className={socialsStyles.container}>
      <div className={`${socialsStyles.icons} socials-anim`}>
        <a
          href="https://github.com/macmatus"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/mac-m"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://twitter.com/mac_matus"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/macdesignuk/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaInstagram />
        </a>
      </div>
      <div className={`${socialsStyles.email} socials-anim`}>
        <a href="mailto:maciekmatusiak@hotmail.com">
          maciekmatusiak@hotmail.com
        </a>
      </div>
    </div>
  )
}

export default Socials
