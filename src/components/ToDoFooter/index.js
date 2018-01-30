// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';

export default class ToDoFooter extends Component {
    constructor () {
        super();
        this.handleSubmit = :: this._handleSubmit;
        this.createPost = :: this._createPost;
        this.toggleChecked = :: this._toggleChecked;
    }

    state = {
        comment: '',
        complited: false
    };
    _handleSubmit (event) {
        event.preventDefault();
        this.createPost();
    }
    _createPost () {
        const { comment } = this.state;

        if (!comment) {
            return;
        }

        this.props.createPost(comment);
        this.setState({ comment: '' });
    }
    _handleTextAreaChange = ({ target }) => {
        const { value: comment } = target;

        this.setState({ comment });
    }
    _toggleChecked () {
        setState({ complited: true })
    }
    render () {
        const { comment } = this.state;
        return (
            <div className = { Styles.footer }>
                <div>
                    <input id = 'checkAll' type = 'checkbox' onClick={ this.toggleChecked } />
                    <label htmlFor = 'checkAll' >Done all</label>
                </div>
                <form onSubmit = { this.handleSubmit } >
                    <input
                        placeholder = { 'Write here' }
                        type = 'text'
                        value = { comment }
                        onChange = { this._handleTextAreaChange }
                        maxLength = { 30 }
                    />
                    <button type = 'submit' ><span>+</span> Add Task</button>
                </form>
            </div>
        );
    }
};
