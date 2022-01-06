import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <FacebookIcon /> <InstagramIcon />
                <p> &copy; 2014-2022 ManilaBayExpress.com</p>
            </div>
        </div>
    )
}

export default Footer
