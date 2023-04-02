import React, { Fragment } from "react";

function Descr (props) {
    return (
    <div className="aboutsite">
        <h3>{props.name}</h3>
        <div className="cathead">
            <p className="price">{props.price}</p>
            <p className="deadend">{props.deadend}</p>
        </div>                        
        <div className="content-text">
            <Fragment>
                {props.descr}
            </Fragment>
        </div>
        <hr className="intersection"></hr>
    </div>)
}

export default Descr;