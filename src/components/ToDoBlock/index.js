// Core
import React, { Component } from 'react';
import { getUniqueID } from '../..//helpers';
import { Transition, TransitionGroup } from 'react-transition-group';
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
        this.hide = ::this._hide;
    }

    state = {
        toDoItems: [],
        show:      true
    };

    _createPost (comment) {

        try {
            this.setState(({ toDoItems }) => ({
                toDoItems: [{ id: getUniqueID(), comment, complited: false }, ...toDoItems]
            }));
        } catch ({ message }) {
            console.log(message);
        }

    }

    _deletePost (id) {
        this.setState(({ toDoItems }) => ({
            toDoItems: toDoItems.filter((toDoItem) => toDoItem.id !== id),
            show:      false
        }));
    }

    _show (show) {
        fromTo(
            show,
            1,
            {
                x:       0,
                y:       -100,
                opacity: 0
            },
            {
                x:       0,
                y:       0,
                opacity: 1
            }
        );
    }

    _hide (show) {
        fromTo(
            show,
            1,
            {
                x:       0,
                y:       0,
                opacity: 1
            },
            {
                x:       0,
                y:       -100,
                opacity: 0
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
                    in = { show }
                    key = { toDoItem.id }
                    timeout = { 1000 }
                    onEnter = { this.show }
                    onExit = { this.hide } >
                    <ToDoItem
                        comment = { toDoItem.comment }
                        deletePost = { this.deletePost }
                        id = { toDoItem.id }
                    />
                </Transition>
            );
        });

        return (
            <section className = { Styles.toDoBlock }>
                <ToDoHeader />
                <TransitionGroup>
                    { toDoItems }
                </TransitionGroup>
                <ToDoFooter createPost = { this.createPost } />
            </section>
        );
    }
}
