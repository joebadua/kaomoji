import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './App.css';

import Kaomojis from './kaomojis.json'

const EmojiButton = props => {
    const option = props.option
    const emojilist = Kaomojis[option]

    const list = emojilist.map(index => { 
        const ButtonEvent = () => {
            props.CopyChar(index.emoticon)
        }

        return (
            <>
                <Button basic color="black"
                        className="Emoticon" 
                        id={index.emoticon} 
                        key={index.emoticon}
                        size="large"
                        onClick={ () => ButtonEvent(this)}> {index.emoticon} </Button>
            </>
        )
    });
    return (
        <div>{list}</div>
    )
}

class EmoticonButton extends Component {
    render() {
        const {CopyChar, option} = this.props

        return (
            <div className="EmoticonButton">
                <EmojiButton CopyChar={CopyChar} option={option}/>
            </div>
        )
    }
    
}

export default EmoticonButton;