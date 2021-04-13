import { Link } from "gatsby"
import React from "react"
import * as navigationStyles from "./navigation.module.scss"

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuItems = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Snippets",
      link: "#snippets",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ]

  return (
    <nav
      className={
        isMenuOpen
          ? `${navigationStyles.nav} ${navigationStyles.active}`
          : navigationStyles.nav
      }
      id="nav"
    >
      <ul>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.link} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          )
        })}
        <li>
          <a
            href="#/"
            rel="noopener noreferrer"
            target="_blank"
            className="button"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
