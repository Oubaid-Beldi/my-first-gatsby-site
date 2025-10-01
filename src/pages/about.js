import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/Seo"

const AboutPage = () => {
  return (
<Layout pageTitle="About me">
   <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
</Layout>
  )
}

export const Head = () => {
  return (
 
<Seo title="About Me"/>
 
  )
}

export default AboutPage
