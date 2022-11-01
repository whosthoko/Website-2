import {Routes, Route,} from 'react-router-dom';
import './App.css';
import {React,}  from 'react';

//Multimedia
import Logo from '../src/assets/multimedia/Logo.png'

//Components

//Pages
import Profile from './pages/Profile'
import Login from './pages/Login';
import Signup from './pages/Signup'
import Wardrobe from './pages/Wardrobe';
import Tshirts from './pages/Tshirts';


function App() {
  return (
    <div className="App">
      <Tshirts />
    </div>
  );
}

export default App;