import {React}  from 'react';
import {useMoralis} from 'react-moralis'
import console from 'console';
import { Link } from 'react-router-dom';
import {Input, Button, ConnectButton} from 'web3uikit'

//CSS
import Styled from 'styled-components';

//Components
import UncontrolledExample from '../components/imageslider';

//Multimedia
import Headerimage from '../assets/multimedia/Headerimage.jpg';
import Headerimage2 from '../assets/multimedia/beach.jpeg';

import ChampagneTshirt from'../assets/multimedia/Clothes/Champagne T-Shirt.png';
import GradientTshirt from'../assets/multimedia/Clothes/Gradient Logo T-Shirt.png';
import CherubTshirt from'../assets/multimedia/Clothes/Cherub T-Shirt.png';
import GreeceTshirt from'../assets/multimedia/Clothes/Greece T-Shirt.png';
import BoatTshirt from '../assets/multimedia/Clothes/Boat T-Shirt.png';
import ParamountTshirt from '../assets/multimedia/Clothes/Paramount T-Shirt.png';
import LipstickTshirt from '../assets/multimedia/Clothes/1950 T-Shirt.png';




function Tshirts () {
    return (
<StyledHome>
    <div>
         {/* Head Images*/}
        <div className = "headimages">
            <div className = "pic" >
            <img className = "beach" src= {Headerimage2} alt="" />
            </div>
        </div>
         {/* Page Name*/}
        <div className = "pagename">
            <h2 className = "name" >T-Shirts</h2>
        </div>
         {/* Products*/}
        <div className='productgrid'>
            <div className="col">
                <h3 className='productname'>SNST BLVD "Champagne" T-Shirt</h3>
                <br />
                <h4>$200</h4>
                <br />
               <UncontrolledExample />
            </div>
            <div className="col">
                <h3 className='productname'>SNST BLVD "Cherub" T-Shirt </h3>
                <br />
                <h4>$200</h4>
                <br />
                <img src={CherubTshirt} alt="" />
            </div>
            <div className="col">
                <h3 className='productname'>SNST BLVD "Greece" T-Shirt</h3>
                <br />
                <h4>$200</h4>
                <br />
                <img src={GreeceTshirt} alt="" />
            </div>
            <div className="col">
                <h3 className='productname'>SNST BLVD "1950" T-Shirt</h3>
                <br />
                <h4>$200</h4>
                <br />
                <img src={LipstickTshirt} alt="" />
            </div>
            <div className="col">
                <h3 className='productname'>SNST BLVD Gradient Logo T-Shirt</h3>
                <br />
                <h4>$200</h4>
                <br />
                <img src={GradientTshirt} alt="" />
            </div>
            <div className="col">
                <h3 className='productname'>SNST BLVD Paramount T-Shirt</h3>
                <br />
                <h4>$200</h4>
                <br />
                <img src={ParamountTshirt} alt="" />
            </div>
            <div className="col">
                <h3 className='productname'>SNST BLVD "Boat" T-Shirt</h3>
                <br />
                <h4>$200</h4>
                <br />
                <img src={BoatTshirt} alt="" />
            </div>
        </div>
    </div>
</StyledHome>
    );
}




const StyledHome = Styled.div`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

height: 100%;
width: 100%;  
background: linear-gradient(180deg, rgba(110,0,190,1) 0%, rgba(255,151,0,1) 95%);

.beach{
    width: 100%;
    height: 300px;
    background-size: 100% 100%;
}

.pagename {
    padding: 20px; 
    border: 8px red;
    margin: 10;
    
}

.name {
    margin: 20px;
    color: white;
    text-align: center;
}

.productgrid {
    display: grid;
    grid-gap : 0px;
    padding: 0px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }

    .col {
        border:1.5px solid white;
        color: white;
        text-align: center;
        background: transparent;
        padding: 10px;

        .productname {
            font-size: 20px;
            padding: 0px;
        }

        .img {
           
            
        }
    }
}

`;
export default Tshirts ;