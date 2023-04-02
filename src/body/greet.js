import React from "react";
import BG from "../assets/img/BG1.jpg"

class Greetings extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            hello: "Приветствую!",
            name: "Меня зовут Павел,",
            occup: ["Я врач по образованию, но я очень интересуюсь веб технлогиями и активно их изучаю. Свой путь в программировании начал в 2018 году с изучения Java: ",
            "● Bates B., Sierra K. - Head First Java, 2nd Edition - 2005",
            "● Freeman E., Freeman E., Bates B., Sierra K. - Design patterns.",
            "Написал несколько пробных программ. В 2020-2021 писал программу на Java для ведения электронного учет документов (не вышла в релиз в связи с не востребованностью).",
            "С 2022 активно изучаю веб-технологии HTML 5, CSS3, JavaScript, PHP, MySQL:",
            "● Дронов В., Прохоренок Н. - HTML, JavaScript, PHP и MySQL.",
            "● Круг С. – Не заставляйте меня думать.",
            "● официальная документация JavaScript, PHP, HTML5, CSS3, React, Jquery.",
            "● Начальные навыки работы с Github.",
            "● Выполнил 2 учебных проекта по работе с CMS Wordpress.",
            "Мои работы на GitHub:",
            "https://github.com/Kinvel1490/MyComparator.git",
            ]
        }
    }

    render (){
        let text = []; 
        this.state.occup.forEach ((el) => {
            let cont = <p key={this.state.occup.indexOf(el)+"occup"}className="simple-text">{el}</p>;
            text.push(cont);
        });
            return (
        <div className="g-wrapper" id={this.props.anc}>
            <div className="greets" style={{backgroundImage: `url(${BG})`}}>
                <div className="text">
                    <h1>{this.state.hello}</h1>
                    <h2>{this.state.name}</h2>
                    {text}
                </div>
                <div className="cover"></div>
            </div>
        </div>
        
    )
    }

}

export default Greetings