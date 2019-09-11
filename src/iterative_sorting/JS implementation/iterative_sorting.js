const insertionSort = arr => {
    //Separate the first element from the rest of the array.
    //Think about it as a sorted list of one element
    //For all other indexes beginning the 1, do this:

    for(let i = 1; i < arr.length; i++) {
        //copy item at current index into temp variable
        let temp = arr[i];
        //iterate to the left of the current index until you find where it needs to go. 
        j = i;
        while(j > 0 && temp < arr[j - 1]){
            //shift items over to the right as you iterate
            arr[j] = arr[j - 1];
            j -=1;
            //when the correct index is found, copy temp into this position
        }
        arr[j] = temp;
    }
    return arr;
}




/*
## Selection Sort
***Selection Sort*** is an algorithm that many of you have probably used before when sorting things in your everyday lives. Imagine that you have several books you want to arrange on a shelf from shortest to tallest. You start off by looking for the shortest book, and when you find it, put it on the far left side of the shelf. Then, you look for the second shortest book and insert it directly to the right of the first book. You repeat this process, selecting the next shortest book and moving it next to the most recently placed book, until you have moved all books into the correct place. This is ***Selection Sort***.  

*/


const bubbleSort = (arr) => {

    if(!arr.length) {
        return [];
    }
    
    if(arr.length === 1) {
        return arr;
    }

    else {
        for(let i = 0; i < arr.length; i++) {
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[j] < arr[i]) {
                    //swap
                    [arr[j], arr[i]] = [arr[i], arr[j]];
                }
                
            }
        }
    }
    return arr;
}

// Selection Sort Algorithm
// Start with current index = 0

// For all indices EXCEPT the last index:

// a. Loop through elements on right-hand-side of current index and find the smallest element

// b. Swap the element at current index with the smallest element found in above loop

const selectionSort = arr => {
    // Divide the arr into sorted and unsorted
    // loop through each element - 
    // for each other element, find out if it's smaller than the smallest.
    // if it is, swap the first element of unsorted with the smallest element

    for (let i = 0; i < arr.length; i++) {
        let currentIndex = arr[i];
        let smallestIndex = currentIndex;

        for(j = currentIndex; j < arr.length; j++) {
            if(arr[j] < arr[smallestIndex]){
                smallestIndex = j
            }
            [arr[smallestIndex], arr[currentIndex]] = [arr[currentIndex], arr[smallestIndex]];

        }


        
    }
    return arr;
}


module.exports = {
    bubbleSort, selectionSort, insertionSort
}