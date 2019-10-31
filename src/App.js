import React, { Component } from 'react';
import EmoticonButton from './EmoticonButton'
import './App.css'

class App extends Component {
  // TODO: ADD FUNCTION THAT CAN MANIPULATE OPTION
  option = 'joy'

  CopyChar = char => {
    /* REMOVE THIS LATER */console.log('inside CopyChar, char is: ' + char) 
    var input = document.getElementById(char).innerHTML
    var copy = document.createElement('input');

    document.getElementById(char).innerHTML = 'Copied!'
    setTimeout( () => {
      document.getElementById(char).innerHTML = input
    }, 1000)

    copy.value = input
    copy.id = 'inputID';
    document.body.appendChild(copy);
    copy.select();
    document.execCommand('copy');
    document.body.removeChild(copy); 
  }

  
  render() { 
    return (
      <div className="App">
        <EmoticonButton CopyChar={this.CopyChar} option={this.option}/>
      </div>
    )
  }
}

export default App;
