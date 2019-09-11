const helper = require('./iterative_sorting');
let arr1 = [1, 5, 8, 4, 2, 9, 6, 0, 3, 7]
let arr2 = []
let arr3 = [0, 1, 2, 3, 4, 5]
let arr4 = [58, 12, 14, 7, 84, 86, 93, 56, 99, 96, 33, 41, 8, 31, 3, 42, 97, 11, 89, 17, 45, 80, 83, 75, 70, 94, 78, 1, 32, 87, 60, 72, 77, 76, 49, 91, 20, 40, 35, 29, 18, 28, 6, 51, 44, 98, 54, 37, 10, 38, 81, 69, 4, 23, 39, 22, 30, 61, 73, 67, 100, 46, 34, 71, 50, 57, 66, 85, 24, 27, 36, 74, 68, 62, 53, 16, 82, 25, 90, 15, 13, 64, 63, 21, 9, 95, 5, 55, 2, 47, 92, 43, 79, 26, 88, 59, 19, 65, 52, 48]

describe('Bubble Sort', () => {
    it('should sort an arr of ints', () => {
        expect(helper.bubbleSort(arr1)).toMatchObject([0,1,2,3,4,5,6,7,8,9]);
    })
    it('should sort an empty arr', () => {
        expect(helper.bubbleSort(arr2)).toMatchObject([]);
    })
    it('deals with an arr already sorted', () => {
        expect(helper.bubbleSort(arr3)).toMatchObject([0,1,2,3,4,5]);
    })
    it('deals with a larger dataset', () => {
        expect(helper.bubbleSort(arr4)).toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100])
    })

})

describe('Selection Sort', () => {
    it('should sort an arr of ints', () => {
        expect(helper.selectionSort(arr1)).toMatchObject([0,1,2,3,4,5,6,7,8,9]);
    })
    it('should sort an empty arr', () => {
        expect(helper.selectionSort(arr2)).toMatchObject([]);
    })
    it('deals with an arr already sorted', () => {
        expect(helper.selectionSort(arr3)).toMatchObject([0,1,2,3,4,5]);
    })
    it('deals with a larger dataset', () => {
        expect(helper.selectionSort(arr4)).toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100])
    })

})




describe('Insertion Sort', () => {
    it('should sort an arr of ints', () => {
        expect(helper.insertionSort(arr1)).toMatchObject([0,1,2,3,4,5,6,7,8,9]);
    })
    it('should sort an empty arr', () => {
        expect(helper.insertionSort(arr2)).toMatchObject([]);
    })
    it('deals with an arr already sorted', () => {
        expect(helper.insertionSort(arr3)).toMatchObject([0,1,2,3,4,5]);
    })
    it('deals with a larger dataset', () => {
        expect(helper.insertionSort(arr4)).toMatchObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100])
    })

})