import React from "react";
import dhImg from "../assets/images/DH.png";
import icoFace from "../assets/images/ico-facebook.png";
import icoInstagram from "../assets/images/ico-instagram.png";
import icoWpp from "../assets/images/ico-whatsapp.png";
import icoTiktok from "../assets/images/ico-tiktok.png";

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <img src={dhImg} alt="DH-logo" />
      <a href="https://facebook.com">
        <img src={icoFace} alt="facebook" />
      </a>
      <a href="https://instagram.com">
        <img src={icoInstagram} alt="instagram" />
      </a>
      <a href="https://web.whatsapp.com/">
        <img src={icoWpp} alt="whatsapp" />
      </a>
      <a href="https://tiktok.com">
        <img src={icoTiktok} alt="tiktok" />
      </a>
    </footer>
  );
};

export default Footer;
