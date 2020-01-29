import React, { Component } from 'react';
import EmojiButton from './EmoticonButton'
import FilterButtons from './FilterButtons'
import './App.css'
import { Transition } from 'semantic-ui-react';


class App extends Component {
  
  state = {
    option: "joy",
    visible: true
  }
  
  setLove = () => { this.setState({ option: "love" }) }
  setJoy = () => { this.setState({ option: "joy" }) }

  render() { 
    

    
    return (
      <div className="App">
        <h1> （*＾ワ＾*） </h1>
        <h2> Kaomojis! </h2>
          <p> Simply click a button, and it automatically copies it to your clipboard! </p>
          <FilterButtons setOption={this.setJoy} filter={"Joy"} icon={"thumbs up"}/>
          <FilterButtons setOption={this.setLove} filter={"Love"} icon={"heart"}/>
          <EmojiButton option={this.state.option}/>
      </div>
    )
  }
}

export default App;
