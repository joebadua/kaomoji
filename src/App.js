import React, { Component } from 'react'
import EmojiButton from './EmoticonButton'
import FilterButtons from './FilterButtons'
import TextArea from './TextArea'
import './App.css'
import Kaomojis from './kaomojis.json'

class App extends Component {
  
  state = {
    option: "top15",
    visible: true,
    randomInt: Math.floor(Math.random() * 15),
    data:null
  }
  
  setTop = () => { this.setState({ option: "top15"}) }
  setLove = () => { this.setState({ option: "love" }) }
  setJoy = () => { this.setState({ option: "joy" }) }
  setAngry = () => {this.setState({ option: "angry"}) }
  setSad = () => {this.setState ({option: "sad"}) }

  render() { 
  
    const startEmoji = Kaomojis['top15'][this.state.randomInt]

    return (
      <div className="App">
        <h1> {startEmoji.emoticon} </h1>
        <h2> Kaomojis! </h2>
          <p> Simply click a button, and it automatically copies it to your clipboard! </p>
          <h1> 
            <TextArea />
          </h1>
          <h1>
          <p> {this.state.data}</p>
            <FilterButtons setOption={this.setTop} filter={"Popular"} icon={"arrow alternate circle up"}/>
            <FilterButtons setOption={this.setJoy} filter={"Joy"} icon={"smile outline"}/>
            <FilterButtons setOption={this.setLove} filter={"Love"} icon={"heart"}/>
            <FilterButtons setOption={this.setAngry} filter={"Angry"} icon={"thumbs down outline"}/>
            <FilterButtons setOption={this.setSad} filter={"Sad"} icon={"frown outline"}/>
          </h1>
          <EmojiButton option={this.state.option}/>
      </div>
    )
  }
}

export default App;
