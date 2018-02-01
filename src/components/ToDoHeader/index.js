// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';

export default class ToDoHeader extends Component {
    render () {
        return (
            <section className = { Styles.header }>
                <p>To Do List</p>
                <input placeholder = { ' Search ' } type = 'search' />
            </section>
        );
    }
}
