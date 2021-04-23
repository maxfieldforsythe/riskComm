import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props){
        super();
        this.state = {
            test: props.text,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ test: nextProps.text });  
    }

    render() {
        return (
            <div className='btn' style={{height: '20vh', 
            width: '35vw', 
            backgroundColor: '#2e2e2e',
            borderRadius: '15px', 
            textAlign: 'center', 
            color: '#fff',
            whiteSpace: 'pre-wrap', 
            overflowWrap: 'break-word'}} onClick={this.props.onclick}>
                <span style={{display: 'inline-block', verticalAlign: 'middle'}}>
                   {this.state.test}
                </span>
            </div>
        )
    }
}
