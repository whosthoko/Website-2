import {React}  from 'react';
import {useMoralis} from 'react-moralis'
import console from 'console';
import { Link, Outlet } from 'react-router-dom';
import {Input, Button, ConnectButton} from 'web3uikit'

//CSS
import Styled from 'styled-components';

function HorizNavbar () {

return (
<StyledHorizNavbar>
 <ul className="navbarhome">
 <li> <Link to= 'Profile' >Profile</Link> </li>
 <li> <Link to= 'Wardrobe' >Wardrobe</Link> </li>
 <li><Link to= 'Purchases' >Purchases</Link></li>
<div className="LogOut">
 <Button
     color="green"
     onClick={function noRefCheck(){}}
     size="large"
     text="Log Out"
     theme="translucent" />
</div>
</ul>
</StyledHorizNavbar>

    );
}

export default HorizNavbar;
const StyledHorizNavbar = Styled.div`
.navbarhome {
    
    flex: 1;
    text-align: left;
    display: flex
    position: relative;
    float: left;
    padding: 2rem;
    margin-bottom: 10rem
    width: 200px;
    height: 750px;
    border: green
  }
  
  .navbarhome li {
    list-style: none;
    display: block;
    padding-bottom: 0px;
    position: relative;
    margin: 4rem;
  }
  
  a {
    color: white;
    text-decoration: none;
    font-size: 2.2rem;
  }
  
  .LogOut {
      
      margin-top: 20rem;
      margin-left: 5rem;
  }
  `

  