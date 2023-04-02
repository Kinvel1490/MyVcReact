import React from "react";
import Ddmenu from "./dd-menu";
import ListItem from "./listitem";

class Menu extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            // width: document.body.clientWidth - document.body.scrollWidth,
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        }
        window.addEventListener ('resize', () =>{
            this.setState({width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth})
        })
    }

    render (){
        let menu = null;
        if (this.state.width != null && this.state.width > 0) {
            if (this.state.width > 799) {
                menu = (
                    <div className="menu-wrapper">
                        <ListItem elements={this.props.attrs} />
                    </div>
                );
            }
            if (this.state.width < 800) {
                menu = <Ddmenu elements = {this.props.attrs} />
            }
        }
        return menu;
    }
}

export default Menu