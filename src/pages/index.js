import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "./index.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query PostsPage {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
  `)

  const posts = data.posts.nodes

  return (
    <Layout>
      <Seo title="Home" />
      <div className="posts">
        {posts.map(post => (
          <div>
            <Link to={"/posts/" + post.frontmatter.slug} key={post.id}>
              <Img fluid={post.frontmatter.thumb.childImageSharp.fluid} />
            </Link>
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.stack}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}
export default IndexPage
