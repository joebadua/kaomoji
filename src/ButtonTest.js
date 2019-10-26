import React, { Component, useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'
import './App.css';

const EmojiPopup = (
    <Tooltip id="copy-tooltip"
              delay={{ "show": 500, "hide": 100 }}>
        Copied! 
    </Tooltip>
);

const EmojiButton = props => {
    const ButtonText = "☆*:.｡.o(≧▽≦)o.｡.:*☆"
    const [show, setShow] = useState(false);
    const target = useRef(null)
    
    const ButtonEvent = () => {
        props.CopyChar(ButtonText)
        setShow(true)
        setTimeout( () => setShow(false), 1000)
    }
    
    return (
    <>
        <Button className="Emoticon" 
                id={ButtonText} 
                variant="outline-dark"
                size="lg" 
                ref={target}
                onClick={ () => 
                    ButtonEvent(this)}> {ButtonText} </Button>
        <Overlay target={target.current} show={show} placement="right">
            {props => (
            <Tooltip id="Emoticon-Tooltip" {...props}>
                Copied!
            </Tooltip>
            )}
        </Overlay>
    </>
    )
}

class ButtonTest extends Component {
    render() {
        const {CopyChar} = this.props
        return (
            <EmojiButton CopyChar={CopyChar} />
        )
    }
    
}

export default ButtonTest;