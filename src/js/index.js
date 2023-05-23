//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//render your react application

function SimpleCounter(props){
    return (<body><div className= "superCounter">
        <div className= "iconCounter">
            <i className="far fa-clock"></i>"
        </div>
        <div className="five">{props.slotFive % 10}</div>
        <div className="four">{props.slotFour % 10}</div>
        <div className="three">{props.slotThree % 10}</div>
        <div className="two">{props.slotTwo % 10}</div>
        <div className="one">{props.slotOne % 10}</div>
    </div></body>);
}

SimpleCounter.PropTypes = { 
    slotFive: PropTypes.number,
    slotFour: PropTypes.number,
    slotThree: PropTypes.number,
    slotTwo: PropTypes.number,
    slotOne: PropTypes.number,
};

let counter=0;
    setInterval(function(){
        const five = Math.floor(counter/10000);
        const four = Math.floor(counter/1000);
        const three = Math.floor(counter/100);
        const two = Math.floor (counter/10);
        const one = Math.floor (counter/1);
        counter++;
ReactDOM.render(
    <SimpleCounter slotFive={five} slotFour={four} slotThree={three} slotTwo={two} slotOne={one}/>,
    document.querySelector ('#app')
);
    },1000);
