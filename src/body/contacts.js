import React from "react";
import bg from "../assets/img/BG2.jpg"
import wa from "../assets/ico/watsapp.svg"
import t from "../assets/ico/telegram.svg"

class Cont extends React.Component {
    constructor (props){
        super (props);
        this.state = {
            head: "Контакты",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero nisl, ullamcorper id eros posuere, ultricies eleifend nulla. Proin tempus magna quis consequat lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum metus quam, lacinia non erat quis, finibus elementum neque.",
            tel: '+7(888)888-88-88',
            telplain: "+78888888888",
            email: "e-mail: ",
            telegram: "Мой телеграм-канал: ",
            watsapp: "А можно по Watsapp: ",
            fText: '+7',
            isClicked: false,
            nameChecker: /^[а-яё]+$/ui,
            userName: "",
            tLink: "https://t.me/",
            waLink: "https://wa.me/",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }

    handleChange (e) {
        if (e.target !== undefined) {
            if (e.target.value.length < 3 || e.target.value.length == null) {this.setState ({fText: "+7"})}
            if(!isNaN(e.target.value) & e.target.value.length < 13 & e.target.value.length > 2) {
                this.setState({fText: e.target.value});
            }        
        }
    }


    handleClick () {
        this.setState({isClicked: !this.state.isClicked});
    }
    
    handleChangeName (e) {
        if (e.target !== undefined) {
            let uName = e.target.value
            if (e.target.value.length === 0) {
                this.setState({userName: ""})
            }
            if (uName.match(this.state.nameChecker)!==null) {
                this.setState({userName: e.target.value})
            }
        }
    }

    render () {
        let eMailForm = null;
        if (this.state.isClicked) {
            eMailForm = <form action="www.ABCDEYEKA.ru/request.php" className="form" name="mail" method="post" encType="application/x-www-form-urlencoded">
                            <label>Имя:</label>
                            <input type="text" id='name' name="name" value={this.state.userName} onChange={this.handleChangeName}/>
                            <label>Телефон:</label>
                            <input type="text" name="tel" onChange={this.handleChange} value={this.state.fText} id='number'/>
                            <input type="submit" value = "Заказать" className="sub"/>
                        </form>
        } else {eMailForm = "";}
        return (
            <div className="contacts-wr" style={{backgroundImage: `url(${bg})`}} id={this.props.anc}>
                <div className="text">
                    <h3>{this.state.head}</h3>
                    <p>{this.state.text}</p>
                    {/* <span>Телефон: </span><a href={"tel:"+this.state.telplain}>{this.state.tel}</a> */}
                    <div className="social-wr">
                        <a href={this.state.tLink}><img src={t} alt="Напишите мне в Telegramm" className="social"></img></a>
                        <a href={this.state.waLink}><img src={wa} alt="Напишите мне в Whatsapp" className="social"></img></a>
                    </div>
                    <div className="e-mail-form">Или можно <span className="link" onClick={this.handleClick} onTouchStart={this.handleClick}>заказать обратный звонок</span>{eMailForm}</div>
                </div>
                <div className="cover"></div>
            </div>
        )
    }
}

export default Cont