import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Navigation from "./navigation"
import * as headerStyles from "./header.module.scss"

const isBrowser = typeof window !== "undefined"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  if (isBrowser) {
    let prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").classList.remove(headerStyles.active)
      } else {
        document.getElementById("header").classList.add(headerStyles.active)
        document.getElementById("header").classList.add("blur")
        setTimeout(
          () =>
            document
              .getElementById("header")
              .classList.add(headerStyles.scrolled),
          150
        )
      }
      if (currentScrollPos === 0) {
        document
          .getElementById("header")
          .classList.remove(headerStyles.scrolled)
        document.getElementById("header").classList.remove("blur")
      }
      prevScrollpos = currentScrollPos
    }
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.parentElement.style.overflowY = "hidden"
      document.getElementById("header").style.transform = "translateY(0)"
      document.getElementById("nav-icon").classList.add(headerStyles.active)
    } else {
      document.body.parentElement.style.overflowY = ""
      document.getElementById("header").style.transform = ""
      document.getElementById("nav-icon").classList.remove(headerStyles.active)
    }
  }, [isMenuOpen])

  return (
    <header className={`${headerStyles.header} fadein`} id="header">
      <div>
        <h1 className={headerStyles.logo}>
          <Link to="/" className="button">
            M
          </Link>
        </h1>
      </div>
      <button
        id="nav-icon"
        className={headerStyles.menuWrapper}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={headerStyles.menuIcon}></span>
      </button>
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  )
}
export default Header
