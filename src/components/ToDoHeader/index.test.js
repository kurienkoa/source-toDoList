import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ToDoHeader from './';

configure({ adapter: new Adapter });

const result = mount(<ToDoHeader />, {

});

describe('ToDoHeader component: ', () => {
    test(`поиск секции в ToDoHeader`, () => {
        expect(result.find('section')).toHaveLength(1);
    });
    test(`поиск форми в ToDoHeader`, () => {
        expect(result.find('form')).toHaveLength(0);
    });
    test(`should have 2 input element`, () => {
        expect(result.find('input')).toHaveLength(1);
    });
});
