const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];


// PROBLEM 1 - create an array of the first letters of each fruit


const firstLettersArr = fruits.map(a => a.charAt(0));
// console.log(firstLettersArr);


// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)

const nameAndAge = customers.map (a => ({name: a.name, age: a.age}));
// console.log(nameAndAge);


// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects

//
const civilServants = customers.filter(a => a.occupation === 'Teacher' || a.occupation === 'Police Officer');
// console.log(civilServants);


// PROBLEM 4 - determine the average age of customers

const avgAge = customers.reduce((a,b) => a+b.age,0)/customers.length;
// console.log('average customer age is',avgAge);















// Given the following array...
const names = ["John", "Max", "Ronald"];

// complete the bonuses below...

// - Create an array where all names are given a last name of Smith.
const smith = names.map(a => a + ' Smith');
// console.log(smith);

// - Create an array where each word is in all caps
const allCaps = names.map(a => a.toUpperCase());
// console.log(allCaps);

// - Create an array where all names have more than 3 letters
const moreThan3 = names.filter(a => a.length>3);
// console.log(moreThan3);

// - Create an array of names with only the last two letters of each name
const last2Letters = names.map(a => a.substr(a.length-2));
// console.log(last2Letters);

// - Create a total count of all letters
const totalLetters = names.reduce((a,b) => a + b.length,0);
// console.log(totalLetters);

// - Create a string of all letters in alphabetical order
const alphabetical = names.join('').toLowerCase().split('').sort().join('');
// console.log(alphabetical);

// - Create an array of word objects with properties of wordLength, firstLetter, lastLetter
const wordObj = names.map(a => ({wordLength:a.length, firstLetter:a.charAt(0), lastLetter:a.charAt(a.length-1),}));
// console.log(wordObj);

// - Create a string of all vowels in the entire array of names
const vowels = names.reduce((str, name) => str + name.match(/[aeiou]/g).join(''),'');
// console.log(vowels);









// Given the following array...

const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
    {
        name: "Summer",
        gender: "female",
        age: 10,
    },
    {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];

// complete the bonuses below...
//
// - Calculate the average age of family members

const familyAvgAge = Math.round(family.reduce((a,b) => a+b.age,0)/family.length);
console.log(familyAvgAge);


// - Create an array of family objects without the age property

const newFamilyObj = family.reduce((a,b)=> {a.push({name: b.name,gender: b.gender});
return a
},[]);

// console.log(newFamilyObj);

// - Create an array of all minors

const minors = family.filter( ( {age}) => age<18);
// console.log(minors);

// - Calculate the total age combined of family members

const familyTotalAge = family.reduce((a,b) => a+b.age,0);
// console.log(familyTotalAge);

// - Create an array of only female family member objects

const females = family.filter( ({gender}) => gender ==='female');
// console.log(females);


// - Create a single object with properties containing arrays of all names, genders, and ages


    const output = {
        names: family.map(obj => obj.name),
        genders: family.map(obj => obj.gender),
        ages: family.map(obj => obj.age)
    }

const output = {names: family.map(obj => obj.name), genders: family.map(obj => obj.gender), ages: family.map(obj => obj.age)
};

// console.log(output);














