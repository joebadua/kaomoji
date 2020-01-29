import React, { Component } from 'react'
import EmojiButton from './EmoticonButton'
import FilterButtons from './FilterButtons'
import TextArea from './TextArea'
import './App.css'

class App extends Component {
  
  state = {
    option: "all",
    visible: true
  }
  
  setAll = () => { this.setState({ option: "all"}) }
  setLove = () => { this.setState({ option: "love" }) }
  setJoy = () => { this.setState({ option: "joy" }) }

  render() { 
    return (
      <div className="App">
        <h1> （*＾ワ＾*） </h1>
        <h2> Kaomojis! </h2>
          <p> Simply click a button, and it automatically copies it to your clipboard! </p>
          <h1> 
            <TextArea />
          </h1>
          <h1>
            <FilterButtons setOption={this.setAll} filter={"All"} icon={"circle"}/>
            <FilterButtons setOption={this.setJoy} filter={"Joy"} icon={"smile outline"}/>
            <FilterButtons setOption={this.setLove} filter={"Love"} icon={"heart"}/>
          </h1>
          <EmojiButton option={this.state.option}/>
      </div>
    )
  }
}

export default App;
