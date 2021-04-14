import React, { useState } from "react"
import { Link } from "gatsby"
import Navigation from "./navigation"
import { FiMenu } from "react-icons/fi"
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
      }
      prevScrollpos = currentScrollPos
    }
  }

  return (
    <header className={`${headerStyles.header} fadein`} id="header">
      <div>
        <h1 className={headerStyles.logo}>
          <Link to="/" className="button">
            M
          </Link>
        </h1>
      </div>
      <FiMenu size={28} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  )
}
export default Header
