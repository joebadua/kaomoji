import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './App.css';

import Kaomojis from './kaomojis.json'
import EmoticonButton from './EmoticonButton';


class FilterButtons extends Component {

    option = 'joy'

    render() {

        return (
            <div className="FilterButtons">
                <EmoticonButton />
            </div>
        )
    }
    
}

export default FilterButtons;
