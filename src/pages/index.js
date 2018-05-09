import Link from 'gatsby-link'
import get from 'lodash/get'
import React from 'react'
import { DuotoneImage } from 'react-duotone'
import Helmet from 'react-helmet'
import color from 'tinycolor2'
import colors from '../utils/colors'
import { rhythm } from '../utils/typography'
import './index.scss'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div className='posts-container'>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          const img = get(node, 'frontmatter.image.publicURL')
          const id = node.fields.slug.replace(/\/+/g, '')

          return (
            <div
              style={{
                backgroundColor: color(colors.backgroundColor).lighten(6),
                margin: rhythm(1),
                boxShadow: '0 2px 4px 2px rgba(0,0,0,0.2)',
                position: 'relative',
                top: 0,
                left: 0,
              }}
              className="post"
              key={node.fields.slug}
              id={`post-${id}`}
            >
              <div className="image-wrapper">
                <DuotoneImage
                  className="post-image"
                  src={img}
                  primaryColor={colors.duotonePrimary}
                  secondaryColor={colors.duotoneSecondary}
                  style={{
                    filter: 'drop-shadow(0px 4px 2px 4px rgba(0,0,0,0.2))',
                  }}
                />
              </div>
              <div
                className="post-excerpt"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  paddingLeft: rhythm(1),
                  paddingRight: rhythm(1),
                }}
              >
                <h2
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h2>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

const getPosition = id => {
  var img = document.querySelector(`#post-${id} img`)
  const bottom = img.scrollHeight
  const top = img.scrollTop
  console.log(top)
  console.log(bottom)
  return 0
}
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
