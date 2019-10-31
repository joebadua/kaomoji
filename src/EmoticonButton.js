import React, { Component, useRef } from 'react';
//import Button from 'react-bootstrap/Button';
import { Button } from 'semantic-ui-react'
import './App.css';

import Kaomojis from './kaomojis.json'

const EmojiButton = props => {
    const option = props.option
    const emojilist = Kaomojis[option]

    const list = Kaomojis.joy.map(index => { 
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
                <p> test one two three... </p>
                <EmojiButton CopyChar={CopyChar} option={option}/>
            </div>
        )
    }
    
}

export default EmoticonButton;


/* OLD METHOD FOR SINGLE BUTTON */
  /*  return (
    <>
        <Button className="Emoticon" 
                id={ButtonText} 
                variant="outline-dark"
                size="lg" 
                ref={target}
                onClick={ () => ButtonEvent(this)}> {ButtonText} </Button>
        <Overlay target={target.current} show={show} placement="right">
            {props => (
            <Tooltip id="Emoticon-Tooltip" {...props}>
                Copied!
            </Tooltip>
            )}
        </Overlay>
    </>
    )*/