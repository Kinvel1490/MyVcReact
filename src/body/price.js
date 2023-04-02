import React from "react";
import Descr from "./description";

class Price extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            head: "Предлагаемые услуги:",
            descritions: [
                {
                    name: "Заголовок раздела",
                    price: "Дата",
                    deadend: "Время",
                    descr: [
                         "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                         [["Первый абзац", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero nisl, ullamcorper id eros posuere, ultricies eleifend nulla. Proin tempus magna quis consequat lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum metus quam, lacinia non erat quis, finibus elementum neque. Cras eu odio lacinia, dapibus felis in, dapibus nisi. Quisque convallis molestie augue, et tincidunt ex imperdiet eu. Nam eu sodales augue, quis volutpat tellus. Cras ac velit dignissim lorem egestas accumsan sed sed quam. Nunc turpis metus, finibus quis viverra ac, suscipit a erat. Proin porttitor, leo eget consequat elementum, lorem tortor gravida ante, a venenatis ante metus ac odio. Pellentesque blandit, sem pellentesque sodales porta, ex ipsum laoreet quam, vel tincidunt sapien mauris in quam. Fusce at enim non justo tristique vehicula id dapibus sem. In ultricies venenatis nisl, egestas vehicula leo fringilla id."],
                        ["Второй абзац","Cras ut tortor id magna aliquet commodo eget vitae leo. Sed urna erat, ullamcorper consectetur velit sed, mollis tincidunt dolor. Nam venenatis ornare purus, et vulputate ipsum molestie sed. Ut et neque augue. Mauris mollis mi tellus, vitae bibendum metus porta sed. Maecenas nisl nunc, efficitur sed turpis vitae, cursus tincidunt enim. Donec aliquam mi libero, in condimentum felis rutrum ac. Quisque sodales egestas ex. Praesent facilisis tempus nunc. Nulla scelerisque justo arcu, a porta diam sodales fringilla. Nulla suscipit dui a enim porttitor, sit amet imperdiet risus mattis."],
                        ["Третий абзац","Vivamus porta lobortis finibus. Vivamus luctus nibh ut orci vestibulum dictum. Vestibulum lorem nibh, rutrum ut mollis eu, ultricies non lacus. Morbi rutrum feugiat arcu, ut sagittis mi fringilla vitae. Maecenas imperdiet orci sit amet justo lobortis tempus. In hac habitasse platea dictumst. Etiam vel justo vitae odio congue eleifend. Suspendisse elementum libero dapibus tellus tempus suscipit. Aenean ornare ornare lectus et tristique. Integer quis volutpat ante, vel consequat nulla. Aenean condimentum mi et elit ultricies, id lobortis lacus iaculis. In placerat, quam et convallis accumsan, nunc nisi aliquam quam, in faucibus dui magna nec urna. Quisque ut ante nibh."],
                        ["Четвертый абзац","Donec sollicitudin sollicitudin pulvinar. Donec hendrerit at mi quis facilisis. Mauris gravida et dui sed imperdiet. Etiam in tortor feugiat, pretium ex at, tincidunt urna. Aliquam nulla metus, sodales quis ipsum non, maximus viverra dui. Cras nulla purus, dapibus sed molestie a, pulvinar in lacus. Aliquam at lectus vulputate, sagittis magna sed, imperdiet eros. Maecenas sit amet ipsum nec justo finibus semper. Suspendisse egestas vehicula metus, et sagittis libero iaculis pulvinar. Praesent pretium, est non ultrices pharetra, tortor lacus mattis odio, sit amet tincidunt ex sem nec mi. Duis placerat bibendum sem quis mollis. Sed accumsan lacinia nisi non suscipit. Sed ac rhoncus tellus. Sed ante lacus, convallis ut condimentum a, tincidunt auctor diam. Phasellus rhoncus facilisis lectus ac sagittis."]],
                        "Donec rutrum quis mauris nec tempus. Aenean accumsan porttitor nunc sed iaculis. Etiam sit amet hendrerit nisl. Vivamus ut tellus at nulla ornare condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec semper dolor ut lectus faucibus, vulputate rhoncus elit lobortis. Donec imperdiet diam lobortis, ultricies velit ut, egestas odio. Praesent accumsan mauris id magna elementum dictum. Aliquam neque tellus, rhoncus quis consequat eu, tristique vestibulum leo. Ut aliquam tellus sed velit cursus feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut leo et lorem dapibus vulputate. Morbi id lacus urna.",
                        ]
                },
            ]
        }
    }

    handleClick = (e) => {
        let sliders = document.querySelectorAll(".slider");
        let slide;
        sliders.forEach ((slider)=>{
            if (e.target.parentNode.parentNode === slider) {
                let mass = slider.querySelectorAll(".descr-header");
                let descript = slider.querySelectorAll('.type-descr');
                slide = slider.querySelector('.slide');
                for (let i = 0; i<mass.length; i++) {
                    mass[i].classList.remove('underline');
                    descript[i].classList.remove('show-txt');
                    if (mass[i] === e.target) {
                        slide.setAttribute("style", "translate: "+i*(-101)+"%");
                        descript[i].classList.add('show-txt');
                        mass[i].classList.add('underline');
                    }
                }
            }
        });
    }

    //Формирует струуктуру раздела в соответсвии с this.state.descriptions. Делает из массивов в this.state.descriptions.descr слайдер. Может масштабироваться
    htmlCreator (arr) {
        let htmlContent = [];
        let inside;
        let list;
        let p;
        arr.forEach((el)=>{
            if (typeof(el) === "string"){
                inside = <p key={arr.indexOf(el)}>{el}</p>
                htmlContent.push(inside);
            }
            if (typeof(el) === "object") {
                p = [];
                list = [];
                el.forEach ((element) => {
                    let uid;
                    uid = "h4_"+arr.indexOf(el)+"_"+el.indexOf(element);
                    if (el.indexOf(element) === 0) {
                        inside = <h4 key = {arr.indexOf(el)+el.indexOf(element)} className="descr-header underline" id={uid} onClick={this.handleClick} onTouchStart={this.handleClick}>{element[0]}</h4>
                            p.push(<p key={arr.indexOf(el)+el.indexOf(element)} className="type-descr show-txt">{element[1]}</p>)
                    } else {
                        inside = <h4 key = {arr.indexOf(el)+el.indexOf(element)} className="descr-header" id={uid} onClick={this.handleClick} onTouchStart={this.handleClick}>{element[0]}</h4>
                            p.push(<p key={arr.indexOf(el)+el.indexOf(element)} className="type-descr">{element[1]}</p>)
                        }
                    list.push(inside);
                    })
                list = <div key = {arr.indexOf(el)+"list"} className="list-elements">{list}</div>
                // htmlContent.push(list);
                p = <div key={arr.indexOf(el)+"slider"} className="slider-wr"><div className="slide">{p}</div></div>
                let slider = [list, p];
                htmlContent.push(<div className="slider" key={arr.indexOf(el)}>{slider}</div>);
            }
        });
        
        return htmlContent;
    }

    render () {
        let content = [];
        this.state.descritions.forEach((st)=>{
            let subCont;
            if (typeof(st.descr) === "string") {
                subCont = <p>{st.descr}</p>;
            }
            if (typeof(st.descr) === "object") {
                subCont = this.htmlCreator(st.descr);
            }
            // subCont = <div>{subCont}</div>
            content.push(<Descr key={st.name} name={st.name} price={st.price} deadend={st.deadend} descr={subCont} onClick={this.clikcHandler} onTouchStart={this.clikcHandler}/>)
                        })
        return (
            <div className="about-wrapper" id={this.props.anc}>
                <div className="txt-wr">
                    <h2>{this.state.head}</h2>
                        {content}
                </div>
            </div>
        )
    }
}

export default Price