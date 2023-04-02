import React from "react";
import { Link } from "react-scroll";

class ListItem extends React.Component {
    constructor (props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = (e) => {
        document.querySelector(".menu-btn").classList.toggle("close");
        document.querySelector(".dd-menu-cont").classList.toggle("show");
    }

    render () {
        let list_items = this.props.elements.map (
            elID => <Link
            to={elID[0]}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            key = {elID[0]}
            onTouchStart = {this.clickHandler}
            ><li key={elID[1]}>{elID[1]}</li></Link>
        );
        return <ul>{list_items}</ul>;
    }
}

export default ListItem