import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ToDoFooter from './';

configure({ adapter: new Adapter });

const props = {
    createPost: jest.fn()
};
const message = 'hello';
const state = {
    comment: '',
    complited: false
};
const result = mount(<ToDoFooter { ...props } />, {

});

describe('ToDoFooter component: ', () => {

    test(`поиск форми в ToDoFooter`, () => {
        expect(result.find('form')).toHaveLength(1);
    });
    test('createPost method should be invoked once after the form submitted', () => {
        result.setState(() => ({
            comment: message
        }));
        result.find('form').simulate('submit');
        expect(props.createPost.mock.calls).toHaveLength(1);
    });
    test(`should have 2 input element`, () => {
        expect(result.find('input')).toHaveLength(2);
    });
    test(`should have valid initial state`, () => {
        expect(result.state()).toEqual(state);
    });
    test('form submit simulate', () => {
        result.find('form').simulate('submit');
        expect(result.state()).toEqual(state);
    });
    // test('_handleTextAreaChange should be a function ', () => {
    //     expect(typeof _handleTextAreaChange).toBe('function');
    // });
    // test(`поиск label`, () => {
    //     expect(result.find('label').label).toBe(2);
    // });

    // test(`input значение било изменино после визова state`, () => {
    //     result.setState({
    //         comment: message
    //     });
    //     expect(result.state()).toEqual(mutatedState);
    //     expect(result.find('input').text()).toBe(message);
    //     result.setState({
    //         comment: ''
    //     });
    //     expect(result.state()).toEqual(state);
    //     expect(result.find('input').text()).toBe('');
    // });
});
