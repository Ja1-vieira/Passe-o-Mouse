import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';

export default class App extends Component { 
  constructor(props) {
    super(props);
   
    this.state={
     
    };
  }


  boxClick = (e) => {
    this.setState({
      bgColor: 'red'

    })}

    boxClick2 = (e) => {
    this.setState({
      bgColor: "green"
    })
  }

  render() {
    return (
     <button  
   
          style={{backgroundColor: this.state.bgColor,    width: "200px",height:"200px"
}}
           onMouseEnter={this.boxClick}
            onMouseLeave={this.boxClick2}>Clique em Mim!</button>
    );
  }
}