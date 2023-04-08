import React from "react";
import BG from "../assets/img/BG1.jpg"

class Greetings extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            hello: "Приветствую!",
            name: "Меня зовут Павел,",
            occup: ["Я врач по образованию, но я очень интересуюсь веб технологиями и активно их изучаю. Свой путь в программировании начал в 2018 году с изучения Java: ",
            ["Bates B., Sierra K. - Head First Java, 2nd Edition - 2005",
            "Freeman E., Freeman E., Bates B., Sierra K. - Design patterns."],
            "Написал несколько пробных программ. В 2020-2021 писал программу на Java для ведения электронного учет документов (не вышла в релиз в связи с не востребованностью).",
            "С 2022 активно изучаю веб-технологии HTML 5, CSS3, JavaScript, PHP, MySQL:",
            ["Дронов В., Прохоренок Н. - HTML, JavaScript, PHP и MySQL.",
            "Круг С. – Не заставляйте меня думать.",
            "официальная документация JavaScript, PHP, HTML5, CSS3, React, Jquery.",
            "Начальные навыки работы с Github.",
            "Выполнил 2 учебных проекта по работе с CMS Wordpress."],
            [1,
            "Мои работы на GitHub:",
            ["https://github.com/Kinvel1490/MyComparator.git", "Сравнение изображений"],
            ["https://github.com/Kinvel1490/WPt-theme-education-project", "Учебный сайт на WP"]
            ],
            ]
        }
    }

    massA = (arr, ind) => {
        if (arr !== 1) {
            if (typeof(arr) === "string") {
                return <p key={ind}>{arr}</p>;
            }
            if (typeof(arr) === "object") {
                return <li key={ind}><a href={arr[0]}>{arr[1]}</a></li>
            }
        }
    }

    render (){
        let text = [];
        let cont
        this.state.occup.forEach ((el) => {
            if (typeof(el) === "string") {
                cont = <p key={this.state.occup.indexOf(el)+"occup"}className="simple-text">{el}</p>;
            }
            if (typeof(el) === "object") {
                let arrCont = [];
                el.forEach((r) => {
                    if (el[0] === 1) {
                        arrCont.push(this.massA(r, el.indexOf(r)));
                    } else {
                        arrCont.push(<li key={el.indexOf(r)} className="about-list">{r}</li>);
                    }
                });
                cont = <ul key={this.state.occup.indexOf(el)}>{arrCont}</ul>;
            }            
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