// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import { string, func } from 'prop-types';

export default class ToDoItem extends Component {
    static propTypes = {
        comment:    string.isRequired,
        deletePost: func.isRequired,
        id:         string.isRequired
    };
    constructor () {
        super();
        this.deletePost = ::this._deletePost;
    }
    _deletePost () {

        const { deletePost, id } = this.props;

        console.log('id === ', id);
        console.log('this.props === ', this.props);
        deletePost(id);
    }

    render () {
        const { id, comment } = this.props;

        return (
            <section className = { Styles.item } key = { id }>
                <div>
                    <input
                        id = { id }
                        type = 'checkbox'
                    />
                    <label htmlFor = { id } >{ comment }</label>
                </div>
                <div>
                    <input
                        className = { Styles.select }
                        type = 'button'
                    />
                    <input
                        className = { Styles.edit }
                        type = 'button'
                    />
                    <input
                        className = { Styles.delete }
                        type = 'button'
                        onClick = { this.deletePost }
                    />
                </div>
            </section>
        );
    }
}
