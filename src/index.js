import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './corect.css';
import './baza.css';
import  { Scroller, scrollInitalState} from 'react-skroll'

import  App from './slider3.js';






function ContentSlider(props) {
    if (props.ex ===0) {
        return (
            <div className="slide slide1">
                <h1>Всегда ли цели терапии СД2 на поверхности?</h1>
                <h3 className="sel0"><span><div className="circle"></div>
<div className="circle2"></div></span>Гипогликемия</h3>
                <h3 className="sel1"><span><div className="circle"></div>
<div className="circle2"></div></span>Осложнения СД</h3>
                <h3 className="sel2"><span><div className="circle"></div>
<div className="circle2"></div></span>Цель по HbA1c</h3>
                <h3 className="sel3"><span><div className="circle"></div>
<div className="circle2"></div></span>СС риски</h3>
            </div>
        );

    }else if (props.ex ===1) {
        return (<div className="slide slide2"><h1>Основа терапии — патогенез СД2 </h1>
            <div className="Parallax" >
            </div>
        </div>)
    }else return (

            <App/>


    );

}


const sliders = [
    {name: "Slade1", color: "url(./images/more_cop.jpg)" },
    {name: "Slade2", color: "url(./images/more_cop2.jpg)" },
    {name: "Slade3", color: ""}
]

class Demo1 extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            scroll: scrollInitalState,
            text: 100
        }

    }

    handleChange = (text) => {
        this.setState({
            text: text
        })
    }

    render() {
        const { scroll } = this.state;
        const { text } = this.state;


        return (
            <div className="wrapper">
                <nav>
                    {
                        scroll.children.map((child, i) =>
                            <a
                                key={i}
                                className={child.active ? 'active' : 'inactive'}
                                onClick={() => this.scroll.scrollToPosition(child.start)}
                            >

                            </a>
                        )
                    }
                </nav>
                <Scroller
                    scrollRef={ref => this.scroll = ref}
                    autoScroll={true}
                    autoFrame={true}
                    onScrollChange={(scroll) => this.setState({ scroll })}
                >
                    {
                        sliders.map(({ name, color }, index) => <section key={index} name={name} className={name} style={{background: color, backgroundSize:'cover'}}  >
                                <ContentSlider ex={index}/>

                            </section>
                        )
                    }
                </Scroller>
            </div>
        )
    }
}
ReactDOM.render(
    <Demo1 />,
    document.getElementById('root')
)



