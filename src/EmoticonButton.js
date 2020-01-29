import React from 'react';
import { Button } from 'semantic-ui-react'
import './App.css';

import Kaomojis from './kaomojis.json'

const CopyChar = char => {
    /* REMOVE THIS LATER */console.log('inside CopyChar, char is: ' + char) 
    var input = document.getElementById(char).innerHTML
    var copy = document.createElement('input');

    /*
    document.getElementById(char).innerHTML = 'Copied!'
    setTimeout( () => {
      document.getElementById(char).innerHTML = input
    }, 1000)
    */

    copy.value = input
    copy.id = 'inputID';
    document.body.appendChild(copy);
    copy.select();
    document.execCommand('copy');
    document.body.removeChild(copy); 
  }

const EmojiButton = props => {
    const emojilist = Kaomojis[props.option]

    const list = emojilist.map(index => { 
        const ButtonEvent = () => {
            CopyChar(index.emoticon)
        }
        
        return (
            <>
                <Button basic
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

export default EmojiButton;