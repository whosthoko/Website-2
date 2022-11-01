import {React}  from 'react';
import {useMoralis} from 'react-moralis'
import console from 'console';
import { Link } from 'react-router-dom';
import {Input, Button, ConnectButton} from 'web3uikit'

//CSS
import styled from 'styled-components';

//Components
import HorizNavbar from '../components/Horiznavbar';

function Wardrobe () {

    return (

    <Styledwardrobe >
    <HorizNavbar />
    </Styledwardrobe >
    );
}

export default Wardrobe;
const Styledwardrobe = styled.div`
height: 100vh;
width: 100%;  
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(52,0,0,1) 12%, rgba(115,0,0,1) 62%);
`