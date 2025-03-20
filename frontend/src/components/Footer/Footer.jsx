import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" style={{ width: "120px", height: "auto" }} />
            <p>Delicious meals, delivered to your doorstep! At Bite, we bring you a wide variety of cuisines from your favorite restaurants, ensuring fresh and fast deliveries every time. Whether you're craving a quick bite or a gourmet feast, we've got you covered. Enjoy seamless ordering, secure payments, and real-time tracking for a hassle-free experience. Your satisfaction is our priority, and we’re here to serve you 24/7. Order now and savor the taste of convenience!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-934-889-4788</li>
                <li>contact@bite.com</li>
            </ul>
        </div>
      </div>
      <hr/>
        <p className="footer-copyright">Copyright 2025 © Bite.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
