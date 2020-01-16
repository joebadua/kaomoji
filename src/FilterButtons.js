import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './App.css';

import Kaomojis from './kaomojis.json'

const FilterButton = () => {
    const filterList = Kaomojis;
    const ifJoy = true;
    const ifLove = true;

    const list = filterList.map(index => { 
        const ButtonEvent = () => {

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





class FilterButtons extends Component {
    render() {
        return (
            <div className="FilterButtons">

                <FilterButton />

            </div>
        )
    }
    
}

export default FilterButtons;
