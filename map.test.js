import {describe, expect, test} from '@jest/globals';
import MultimapPractice from "./map";

describe('test', () => {

    let newMap, newMap2;
    beforeEach(function () {
        newMap = new MultimapPractice;
        newMap2 = new MultimapPractice;
    })

    test('should set values correctly', () => {
        newMap.set('foo', 5);
        expect(newMap.get('foo')).toStrictEqual([5]);
    });
    // good question: does order matter? if yes, write a unit test
    // does the values order matter? If yes, throw an array. If no, use a set/object/map
    //
    test('should set duplicate values', () => {
        newMap.set('bar', 5);
        newMap.set('bar', 5);
        expect(newMap.get('bar')).toStrictEqual([5, 5]);
    });

    // good question: what are the constraints on keys/inputs/values?
    // write a unit test for any return values
    test('should set values of different types', () => {
        newMap.set('foo', 5);
        newMap.set('bar', true);
        newMap.set('foobar', 'barfoo')
        expect(newMap.hasOwnProperty('bar')).toBeFalsy();
        // expect(newMap.get('bar')).toBeUndefined();
        expect(newMap.get('foo')).toEqual([5]);
        expect(newMap.get('foobar')).toEqual(['barfoo']);
    });

    test('should not return non-existent value', () => {
        expect(newMap.get('non-existent')).toBeUndefined();
    });

    test('should be able to delete specific values', () => {
        newMap.set('color', 'red');
        newMap.set('color', 'blue');
        newMap.set('color', 'red');

        expect(newMap.delete('color', 'blue')).toBe(true);
        expect(newMap.get('color')).toEqual(['red', 'red']);
    });

    test('should return false when deleting a non-existent value', () => {
        expect(newMap.delete('foo')).toBeFalsy();
    });

    test('should return false when deleting', () => {
        newMap.set('foo', 5);
        expect(newMap.delete('foo', 10)).toBeFalsy();
    });

    test('should return true when deleting and update the value', () => {
        newMap.set('foo', 1);
        newMap.set('foo', 5);
        expect(newMap.get('foo')).toEqual([1, 5]);
        expect(newMap.delete('foo', 1)).toBe(true);
        expect(newMap.get('foo')).toEqual([5]);
    });

    test('should return true when deleting a key', () => {
        newMap.set('foo', -1);
        expect(newMap.delete('foo', -1)).toBe(true);
        expect(newMap.hasOwnProperty('foo')).toBeFalsy();
    });

    // write a unit test 3 items in the array, delete the middle one
    test('should delete the middle value of the array', () => {
       newMap.set('foo', 1);
       newMap.set('foo', 2);
       newMap.set('foo', 3);

       expect(newMap.get('foo')).toEqual([1,2,3]);
       expect(newMap.delete('foo', 2)).toBe(true);
       expect(newMap.get('foo')).toEqual([1,3]);
    });

    // delete all items and confirms key is deleted
    test('should delete all values of the array and key', () => {
        newMap.set('foo', 1);
        newMap.set('foo', 2);
        newMap.set('foo', 3);

        expect(newMap.get('foo')).toEqual([1,2,3]);
        expect(newMap.delete('foo', 2)).toBe(true);
        expect(newMap.delete('foo', 1)).toBe(true);
        expect(newMap.delete('foo', 3)).toBe(true);
        expect(newMap.hasOwnProperty('foo')).toBeFalsy();
    });

    test('should return false when accessing has without key', () => {
        expect(newMap.has('foo', -1)).toBe(false);
    });

    // ask them what the function returns
    test('should return false when accessing has without key', () => {
        newMap.set('bar', 1);
        expect(newMap.get('bar')).toEqual([1]);
        expect(newMap.has('bar', -1)).toBe(false);
    });

    test('should return true when accessing has with key', () => {
        newMap.set('bar', 1);
        expect(newMap.get('bar')).toEqual([1]);
        expect(newMap.has('bar', 1)).toBe(true);
    });

    test('should merge two maps together', () => {
        let newMap = new MultimapPractice([['foo', [1,2]]]);
        let newMap2 = new MultimapPractice([['foo', [3,4]]]);

        expect(MultimapPractice.union(newMap, newMap2)).toEqual(new MultimapPractice([['foo', [1, 2, 3, 4]]]));
    });

    test('should merge two maps with multiple properties', () => {
        let newMap = new MultimapPractice([['foo', [1,2]], ['bar', [1,2]]]);
        let newMap2 = new MultimapPractice([['foo', [3,4]], ['bar', [3,4]]]);
        let results = MultimapPractice.union(newMap, newMap2);
        let newMapMap = new MultimapPractice([['foo', [1, 2, 3, 4]], ['bar', [1, 2, 3, 4]]]);

        expect(results).toEqual(newMapMap);
    })

    test('edge case 1', () => {
        let newMap = new MultimapPractice([['foo', [1,2]], ['bar', [1,2]]]);
        let newMap2 = new MultimapPractice();

        const results = MultimapPractice.union(newMap, newMap2);

        expect(results).toEqual(new MultimapPractice([['foo', [1, 2]], ['bar', [1, 2]]]));
    })

})
