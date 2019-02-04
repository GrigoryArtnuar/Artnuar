import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './corect.css';
import { Scroller } from 'react-skroll'
const { Component, PropTypes } = React
const { Scroller, scrollInitalState } = ReactSkroll


function round(val) {
    return (Math.round(val * 100) / 100).toFixed(2);
}


function ContentSlider(props) {
    if (props.ex ===0) {
        return (
            <div className="slide slide1">
                <h1>Всегда ли цели терапии СД2 на поверхности?</h1>
                <h3 className="sel0">Гипогликемия</h3>
                <h3 className="sel1">Осложнения СД</h3>
                <h3 className="sel2">Цель по HbA1c</h3>
                <h3 className="sel3">СС риски</h3>
            </div>
        );
    }else if (props.ex ===1) {
        return (<div className="slide slide2">
            <h1>Основа терапии — патогенез СД2 </h1>
        </div>)
    }else return (
        <div className='slider'>
            <Slider
                min={0}
                max={100}
                step={50}
                text={text}
                onChange={this.handleChange}
            />
            <div className='text'>{text}</div>
        </div>
    );
}

const sliders = [
    {name: "Slade1", color: "url(./images/more_cop.jpg)" },
    {name: "Slade2", color: "url(./images/more_cop2.jpg)" },
    {name: "Slade3", color: "url(./images/more_cop3.jpg)"}
]

class Demo extends Component {
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
export default Demo;
