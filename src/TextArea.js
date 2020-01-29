import React from 'react'
import { Form } from 'semantic-ui-react'

const TestTextArea = props => {
    return (
        <Form>
            <Form.Field>
                <input placeholder ='Test what you copied in here!' />
            </Form.Field>
        </Form>
    )
}

export default TestTextArea;