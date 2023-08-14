import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            <LinkedInIcon/>
            <GitHubIcon/>
        </div>
        <p> &copy; 2023 shivamdev.com </p>
    </div>
  )
}

export default Footer