import {
 facebook,
 instagram,
 logo,
 pinterest,
 twitter,
 youtube,
} from "../../assets";
import Button from "../Button";
import "./footer.css";

function Footer() {
 return (
  <footer>
   <div className="footer__wrapper">
    <div className="col__one .footer__menu">
     <img src={logo} alt="logo" />
     <ul>
      <li>
       <img src={facebook} alt="facebook-icon" />
      </li>
      <li>
       <img src={youtube} alt="youtube-icon" />
      </li>
      <li>
       <img src={twitter} alt="twitter-icon" />
      </li>
      <li>
       <img src={pinterest} alt="pinterest-icon" />
      </li>
      <li>
       <img src={instagram} alt="instagram-icon" />
      </li>
     </ul>
    </div>

    <div className="col__two .footer__menu">
     <ul>
      <li>About Us</li>
      <li>Contact</li>
      <li>Blog</li>
     </ul>
    </div>
    <div className="col__three .footer__menu">
     <ul>
      <li>Careers</li>
      <li>Support</li>
      <li>Privacy Policy</li>
     </ul>
    </div>
    <div className="col__four .footer__menu">
     <div className="btn-right">
      {" "}
      <Button text="Request Invite" />
     </div>

     <p>&copy; Easybank. All Rights Reserved</p>
    </div>
   </div>
  </footer>
 );
}

export default Footer;
