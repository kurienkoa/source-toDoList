import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ToDoBlock from './';

configure({ adapter: new Adapter });


const props = {
    createPost: jest.fn()
};
const message = 'hello';
const state = {
    toDoItems: [],
    show:      true
};

const result = mount(<ToDoBlock { ...props } />, {});

describe('ToDoBlock component: ', () => {

    test(`поиск форми в ToDoBlock`, () => {
        expect(result.find('form')).toHaveLength(1);
    });
    test(`should have valid initial state`, () => {
        expect(result.state()).toEqual(state);
    });

});
