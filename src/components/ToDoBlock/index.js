// Core
import React, { Component } from 'react';
import { string } from 'prop-types';
import { getUniqueID } from '../..//helpers';
import { Transition } from 'react-transition-group';
import { fromTo } from 'gsap';

// Instruments
import Styles from './styles.scss';
import ToDoHeader from '../ToDoHeader';
import ToDoItem from '../ToDoItem';
import ToDoFooter from '../ToDoFooter';

export default class ToDoBlock extends Component {
    constructor () {
        super();
        this.createPost = ::this._createPost;
        this.deletePost = ::this._deletePost;
        this.show = ::this._show;
    }
    state = {
        toDoItems: [],
        complited: false,
        show: true
    };
    _createPost ( comment ) {

        try {
            this.setState(({ toDoItems }) => ({
                toDoItems: [{ id: getUniqueID(), comment }, ...toDoItems]
            }));
        } catch ({ message }) {
            console.log(message);
        }

    }
    _deletePost ( id ) {
        this.setState(({ toDoItems }) => ({
            toDoItems: toDoItems.filter( (toDoItem) => toDoItem.id !== id)
        }));
    }
    _show (show) {
        fromTo(
            show,
            3,
            {
                x:         0,
                y:         -100,
                opacity:   0,
            },
            {
                x:         0,
                y:         0,
                opacity:   1,
            }
        );
    }
    render () {
        const { toDoItems: postsData, show } = this.state;
        const toDoItems = postsData.map((toDoItem) => {
            console.log('toDoItem - ', toDoItem);
            return (
                <Transition
                    appear
                    in={show}
                    timeout={3000}
                    onEnter={ this.show }
                    key = { toDoItem.id }
                >
                    <ToDoItem { ...toDoItem }  comment = { toDoItem.comment } deletePost = { this.deletePost } />
                </Transition>
            )
        });
        return (
            <section className = { Styles.toDoBlock }>
                <ToDoHeader />
                { toDoItems }
                <ToDoFooter createPost = { this.createPost } />
            </section>
        );
    }
};
