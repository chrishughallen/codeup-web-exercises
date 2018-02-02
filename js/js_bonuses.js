
for (var i = 99; i>0; i--){
    if(i == 1){
        console.log(i + ' bottle of beer on the wall ' + i + ' bottle of beer! Take one down pass it around no more bottles of beer on the wall')
    }
    else
        console.log(i + ' bottles of beer on the wall, ' + i + ' bottles of beer! Take one down pass it around, ' + (i-1) + ' bottles of beer on the wall!')
}

console.log('FIZZ BUZZ BONUS');

for (var i = 1; i<=100;i++){
    if (i % 15 === 0){
        console.log('FizzBuzz');
        continue;
    }
    if (i % 3 ===0){
        console.log('Fizz');
        continue;

    }
    if  (i % 5 ===0){
        console.log ('Buzz');{
            continue;
        }
    }
    else console.log(i);

}

console.log('*********PRIME NUMBER BONUS*******');



for (var i  = 0; i<1000; i++) {
    if (i == 2 || i == 3 || i == 5 || i == 7) {
        console.log(i + ' is a prime number.');
    }

    if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
        console.log(i + ' is a prime number.');
    }
}




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



function phoneNumberParser(input){

    if (isNaN(input)){
        console.log( 'Invalid Character Included')
    }

    var phoneNumber = input.toString();
    var phoneNumberArray = phoneNumber.split ('');


    if (phoneNumberArray.length === 7){
        phoneNumberArray.splice(3,0,'-');
    }
    if (phoneNumberArray.length === 10){
        phoneNumberArray.splice(3,0,'-');
        phoneNumberArray.splice(7,0,'-');

    }
    if(phoneNumberArray.length === 11){
        phoneNumberArray.splice(1,0,'-');
        phoneNumberArray.splice(5,0,'-');
        phoneNumberArray.splice(9,0,'-');

    }

    return phoneNumberArray.join('');

}


console.log(phoneNumberParser(1234567));
console.log(phoneNumberParser(1234567890));
console.log(phoneNumberParser(18005555555));
