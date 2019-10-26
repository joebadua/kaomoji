import React, { Component } from 'react';
import ButtonTest from './ButtonTest'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  CopyChar = char => {
    /* REMOVE THIS LATER */console.log('inside CopyChar, char is: ' + char) 
    
    var input = document.getElementById(char).innerHTML
    //document.getElementById(char).innerHTML = "Copied!"
    //setTimeout( () =>
      //document.getElementById(char).innerHTML = input, 1500 )// here, we are making a copy of input to copy to clipboard
    var copy = document.createElement('input'); 
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
        <ButtonTest CopyChar={this.CopyChar} />
      </div>
    )
  }
}

export default App;
