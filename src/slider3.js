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
                                width: '44px',
                                height: '56px',
                                backgroundColor: 'none',
                                backgroundSize: '44px 56px',
                                border:'none',
                                backgroundColor: 'transparent',
                                backgroundRepeat: 'no-repeat',
                                position: 'absolute',
                                top: '-20px',
                                borderRadius: '0',
                                backgroundImage: "url(./images/Polygon.png)"
                            }}
                            trackStyle={{
                                height: '10px',
                                borderRadius: '0'
                            }}
                            railStyle={{
                                height: '10px',
                                borderRadius: '0',
                                opacity: '.3'
                            }}
                            man={100} included={true} defaultValue={this.state.value} value={this.state.value}
                            onChange={this.handleRound}
                            /*onAfterChange={this.handleRound}*/ />
                    <div className="three">
                        <div> <h3>1998</h3></div><div> <h3>2009</h3></div><div><h3>2016</h3></div>
                    </div>
                </div>

            );
        }
    }
export default App;

