// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.scss';
import { func } from 'prop-types';

export default class ToDoFooter extends Component {
    static propTypes = {
        createPost: func.isRequired
    };
    constructor () {
        super();
        this.handleSubmit = :: this._handleSubmit;
        this.createPost = :: this._createPost;
        this.toggleChecked = :: this._toggleChecked;
    }

    state = {
        comment:   '',
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
        this.setState({
            complited: true
        });
    }
    render () {
        const { comment } = this.state;

        return (
            <div className = { Styles.footer }>
                <div>
                    <input id = 'checkAll' type = 'checkbox' onClick = { this.toggleChecked } />
                    <label htmlFor = 'checkAll' >Done all</label>
                </div>
                <form onSubmit = { this.handleSubmit } >
                    <input
                        maxLength = { 30 }
                        placeholder = { 'Write here' }
                        type = 'text'
                        value = { comment }
                        onChange = { this._handleTextAreaChange }
                    />
                    <button type = 'submit' ><span>+</span> Add Task</button>
                </form>
            </div>
        );
    }
}
