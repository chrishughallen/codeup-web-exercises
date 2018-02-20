// var x = 6 ** 2;
// console.log(x);
//
// let a = 10;
// console.log(a);


//let is preferred over var because it is more local. Can't be accessed outside codeblocks
// {
//     let a = 3;
//     a += 3;
//     console.log(a);
// }

// let b = 3;
//
// {
//     let b = 2;
//     b+=2;
//     console.log(b);
//
// }
//
// console.log(b);



//
// const firstName = 'Chris';
// const lastName = 'Allen';
// let sayHello = name => console.log(`Hello ${firstName} ${lastName}, it's great to meet you.`);
//
// sayHello('Chris', 'Allen');
//


// function addOne (num){
//     return num + 2
// }

// same as

const addOne = input => input + 2;

console.log(addOne(100));

const getArea = ({height, width}) => height * width;

let shape = {
    height:20,
    width:10
};

console.log(getArea(shape));
