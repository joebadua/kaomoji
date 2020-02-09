import React, { Component } from 'react'
import { Form, Input, Button, Icon } from 'semantic-ui-react'

const TextArea = props => {
    const Tweet = () => {
        let input = document.getElementById("Twitter-Input").value
        window.open('https://twitter.com/intent/tweet?text='+input+'via kaomojis.herokuapp.com')
    }

    return (
        <Form>
            <Form.Field>
                <input id="Twitter-Input" placeholder='Test what you copied in here!'/>
                <Button primary id="Twitter-Button" onClick={ () => Tweet() }>
                    <Icon name="twitter"></Icon>Tweet
                </Button>
            </Form.Field>
        </Form>
    )
}

export default TextArea;