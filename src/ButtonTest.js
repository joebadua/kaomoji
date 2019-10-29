import React, { Component, useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'
import './App.css';

import Kaomojis from './kaomojis.json'

const EmojiButton = props => {
    const [show, setShow] = useState(false);
    const target = useRef(null)

    const list = Kaomojis.happy.map(index => { 
        const ButtonEvent = () => {
            props.CopyChar(index.emoticon)
        }

        return (
            <>
                <Button className="Emoticon" 
                        id={index.emoticon} 
                        key={index.emoticon}
                        variant="outline-dark"
                        size="lg" 
                        ref={target}
                        onClick={ () => ButtonEvent(this)}> {index.emoticon} </Button>
            </>
        )
    });
    return (
        <div>{list}</div>
    )
}

class ButtonTest extends Component {
    render() {
        const {CopyChar} = this.props

        return (
            <EmojiButton CopyChar={CopyChar}/>
        )
    }
    
}

export default ButtonTest;


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