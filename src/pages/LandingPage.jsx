import React from "react";
import logo from "./../assets/Images/LogoL.png";
import BottomNav from "./../components/BotNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsappSquare,
  faInstagramSquare,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons';

const openExternalLink = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

export default function LandingPage() {
  return (
    <>
    <div className="landing-container">
      <img src={logo} alt="Logo" className="landing-logo" />
      <h1 className="landing-motto">
        "From Product to Profit, We Power the Journey"
      </h1>
      <div className="reviews-section">
        <div className="review-card">
          <p>"Hands down the best perantara for buying or selling. This company made the entire process seamless. They understood exactly what I needed as a seller and helped me find the right buyer quickly. A trustworthy intermediary that really goes the extra mile!."</p>
          <div className="review-person"><h4>Jane Smith</h4></div>
        </div>
        <div className="review-card">
          <p>"Highly recommend this company if you’re looking to buy or sell anything! They truly serve as a reliable and efficient perantara. I was able to sell my product quickly thanks to their expertise and guidance. They know the market and make everything easy. Five stars from me."</p>
          <div className="review-person"><h4>Jack Brown</h4></div>
        </div>
        <div className="review-card">
          <p>"I’m so impressed with how smooth the transaction was! This company is an outstanding perantara, ensuring everything is handled professionally. Whether you're selling or buying, you can count on them to make the process effortless and stress-free. A great partner in the market!"</p>
          <div className="review-person"><h4>Leo Drake</h4></div>
        </div>
        <div className="review-card">
          <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum tenetur excepturi architecto ullam, magnam adipisci doloremque ratione perspiciatis, alias quis fugit culpa suscipit ea. Velit obcaecati dignissimos cupiditate ab ea."</p>
          <div className="review-person"><h4>John Doe</h4></div>
        </div>
      </div>
      <div className="contact-us">
        <div onClick={() => openExternalLink('https://wa.me/6282113822222')} style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faWhatsappSquare} size="2x" />
        </div>
        <div onClick={() => openExternalLink('https://www.instagram.com/birdzbirdzs/')} style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faInstagramSquare} size="2x" />
        </div>
        <div onClick={() => openExternalLink('https://facebook.com')} style={{ cursor: 'pointer' }}>
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        </div>
    </div>
    </div>
    <div className="dashboard-container">
      <BottomNav/>
    </div>
    </>
  );
}