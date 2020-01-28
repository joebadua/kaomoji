import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './App.css';

const FilterButtons = props => {

        return (
            <>
            <Button basic color="black"
                onClick={props.setLove}>
                test
            </Button>
            </>
        )
}

export default FilterButtons;
