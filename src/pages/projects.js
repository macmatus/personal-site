import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import * as homeStyles from "../styles/home.module.scss"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <section className={homeStyles.heroLanding}>
      <div>
        <h1>Projects</h1>
        <p>Things I've been working on recently</p>
        <Link to="/" className="button">
          View more
        </Link>
      </div>
    </section>
  </Layout>
)

export default Projects
