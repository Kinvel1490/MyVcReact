import React from "react";
import ListItem from "./listitem"

class Ddmenu extends React.Component {
    constructor (props) {
        super (props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        document.querySelector(".menu-btn").classList.toggle("close");
        document.querySelector(".dd-menu-cont").classList.toggle("show");
    }
    
    render () {
        return (
            <div className="menu-wrapper"> 
                    <div className="menu-btn-wr" onClick={(e) => this.handleClick(e)} onTouchStart={this.handleClick}>
                        <span className="menu-btn">"menu-btn"</span>
                    </div>
                    <div className="dd-menu-cont">
                        <ListItem elements={this.props.elements} />
                    </div>
            </div>
        )
    }
    
}

export default Ddmenu