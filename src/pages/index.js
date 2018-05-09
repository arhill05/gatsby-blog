import Link from 'gatsby-link'
import get from 'lodash/get'
import React from 'react'
import { DuotoneImage } from 'react-duotone'
import Helmet from 'react-helmet'
import color from 'tinycolor2'
import colors from '../utils/colors'
import { rhythm } from '../utils/typography'
import '../styles/index.scss'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div className="posts-container">
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          let img = get(node, 'frontmatter.image.publicURL')
          const id = node.fields.slug.replace(/\/+/g, '')

          return (
            <Link to={node.fields.slug}
              style={{
                backgroundImage: `url(${img})`,
              }}
              className="post"
              key={node.fields.slug}
              id={`post-${id}`}
            >
              <div className="post-excerpt">
                <h2
                >
                  {title}
                </h2>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`
