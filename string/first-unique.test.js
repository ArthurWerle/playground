const { findUnique } = require('./first-unique');

describe('findUnique', () => {
    test('should return 0 for "leetcode"', () => {
        expect(findUnique('leetcode')).toBe(0);
    });

    test('should return 8 for "lleeeettcode"', () => {
        expect(findUnique('lleeeettcode')).toBe(8);
    });

    test('should return -1 for empty string', () => {
        expect(findUnique('')).toBe(-1);
    });

    test('should return 0 for single character', () => {
        expect(findUnique('a')).toBe(0);
    });

    test('should return -1 for string with no unique characters', () => {
        expect(findUnique('aabbcc')).toBe(-1);
    });

    test('should return 2 for "aab"', () => {
        expect(findUnique('aab')).toBe(2);
    });

    test('should handle string with special characters', () => {
        expect(findUnique('!@#$%^&*()!@#$%^&*()_')).toBe(20);
    });
}); 