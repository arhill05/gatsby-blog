import Link from 'gatsby-link';
import React from 'react';
import { Container } from 'react-responsive-grid';
import Bio from '../components/Bio';
import { rhythm, scale } from '../utils/typography';
import '../styles/base.scss';

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
        <h1 className="site-header">
          <Link to={'/'}>
            Andrew Hill | Developer
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="site-header">
          <Link to={'/'}>
            Andrew Hill | Developer
          </Link>
        </h3>
      )
    }
    return (
      <Container style={{maxWidth: '100%'}} className='site-container'>
        {header}
        <Bio />
        {children()}
      </Container>
    )
  }
}

export default Template
