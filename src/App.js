import React, { Component } from 'react'
import EmojiButton from './EmoticonButton'
import FilterButtons from './FilterButtons'
import TextArea from './TextArea'
import './App.css'
import Kaomojis from './kaomojis.json'

class App extends Component {
  
  state = {
    option: "all",
    visible: true,
    randomInt: Math.floor(Math.random() * 50) // for rendering a random emoji from the start
  }
  
  setAll = () => { this.setState({ option: "all"}) }
  setLove = () => { this.setState({ option: "love" }) }
  setJoy = () => { this.setState({ option: "joy" }) }
  setAngry = () => {this.setState({ option: "angry"}) }

  render() { 
    
    const emoji = Kaomojis['all'][this.state.randomInt]

    return (
      <div className="App">
        <h1> {emoji.emoticon} </h1>
        <h2> Kaomojis! </h2>
          <p> Simply click a button, and it automatically copies it to your clipboard! </p>
          <h1> 
            <TextArea />
          </h1>
          <h1>
            <FilterButtons setOption={this.setAll} filter={"All"} icon={"circle"}/>
            <FilterButtons setOption={this.setJoy} filter={"Joy"} icon={"smile outline"}/>
            <FilterButtons setOption={this.setLove} filter={"Love"} icon={"heart"}/>
            <FilterButtons setOption={this.setAngry} filter={"Angry"} icon={"thumbs down outline"}/>
          </h1>
          <EmojiButton option={this.state.option}/>
      </div>
    )
  }
}

export default App;
