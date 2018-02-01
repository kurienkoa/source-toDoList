import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ToDoItem from './';

configure({ adapter: new Adapter });

const options = {
    firstName: 'Anrey',
    avatar:    'http://example.com.avatar.jpg'
};
const props = {
    deletePost: jest.fn(),
    comment: '',
    id: ''
};
const message = 'hello';
const state = {
    comment: '',
    complited: false
};
const result = mount(<ToDoItem { ...props } />, {
    context: options
});

describe('ToDoItem component: ', () => {
    test(`поиск секции в ToDoItem`, () => {
        expect(result.find('section')).toHaveLength(1);
    });
    test(`поиск форми в ToDoItem`, () => {
        expect(result.find('form')).toHaveLength(0);
    });
    test(`should have 1 label element`, () => {
        expect(result.find('label')).toHaveLength(1);
    });
    // test('createPost method should be invoked once after the form submitted', () => {
    //     result.setState(() => ({
    //         comment: message
    //     }));
    //     result.find('form').simulate('submit');
    //     expect(props.createPost.mock.calls).toHaveLength(1);
    // });
    // test(`should have valid initial state`, () => {
    //     expect(result.state()).toEqual(state);
    // });
});
