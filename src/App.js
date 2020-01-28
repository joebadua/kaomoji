import React, { Component } from 'react';
import EmojiButton from './EmoticonButton'
import FilterButtons from './FilterButtons'
import './App.css'
import { Button } from 'semantic-ui-react';


class App extends Component {
  
  state = {
    option: "joy"
  }
  
  setLove = () => {
    this.setState({ option: "love" })
  }

  render() { 
    
    return (
      <div className="App">
        <h1> （*＾ワ＾*） </h1>
        <h2> Kaomojis! </h2>
        <p> Simply click a button, and it automatically copies it to your clipboard! </p>
        <FilterButtons setLove={this.setLove} />
        <EmojiButton option={this.state.option}/>
      </div>
    )
  }
}

export default App;
