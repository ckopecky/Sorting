# TO-DO: Complete the selection_sort() function below 

import math

def bubble_sort( arr ):
    # loop through n-1 elements
    if(not len(arr)):
        return []
    
    if(len(arr) == 1):
        return arr
    else:
        for i in range(0, len(arr)):
            #establishes smallest_index == arr[0]
            # TO-DO: find next smallest element
            # (hint, can do in 3 loc)         
            for j in range(i + 1, len(arr)):
                if(arr[j] < arr[i]):
                    temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp




        # TO-DO: swap




    return arr

# print(bubble_sort([58, 12, 14, 7, 84, 86, 93, 56, 99, 96, 33, 41, 8, 31, 3, 42, 97, 11, 89, 17, 45, 80, 83, 75, 70, 94, 78, 1]))

def selection_sort(arr):
    lengthMinusOne = len(arr) - 1
    for i in range(0, len(arr)):
        smallest = arr[0]
        current = arr[0]
        for j in range(0, lengthMinusOne):
            if(smallest > j ) :
                print(arr, smallest, j)
                smallest = j 
                temp = current
                current = smallest
                smallest = temp
    

    return arr
# STRETCH: implement the Count Sort function below
def count_sort( arr, maximum=-1 ):

    pass


print(selection_sort([1, 5, 8, 4, 2, 9, 6, 0, 3, 7]))