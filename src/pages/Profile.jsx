import {React}  from 'react';
import {useMoralis} from 'react-moralis'
import console from 'console';
import { Link } from 'react-router-dom';
import {Input, Button, ConnectButton} from 'web3uikit'

//CSS
import Styled from 'styled-components';

//Components
import HorizNavbar from '../components/Horiznavbar';

    const Profile = () => {
        const { authenticate, isAuthenticated, user } = useMoralis();
      
        if (!isAuthenticated) {
          return (
            <div>
            
            </div>
          );
        }
    
      
return (
<StyledProfile>
    <div>
        <HorizNavbar />
     <div className="PersonalInfo">
        <div className="Firstname">
            <h2>Firstname</h2>
            <h3>{user.get("firstname")}</h3>
        </div>
        <div className="Lastname">
            <h2>Lastname</h2>
            <h3>{user.get("lastname")}</h3>
        </div>
        <div className="Email">
            <h2>Email</h2>
            <h3>{user.get("email")}</h3>
        </div>
        <div className="Username">
            <h2>Username</h2>
            <h3>{user.get("username")}</h3>
            <div className='EditProfile'> <Button
            id="test-button-primary"
                onClick={function noRefCheck(){}}
                    text="Edit Profile"
                    theme="translucent"
                    size="xxl"
                    type="button"/> 
            </div>
        </div>    
        <div className="Password">
            <h2>Password</h2>
            <Button
                onClick={function noRefCheck(){}}
                    text="Change Password"
                    theme="translucent"
                    size="large" />
        </div>
        <div>
        <button onClick={() => authenticate()}>Authenticate</button>
          </div>
         
    </div>
    </div>
</StyledProfile>
    )
}



export default Profile;

const StyledProfile = Styled.div`

height: 100vh;
width: 100%;  
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(52,0,0,1) 12%, rgba(115,0,0,1) 62%);


.PersonalInfo {
margin-left: 25rem;
text-align: center;
display: inline-block;
margin-top: 3rem;
}  

.Firstname {
    padding: 2vh;
}

.Lastname {
    padding: 2vh;
}

.Email {
    padding: 2vh;
}

.Username {
    padding: 2vh;
}

.EditProfile {
    margin-left: 2rem;
}
.Password {
    padding: 2vh;
}

.h2 {
    color: white;
}

.Walletconnect {
    margin-top: 3rem;
    margin-left: 1.4rem;
}
`
