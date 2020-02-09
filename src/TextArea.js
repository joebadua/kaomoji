import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import Twitter from 'twitter'
require('dotenv').config()
console.log(process.env.REACT_APP_TWITTER_KEY)

const TestingTextArea = props => {
    return (
        <Form>
            <Form.Field>
                <input placeholder ='Test what you copied in here!' />
            </Form.Field>
        </Form>
    )
}

class TextArea extends Component {

    


    render() {
        return (
            <TestingTextArea />
        )
    }



}

export default TextArea;