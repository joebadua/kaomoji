import React, { Component, setState } from 'react';
import EmojiButton from './EmoticonButton'
import FilterButtons from './FilterButtons'
import './App.css'
import { Button } from 'semantic-ui-react';


class App extends Component {

  setLove() {
    this.setStaate({option: "love"})
  }

  state = {
    option: "joy"
  }

  render() { 
    
    return (
      <div className="App">
        <h1> （*＾ワ＾*） </h1>
        <h2> Kaomojis! </h2>
        <p> Simply click a button, and it automatically copies it to your clipboard! </p>
        <FilterButtons setLove={this.setLove}/>
        <EmojiButton option={this.state.option}/>
      </div>
    )
  }
}

export default App;
