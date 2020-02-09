import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import './App.css';

const FilterButtons = props => {

        return (
            <>
            <Button secondary
                onClick={props.setOption}>
                <Icon name ={props.icon}>
                </Icon>
                {props.filter}
            </Button>
            </>
        )
}

export default FilterButtons;
