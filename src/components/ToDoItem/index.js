// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import { string, func } from 'prop-types';

export default class ToDoItem extends Component {
    static propTypes = {
        comment:    string.isRequired,
        deletePost: func.isRequired,
        id:         string.isRequired,
        complited:  string
    };
    constructor () {
        super();
        this.deletePost = ::this._deletePost;
    }
    shouldComponentUpdate (nextProps) {
        return JSON.stringify(nextProps) !== JSON.stringify(this.props);
    }
    componentWillUpdate () {
        console.log(this.props.id, 'componentWillUpdate');
    }
    componentDidUpdate () {
        console.log(this.props.id, 'componentDidUpdate');
    }
    _deletePost () {

        const { deletePost, id } = this.props;

        console.log('id === ', id);
        console.log('this.props === ', this.props);
        deletePost(id);
    }
    render () {
        const { id, comment, complited } = this.props;

        return (
            <div className = { Styles.item } key = { id }>
                <div>
                    <input
                        defaultChecked = { complited }
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
            </div>
        );
    }
}
