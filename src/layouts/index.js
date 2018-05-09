import Link from 'gatsby-link';
import React from 'react';
import { Container } from 'react-responsive-grid';
import Bio from '../components/Bio';
import { rhythm, scale } from '../utils/typography';
import './base.scss';


class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          className="site-header"
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Andrew Hill | Developer
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          className="site-header"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Andrew Hill | Developer
          </Link>
        </h3>
      )
    }
    return (
      <Container
        className='site-container'
        style={{
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          margin: 'auto'
        }}
      >
        {header}
        <Bio />
        {children()}
      </Container>
    )
  }
}

export default Template
