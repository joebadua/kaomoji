import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import './App.css';

const FilterButtons = props => {

        return (
            <>
            <Button basic color="black"
                onClick={props.setOption}>
                <Icon name ={props.icon}>
                    {props.filter}
                </Icon>
            </Button>
            </>
        )
}

export default FilterButtons;
