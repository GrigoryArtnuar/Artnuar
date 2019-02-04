import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './index.css';

import './corect.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 100,


        }
        this.handleChange = this.handleChange.bind(this)
        this.handleRound = this.handleRound.bind(this)
    }

    handleChange = sliderValues => {
        this.setState({value: sliderValues})

    }

    _stateUpdated() {
        console.log(this.state.value);
    }

    MoveBlock = (props)=> {
        let Styles1 = {
            backgroundPosition: '-2048px'
        };
        let Styles2 = {
            backgroundPosition: '-1024px'
        };
        let Styles3 = {
            backgroundPosition: '0'
        };
        switch (props){
            case 100: return Styles1
                break;
            case 50: return Styles2
                break;
            case 0: return Styles3
                break;
            default: break;
        }

    }
        handleRound = sliderValues => {


            sliderValues < 33 ? this.setState({value: 0}, this._stateUpdated.bind(this)) :
                sliderValues > 66 ? this.setState({value: 100}, this._stateUpdated.bind(this)) :
                    this.setState({value: 50}, this._stateUpdated.bind(this));

        }

        render()
        {
            return (
                <div className="ThreeSlader" style={this.MoveBlock(this.state.value)}>
                    <Slider className="ImageRemove" min={0}
                            handleStyle={{
                                backgroundSize: 'contain',
                                width: '60px',
                                height: '60px',
                                backgroundColor: 'none',
                                backgroundSize: '100% 100%',
                                border:'none',
                                backgroundColor: 'transparent',
                                position: 'absolute',
                                top: '-20px',
                                backgroundImage: "url(./images/Polygon.png)"
                            }}
                            trackStyle={{
                                height: '10px',
                                borderRadius: '0'

                            }}
                            railStyle={{
                                height: '10px',
                                borderRadius: '0'
                            }}
                            man={100} included={true} defaultValue={this.state.value} value={this.state.value}
                            onChange={this.handleChange}
                            onAfterChange={this.handleRound}/>
                    <div className="three">
                    </div>
                </div>

            );
        }
    }
export default App;

