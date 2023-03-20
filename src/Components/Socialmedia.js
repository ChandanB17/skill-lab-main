import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function Socialmedia() {
  return (
    <div>
<h1 className='socialfoll'>Follow us on</h1>
<div class="social-container">
      <a href="https://www.youtube.com"
        className="youtube social" target="_blank">
        <FontAwesomeIcon icon={faYoutube} size="4x" />
      </a>
      <a href="https://www.facebook.com"
        className="facebook social" target="_blank">
        <FontAwesomeIcon icon={faFacebook} size="4x" />
      </a>
      <a href="https://www.twitter.com" className="twitter social" target="_blank">
        <FontAwesomeIcon icon={faTwitter} size="4x" />
      </a>
      <a href="https://www.instagram.com"
        className="instagram social" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="4x" />
      </a>
      <a href="https://www.Linkedin.com"
        className="Linkedin social" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="4x" />
      </a>
</div>

    </div>
  )
}
