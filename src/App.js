import React, { Component } from 'react'
import EmojiButton from './EmoticonButton'
import FilterButtons from './FilterButtons'
import TextArea from './TextArea'
import './App.css'
import Kaomojis from './kaomojis.json'

class App extends Component {
  
  state = {
    option: "top",
    visible: true,
    randomInt: Math.floor(Math.random() * 15),
    isDarkMode: false
  }
  
  setTop = () => { this.setState({ option: "top"}) }
  setLove = () => { this.setState({ option: "love" }) }
  setJoy = () => { this.setState({ option: "joy" }) }
  setAngry = () => { this.setState({ option: "angry"}) }
  setSad = () => { this.setState ({option: "sad"}) }

  render() { 
  
    const startEmoji = Kaomojis['top'][this.state.randomInt]

    return (
      <div className="App">
        <h1> {startEmoji.emoticon} </h1>
        <h2> Kaomojis! </h2>
          <p> Simply click a button, and it automatically copies it to your clipboard! </p>
          <h1> 
            <TextArea />
          </h1>
          <h1>
            <FilterButtons setOption={this.setTop} filter={"Popular"} icon={"arrow alternate circle up"}/>
            <FilterButtons setOption={this.setJoy} filter={"Joy"} icon={"smile outline"}/>
            <FilterButtons setOption={this.setSad} filter={"Sad"} icon={"frown outline"}/>
            <FilterButtons setOption={this.setLove} filter={"Love"} icon={"heart"}/>
            <FilterButtons setOption={this.setAngry} filter={"Angry"} icon={"thumbs down outline"}/>
          </h1>
          <EmojiButton option={this.state.option}/>
      </div>
    )
  }
}

export default App;
