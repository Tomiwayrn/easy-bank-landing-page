import logo from './images/logo.svg';
import hamburger from './images/icon-hamburger.svg';
import close from './images/icon-close.svg'
import React from 'react';

export default function Navbar(){

        const [nav, shownav] = React.useState(false)
         function handleClick (){
            shownav(prevState => !prevState)
        }

       let show = nav? 'flex' : '';

       if(nav){
        document.body.style.overflow = 'hidden'
       }

       else {
        document.body.style.overflow = ''
       }
        

            return(
                <div>
                    <nav>
                        <img className ="navlogo" src={logo} alt='logo' />
                         <div className='navlinks' style={{display: show}}>
                            <ul>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>About</a></li>
                                <li><a href='#'>Contact</a></li>
                                <li><a href='#'>Blog</a></li>
                                <li><a href='#'>Careers</a></li>
                            </ul>
                        </div>
                        { !nav && <div >
                             <button className='nav-btn' onClick={handleClick}>
                                <img src={hamburger} alt="hamburger-icon"/>
                                </button>
                        </div>}
                        { nav && <div >
                             <button className='nav-btn' onClick={handleClick}>
                                <img src={close} alt="close-icon" />
                                </button>
                        </div>}
                        <button className='body-btn'>Request Invite</button>
                    </nav>
                </div>
            )
}