import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Homescreen from './components/Screens/Homescreen';
import Bookingscreen from './components/Screens/Bookingscreen';
import Registerscreen from './components/Screens/Registerscreen';
import Loginscreen from './components/Screens/Loginscreen';
import Profilescreen from './components/Screens/Profilescreen';
import Adminscreen from './components/Screens/Adminscreen';
import Landingscreen from './components/Screens/Landingscreen';


function App() {
  return (
    <div className="App">
     <Navbar />
     <BrowserRouter>
     <Route exact path='/home' component={Homescreen} />
     <Route exact path='/book/:roomid/:fromdate/:todate' component={Bookingscreen} />
     <Route exact path='/register' component={Registerscreen} />
     <Route exact path='/login' component={Loginscreen} />
     <Route exact path='/profile' component={Profilescreen} />
     <Route exact path='/Admin' component={Adminscreen} />
     <Route exact path='/' component={Landingscreen} />
     
     </BrowserRouter>
     
    </div>
  );
}

export default App;
