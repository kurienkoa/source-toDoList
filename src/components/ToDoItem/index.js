// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import { string, func } from 'prop-types';

export default class ToDoItem extends Component {
    static propTypes = {
        complited: string,
        comment: string.isRequired,
        deletePost: func.isRequired,
        id: string.isRequired
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
                    <input type = 'checkbox' id = { id } defaultChecked={ complited } />
                    <label htmlFor = { id } >{ comment }</label>
                </div>
                <div>
                    <button className = { Styles.select }></button>
                    <button className = { Styles.edit }></button>
                    <button className = { Styles.delete } onClick = { this.deletePost }></button>
                </div>
            </div>
        );
    }
}
