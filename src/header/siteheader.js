import React from "react";
import Menu from "./menu";
import logo from "../assets/img/logo.png";

class Header extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            logo: "../assets/img/logo.png",
        }
    }
    render () {
        return (
            <div className="site-header">
                <div className="logo-wrapper">
                    <img src={logo} alt="Kinvel"></img>
                </div>
                    <Menu attrs={this.props.attrs} onClick={this.handerClick}/>
            </div>
        );
    }
}

export default Header