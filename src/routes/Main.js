import React, { Component } from 'react';
import Intro from './Intro.js'
import '../App.css';
//import { TweenMax } from 'gsap';

class Main extends Component {
    

    render() {
       let randomId = Math.floor((Math.random() * 5));
       return (
         <div>
           <div id="container">
             <Intro />
           </div>
         </div>
       );
   }
}

export default Main;
