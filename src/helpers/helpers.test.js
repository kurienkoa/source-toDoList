import { getRandomColor, getUniqueID } from './';

describe('helpers: ', () => {
    // test('getFullApiUrl should be a function ', () => {
    //    expect(typeof getFullApiUrl).toBe('function');
    // });

    // test('getFullApiUrl function should throw an error if wrong non-string arguments were passed ', () => {
    //    const getFullNameWithError = () => {
    //        getFullApiUrl(null, 1);
    //    };
    //
    //     expect(getFullNameWithError).toThrow(`'api' and 'GROUP_ID' arg passed should be a string`);
    // });

    // test('getFullApiUrl function should return fullName string separated by ine space', () => {
    //     expect(getFullApiUrl(api, GROUP_ID)).toBe(`${api}/${GROUP_ID}`);
    // });

    test('getRandomColor should be a function ', () => {
        expect(typeof getRandomColor).toBe('function');
    });

    test('getRandomColor проверка количества символов', () => {
        expect(getRandomColor().length).toBe(7);
    });
    test('getRandomColor проверка #', () => {
        expect(getRandomColor().charAt(0)).toBe('#');
    });

    test('getUniqueID проверка количества символов', () => {
        expect(getUniqueID().length).toBe(15);
    });
    test('getUniqueID проверка', () => {
        expect(() => getUniqueID('qwe')).toThrow();
    });


});
