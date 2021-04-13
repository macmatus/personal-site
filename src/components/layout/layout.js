import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Header from "../header/header"
import Socials from "../socials/Socials"

import "./layout.scss"

const Layout = ({ children }) => {
  useEffect(() => {
    document.querySelector(".site-wrapper").style.opacity = "1"
    document.querySelector(".site-wrapper").style.visibility = "visible"
  }, [])
  return (
    <div className="site-wrapper">
      <Header />
      <main className="site-content ">{children}</main>
      <Socials />
      <footer className="footer">
        Designed & Built by Mac Matusiak
        <br />© {new Date().getFullYear()}
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
