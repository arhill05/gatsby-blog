import Link from 'gatsby-link';
import React from 'react';
import { Container } from 'react-responsive-grid';
import Bio from '../components/Bio';
import { rhythm, scale } from '../utils/typography';
import '../styles/base.scss';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

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
        <header className="site-header">
          <h1>
            <Link to={'/'}>
              Andrew Hill
            </Link>
          </h1>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </header>
      )
    } else {
      header = (
        <header className="site-header">
          <h3>
            <Link to={'/'}>
              Andrew Hill
          </Link>
          </h3>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </header>
      )
    }
    return (
      <div className='site-container'>
        {header}
        <Bio />
        {children()}
      </div>
    )
  }
}

export default Template
