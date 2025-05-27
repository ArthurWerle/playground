const { bubbleSort } = require('./bubble');

describe('Bubble Sort', () => {
    test('sorts reverse sorted array', () => {
        const input = [5, 4, 3, 2, 1];
        const expected = [1, 2, 3, 4, 5];
        expect(bubbleSort([...input])).toEqual(expected);
    });

    test('sorts already sorted array', () => {
        const input = [1, 2, 3, 4, 5];
        const expected = [1, 2, 3, 4, 5];
        expect(bubbleSort([...input])).toEqual(expected);
    });

    test('sorts array with duplicates', () => {
        const input = [3, 1, 4, 1, 5, 9, 2, 6];
        const expected = [1, 1, 2, 3, 4, 5, 6, 9];
        expect(bubbleSort([...input])).toEqual(expected);
    });

    test('handles single element array', () => {
        const input = [1];
        const expected = [1];
        expect(bubbleSort([...input])).toEqual(expected);
    });

    test('handles empty array', () => {
        const input = [];
        const expected = [];
        expect(bubbleSort([...input])).toEqual(expected);
    });

    test('handles array with negative numbers', () => {
        const input = [-5, 3, -1, 0, 2, -4];
        const expected = [-5, -4, -1, 0, 2, 3];
        expect(bubbleSort([...input])).toEqual(expected);
    });
}); 