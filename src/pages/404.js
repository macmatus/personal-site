import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="page404">
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/" className="button">
        Back to home
      </Link>
    </section>
  </Layout>
)

export default NotFoundPage
