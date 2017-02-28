import React, { Component } from 'react';
import { unmountComponentAtNode } from 'react-dom';
import '../App.css';
import './Intro.css';
import { TweenMax, Power2 } from 'gsap';
import quotes from './quotes/quotes.json';

const getRandomNumber = () => {
    console.log("random number called");
    return Math.floor((Math.random() * 5 + 0.000000001))
}

const getQuotation = (i, props, quotes) => {
  let rand = getRandomNumber();
  return quotes.quotations.filter(function(i, props) {
    return i.id === rand;
  })[0]
}

const dismount = () => {
  unmountComponentAtNode(document.getElementById('container'));
}


class Intro extends Component {

//gotta make it responsive rip
  componentDidMount() {
      TweenMax.fromTo('#jazzbox', 1.4, { opacity: 0.0, x: 500, y: 400, ease: Power2.easeInOut }, { opacity: 1, y: 300, delay: 0.8 })
      TweenMax.fromTo('#quote-text', 1.6, { opacity: 0, x: 500, y: 430}, { opacity: 1, delay: 2.4 })
      TweenMax.fromTo('#bb1', 2, { opacity: 1 }, { opacity: 0, delay: 8 }) //fade out
      // let object_by_id = $filter('filter')(foo.results, {id: 2})[0];
      // console.log(object_by_id);
      setTimeout(dismount(), 9000)
  }



  render (props) {
    console.log('I was triggered during render')
    // let object_by_id = quotes.quotations.filter(function(i, props) { //throw this in a function
    //   return i.id === 1;
    // })
    let quote;
    let quotation = getQuotation(quote, props, quotes)
    console.log(quotation);
    quote = quotation['quote'];
    console.log(quote);
    let author = quotation['author'];
    console.log(author);

    return(
      <div className="black-box" id="bb1">
        <div className="intro-text" id="jazzbox">
          <h1>j a z z b o x </h1>
        </div>
        <div className="intro-text" id="quote-text">
          <h3>
            "{ quote }"
            - { author }
          </h3>
        </div>
      </div>
    )
  }

}

export default Intro;
