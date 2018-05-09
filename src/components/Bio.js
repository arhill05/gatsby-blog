import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import '../styles/bio.scss';

import profilePic from './profile.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div className="bio">
        <p>
          Written by <strong>Andrew Hill</strong> who lives in Louisville, KY
          and has an irrational love of mechanical keyboards.
          <div className="contact-links">
            <a href="https://github.com/arhill05">GitHub</a>
            <a href="mailto:me@andrewhill.io">Email</a>
            <a href="https://twitter.com/andrewhilltwit">Twitter</a>
          </div>
        </p>
        <img src={profilePic} alt={`Andrew Hill`} />
      </div>
    )
  }
}

export default Bio
