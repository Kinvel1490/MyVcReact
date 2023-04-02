import React from "react";
import Greetings from "./greet"
// import About from "./about";
import Cont from "./contacts";
import Price from "./price";

function Body (props) {
    return (
        <div className="content-wrapper">
            <Greetings anc= {props.attrs[0][0]}/>
            <Price anc= {props.attrs[1][0]}/>
            <Cont anc= {props.attrs[2][0]}/>
        </div>        
    );
}

export default Body