import React, { useEffect } from "react"
import Layout from "../components/layout/layout"
import Projects from "../components/projects/projects"
import Snippets from "../components/snippets/snippets"
import SEO from "../components/seo"

import * as homeStyles from "../styles/home.module.scss"
import About from "../components/about/About"

import pageTransitionsFunction from "../scripts/pageTransitions"
import Contact from "../components/contact/Contact"
import ContactBtn from "../components/contact/ContactBtn"

const IndexPage = () => {
  useEffect(() => {
    pageTransitionsFunction()
  }, [])
  return (
    <Layout>
      <SEO title="Maciej Matusiak" />
      <section className={`${homeStyles.heroLanding}`}>
        <div>
          <span className="animate">I'm a</span>
          <h1 className="animate">Web Developer & Creative Thinker</h1>
          <p className="animate">
            My name is Mac, based in Birmingham I specialize in building
            accessible, well performing and beautiful web applications.
            Currently, I'm a front-end developer at{" "}
            <a className="link" href="https://www.topcashback.co.uk">
              TopCashback
            </a>{" "}
            focusing on mobile-first development.{" "}
          </p>
          <ContactBtn />
        </div>
      </section>
      <About />
      <Projects />
      <Snippets />
      <Contact />
    </Layout>
  )
}

export default IndexPage
