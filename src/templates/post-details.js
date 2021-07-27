import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "./post-details.css"

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className="details">
        <div className="styles.featured">
          <Img fluid={featuredImg.childImageSharp.fluid} />
        </div>
        <div className="body-content">
        <h2>{title}</h2>
        <h3  className="stack">{stack}</h3>
        <div
          className="html-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        </div>
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const query = graphql`
  query PostDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
