const { quicksort } = require('./quicksort');

describe('Quick Sort', () => {
    test('sorts array with duplicates', () => {
        const input = [3, 1, 4, 1, 5, 9, 2, 6];
        const expected = [1, 1, 2, 3, 4, 5, 6, 9];
        expect(quicksort([...input])).toEqual(expected);
    });

    test('sorts reverse sorted array', () => {
        const input = [5, 4, 3, 2, 1];
        const expected = [1, 2, 3, 4, 5];
        expect(quicksort([...input])).toEqual(expected);
    });

    test('sorts already sorted array', () => {
        const input = [1, 2, 3, 4, 5];
        const expected = [1, 2, 3, 4, 5];
        expect(quicksort([...input])).toEqual(expected);
    });

    test('handles single element array', () => {
        const input = [1];
        const expected = [1];
        expect(quicksort([...input])).toEqual(expected);
    });

    test('handles empty array', () => {
        const input = [];
        const expected = [];
        expect(quicksort([...input])).toEqual(expected);
    });

    test('handles array with all same elements', () => {
        const input = [2, 2, 2, 2, 2];
        const expected = [2, 2, 2, 2, 2];
        expect(quicksort([...input])).toEqual(expected);
    });

    test('handles array with negative numbers', () => {
        const input = [-5, 3, -1, 0, 2, -4];
        const expected = [-5, -4, -1, 0, 2, 3];
        expect(quicksort([...input])).toEqual(expected);
    });
}); 