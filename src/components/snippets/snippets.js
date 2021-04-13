import React from "react"
import Heading from "../layout/Heading"
import snippetsData from "../../data/snippets-data"

import * as snippetsStyles from "./snippets.module.scss"
import { FaExternalLinkAlt, FaRegArrowAltCircleRight } from "react-icons/fa"

const Snippets = () => {
  return (
    <section className={`${snippetsStyles.snippets} snippets-anim`}>
      <Heading title="Recent Snippets" link="/" name="snippets" />
      <div className={snippetsStyles.snippetwrap}>
        {snippetsData.map(snippet => {
          return (
            <div
              key={snippet.id}
              className={`${snippetsStyles.snippet} snippet-anim`}
            >
              <header>
                <h3>{snippet.title}</h3>
                {snippet.postLink ? (
                  <a href="#/">
                    <FaRegArrowAltCircleRight />
                  </a>
                ) : null}
                {snippet.link ? (
                  <a href="#/">
                    <FaExternalLinkAlt />
                  </a>
                ) : null}
              </header>
              <p>{snippet.description}</p>
              <footer>
                <p>{snippet.date}</p>
                <span>
                  {snippet.tech.map((tech, index) => (
                    <p key={index}>{tech}</p>
                  ))}
                </span>
              </footer>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Snippets
