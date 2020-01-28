import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './App.css';

import Kaomojis from './kaomojis.json'
import EmoticonButton from './EmoticonButton';

const FilterButtons = props => {


        return (
            <>
            <Button basic color="black"
                onClick={props.setLove()}>
            </Button>
            </>
        )


}

export default FilterButtons;
