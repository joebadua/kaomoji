import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './App.css';

import Kaomojis from './kaomojis.json'

const FilterButton = () => {
    const filterList = Kaomojis;
    const ifJoy = true;
    const ifLove = true;

}

class FilterButtons extends Component {
    render() {
        return (
            <div className="FilterButtons">

            </div>
        )
    }
    
}

export default FilterButtons;
