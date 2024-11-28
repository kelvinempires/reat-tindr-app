import whiteLogo from '../images/cK.png'
import secondLogo from '../images/white.png'

const Nav = ({minimal, authToken}) => {

  return (
  <nav>
    <div className="logo-container">
      <img className="logo" src={ minimal ? secondLogo : whiteLogo} alt='logo'/>
    </div>
 
   {!authToken && !minimal && <button 
   className='nav-button'>Log in</button>}

  </nav>
);
};
export default Nav;
