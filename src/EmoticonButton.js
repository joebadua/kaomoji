import React from 'react'
import { Button } from 'semantic-ui-react'
import './App.css'
import Kaomojis from './kaomojis.json'

const CopyChar = char => {
    var input = document.getElementById(char).innerHTML
    var copy = document.createElement('input')

    setTimeout( () => {
        if(input === null) { // if the user is spam clicking
            document.getElementById(char).innerHTML = char // reset to OG emoticon
            input = document.getElementById(char).innerHTML
        }
        else { // if they're not spamming
            document.getElementById(char).innerHTML = input
        }
    }, 750)

    document.getElementById(char).innerHTML = 'Copied!'
    document.getElementById(char).style.color = "blue"

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