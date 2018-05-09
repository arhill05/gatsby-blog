import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import './bio.scss';

import profilePic from './profile_small.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
      className=""
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Andrew Hill`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Andrew Hill</strong> who lives in Louisville, KY
          and has an irrational love of mechanical keyboards.
          <div className="contact-links">
            <a href="https://github.com/arhill05">GitHub</a>
            <a href="mailto:me@andrewhill.io">Email</a>
            <a href="https://twitter.com/andrewhilltwit">Twitter</a>
          </div>
        </p>
      </div>
    )
  }
}

export default Bio
