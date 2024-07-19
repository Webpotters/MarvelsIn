import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/footer.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

const footer = () => {
  return (
    <footer className='footer'>

        <container className='title'>
            <heading>© Marvels In</heading>
        </container>

        <icon className='icon'>
            <a href='/'><FontAwesomeIcon icon={faFacebook}/></a>
            <a href='https://www.instagram.com/marvelsin_community?igsh=dXUwd3c4dXNjcXZ0'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href='/'><FontAwesomeIcon icon={faTwitter} /></a>
            <a href='https://www.linkedin.com/in/marvels-in-6b8770319'><FontAwesomeIcon icon={faLinkedin} /></a>
        </icon>

        <container  className='terms'>
            <c>Privacy Policy</c>
            <c>Terms of Use</c>
        </container>
    </footer>
  )
}

export default footer