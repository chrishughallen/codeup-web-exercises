(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Chris', 'Alexandra', 'Matt', 'Andy']

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log('There are ' + names.length + ' elements in the array')

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i<names.length;i++){
        console.log(names[i])
    }


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name){
        console.log(name)
    });


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
        function first (array){
            return array[0];
        }

        function second(array) {
            return array[1];
        }

        function last(array){
            return array[array.length-1];
        }


    console.log(first([1, 2, 3, 4, 5]));
    console.log(second([1, 2, 3, 4, 5]));
    console.log(last([1, 2, 3, 4, 5]));

console.log("************ARRAY BONUSES************")

    function average(numbers){
    var total = 0;
    numbers.forEach(function(number){
        total += number;
    });
        return (total/numbers.length)
    }
    console.log('The average of that array is ' + average([5,10,5,5,10]));



    function sumAll(numbers) {
    var total = 0;
    numbers.forEach(function(number){
        total += number;
    });
        return total;
    }
    console.log('The sum of the numbers in that array is ' + sumAll([2,2,2,2,2]));



   function max(array){
       return Math.max(...array)
   }

   console.log('The largest number in the array is ' + max([1,2,5,1]))


    function reverseArray(array){
        return array.reverse();
    }
    console.log(reverseArray([1,2,3,4,5]));



    function upperCaseAll(array){
    var upperCaseArray = [];
    for (var i = 0;i<array.length;i++){
            upperCaseArray.push(array[i].toUpperCase())
    }
        return upperCaseArray;
    }
    console.log(upperCaseAll(['this', 'is', 'a', 'test']));




    function getOdds(array){
        var oddArray = [];
        for (var i = 0;i<array.length;i++){
            if (array[i]%2!==0){
                oddArray.push(array[i])
            }
        }
        return oddArray;
    }
    console.log(getOdds([1,2,3,4,5,6,7,8,9,10]));




    function getEvens(array){
        var evenArray = [];
        for (var i = 0;i<array.length;i++){
            if (array[i]%2===0){
                evenArray.push(array[i]);
            }
        }
        return evenArray;
    }
    console.log(getEvens([1,2,3,4,5,6,7,8,9,10]));




    function multiplyAll(array){
        var total = 1;
        for (var i = 0;i<array.length;i++){
            total *= array[i]
        }
        return total;
    }
    console.log(multiplyAll([2,3,4,5]));


})();


