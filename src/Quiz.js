import React, { Component } from 'react'

import Button from './Button.js'

export default class  extends Component {
    constructor(props){
        super(props);
        this.state = {
            numQuestion: 1,
            counter: 0,
            scoreN: 0,
            scoreG: 0,
            scoreS: 0,
            showN: {
                display: 'none'
            },
            showS: {
                display: 'none'
            },
            showG: {
                display: 'none'
            },
            showNon: {
                display: 'none'
            },
            display: 'contents',
            questionRight: [
                ["I would rather spend slightly more on products if it will create American jobs", "n"],
                ["It is not worth it to save money if someone else suffers", "s"],
                ["It is necessary to use the cheapest materials to remain competitive in your business", "g"],
                ["My country has many imbalanced trade agreements with developing countries", "s"],
                ["I agree with the use of tariffs on foreign goods to encourage domestic production", "n"],
                ["Gobal carbon emission is increasing and that is a bad thing", "s"],
                ["I am scared that imported goods are lower quality and I think we shouldn't do it in my country.", "n"],
                ["Foreign investment is good because it helps my country and the other countries we invest in", "g"],
                ["I often feel bad when see disadvantaged people suffering in the news", "s"],
                ['shit', 'n']
            ],

            questionLeft: [
                ["To me it is most important to use materials that I buy for the lowest price", "g"],
                ["I believe that we are losing a trade war to China", "n"],
                ["Buying out resources from developing countries", "s"],
                ["Foreign trade is always beneficial for everyone involved", "g"],
                ["Underdeveloped countries suffer from pollution due to factory production", "s"],
                ["I prefer using globally sourced materials even if it leads to increased carbon consumption", "g"],
                ["We should not be scared to import from China because we gain more than we lose", "g"],
                ["My country is the strongest country and does not need help from foreigners", "n"],
                ["I only really know about how I live and my immediate circle lives and I don't care much about others", "n"],
                ['shit', 'n']
            ]
        }
        this.handleClickLeft = this.handleClickLeft.bind(this)
        this.handleClickRight = this.handleClickRight.bind(this)
        this.calcWinner = this.calcWinner.bind(this)
        this.checkWinner = this.checkWinner.bind(this)
        this.incrementCounter = this.incrementCounter.bind(this)
    }

    handleClickLeft() {
        if(this.state.questionLeft[this.state.counter][1] == "n"){
            this.setState({scoreN: this.state.scoreN + 1}, this.incrementCounter())
        } else if(this.state.questionLeft[this.state.counter][1] == "g") {
            this.setState({scoreG: this.state.scoreG + 1}, this.incrementCounter())
        } else if (this.state.questionLeft[this.state.counter][1] == "s") {
            this.setState({scoreS: this.state.scoreS + 1}, this.incrementCounter())
        }
        this.setState({numQuestion: this.state.numQuestion + 1})
    }

    handleClickRight() {
        if(this.state.questionRight[this.state.counter][1] == "n"){
            this.setState({scoreN: this.state.scoreN + 1}, this.incrementCounter())
        } else if(this.state.questionRight[this.state.counter][1] == "g") {
            this.setState({scoreG: this.state.scoreG + 1}, this.incrementCounter())
        } else if (this.state.questionRight[this.state.counter][1] == "s") {
            this.setState({scoreS: this.state.scoreS + 1}, this.incrementCounter())
        }
        this.setState({numQuestion: this.state.numQuestion + 1})
    }

    incrementCounter() {
        this.setState({counter: this.state.counter + 1}, this.checkWinner())
    }

    checkWinner() {
        if(this.state.counter == 8){
            this.calcWinner()
        }
    }

    calcWinner() {
        if(this.state.scoreG >= 4){
            this.setState({showG: {
                display: 'contents'
            }})
        } else if(this.state.scoreN >= 4) {
            this.setState({showN: {
                display: 'contents'
            }})
        } else if(this.state.scoreS >= 4) {
            this.setState({showS: {
                display: 'contents'
            }})
        } else {
            this.setState({showNon: {
                display: 'contents'
            }})
        }
        this.setState({display: 'none'})
    }

    render() {
        return (
            <div style={{position: 'absolute', top: '20%', transform: 'translateY(-50%)', left: '50%', transform: 'translateX(-50%)'}}>
                <div style={{display: this.state.display}}>
                    <h4 style={{fontSize: '5vh', color: '#2e2e2e', textAlign: 'center', marginBottom: '50px'}}>
                        Select the answer that appeals more to you
                    </h4>
                    <h4>
                        {this.state.scoreS} {this.state.scoreG} {this.state.scoreN}   {this.state.counter}
                    </h4>
                    <h4 style={{color: '#2e2e2e', textAlign: 'center', marginBottom: '50px'}}>
                        {this.state.numQuestion} of 9
                    </h4>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <Button text={this.state.questionLeft[this.state.counter][0]} onclick={this.handleClickLeft}/>
                        <div style={{width: '10vw'}}/>
                        <Button text={this.state.questionRight[this.state.counter][0]} onclick={this.handleClickRight}/>
                    </div>
                </div>
                <div style={this.state.showN}>
N                </div>
                <div style={this.state.showG}>
G                </div>
                <div style={this.state.showS}>
S                </div>
                <div style={this.state.showNon}>
Non                </div>
            </div>
        )
    }
}
