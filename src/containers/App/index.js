// Core
import React, { Component } from 'react';
import { string } from 'prop-types';

// Instruments
import Styles from './styles';
import ToDoBlock from '../../components/ToDoBlock';

import avatar from '../../theme/assets/homer.png';

const GROUP_ID = 'pumOFDxHP9';
const TOKEN = 'AObohCjQHF';

const options = {
    avatar,
    firstName: 'Андрей',
    lastName:  'Кириенко',
    api:       `https://lab.lectrum.io/react/api/${GROUP_ID}`,
    token:     `${TOKEN}`
};

export default class App extends Component {

    static childContextTypes = {
        avatar:    string.isRequired,
        firstName: string.isRequired,
        lastName:  string.isRequired,
        api:       string.isRequired,
        token:     string.isRequired
    }

    getChildContext () {
        return options;
    }

    render () {
        return (
            <section className = { Styles.app }>
                <ToDoBlock />
            </section>
        );
    }
}
