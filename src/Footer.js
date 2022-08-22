import logo from './images/logo-light.svg';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import twitter from './images/icon-twitter.svg';
import youtube from './images/icon-youtube.svg';
import pinterest from './images/icon-pinterest.svg';

export default function Footer(){
return(
    <footer>
       <div> 
        <img src={logo} alt="logo" className='footer-logo'/>
        <div className='social-icons'>
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={instagram} alt="instagram" />
        </div>
        </div>
        <ul className='footer-links'>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Blog</a></li>
                        
        </ul>
        <ul className='footer-links'>
            <li><a href='#'>Careers</a></li>
            <li><a href='#'>Support</a></li>
            <li><a href='#'>Privacy Policy</a></li>
        </ul>

       <div className='footer-btns'> 
            <button className='body-btn'>
                Request Invite
             </button>
              <p >  
                  &copy;Easybank. All Rights Reserved
             </p>
      </div>
    </footer>
)
}