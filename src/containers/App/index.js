// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import ToDoBlock from '../../components/ToDoBlock';

export default class App extends Component {

    render () {
        return (
            <section className = { Styles.app }>
                <ToDoBlock />
            </section>
        );
    }
}
