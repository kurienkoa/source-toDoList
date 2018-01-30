// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import { string, func, bool } from 'prop-types';

export default class ToDoItem extends Component {
    static propTypes = {
        comment:    string.isRequired,
        complited:  bool.isRequired,
        deletePost: func.isRequired,
        id:         string.isRequired
    };
    constructor () {
        super();
        this.deletePost = ::this._deletePost;
        this.complited = ::this._complited;
    }
    _deletePost () {

        const { deletePost, id } = this.props;

        console.log('id === ', id);
        console.log('this.props === ', this.props);
        deletePost(id);
    }

    _complited () {
        const { complited } = this.props;

        console.log(1, complited);
    }
    render () {
        const { id, comment, complited } = this.props;
        const toggleCheck = complited ? 'checked' : '';

        return (
            <div className = { Styles.item } key = { id }>
                <div>
                    <input
                        id = { id }
                        type = 'checkbox'
                    />
                    <label htmlFor = { id } >{ comment } { toggleCheck }</label>
                </div>
                <div>
                    <input
                        className = { Styles.select }
                        type = 'button'
                    />
                    <input
                        className = { Styles.edit }
                        type = 'button'
                        onClick = { this.complited }
                    />
                    <input
                        className = { Styles.delete }
                        type = 'button'
                        onClick = { this.deletePost }
                    />
                </div>
            </div>
        );
    }
}
