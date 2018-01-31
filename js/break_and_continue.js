console.log("***********************************")

var input

do {
    input = prompt("Please input an odd number between 1 and 50");
    } while(input > 50 || input < 1 || isNaN(parseFloat(input)));
    console.log('Number to skip is '+ input)

    for (var i = 0; i <= 50; i++) {
        if (input == i) {
            console.log('Yikes! Skipping number ' + input);
            continue;
        }


        if (i % 2 !== 0) {
            console.log('Here is an odd number ' + i);
        }

    }



console.log('*************BONUSES*****************')



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







