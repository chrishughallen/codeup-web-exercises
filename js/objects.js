(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {

        firstName: 'Chris',
        lastName: 'Allen'
    };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        return 'Hello ' + person.firstName + ' ' + person.lastName
    };

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (discount) {
        if (discount.amount > 200) {
            console.log(discount.name + ' spent $' + discount.amount + '. ' + discount.name + ' gets a 12% discount which is $' + (discount.amount * .12).toFixed(2) + '. Making the total ' + (discount.amount - (discount.amount * .12)).toFixed(2) + '.')
        }
        else {
            console.log(discount.name + ' spent ' + discount.amount + '. That doesn\'t qualify for the discount.')
        }
    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [


        {
            title: 'Fear and Loathing in Las Vegas',
            author: {
                firstName: 'Hunter',
                lastName: 'Thompson'
            }
        },
        {
            title: 'The Four Agreements',
            author: {
                firstName: 'Don Miguel',
                lastName: 'Ruiz'
            }
        },
        {
            title: 'The Subtle art of not giving a f**k',
            author: {
                firstName: 'Marc',
                lastName: 'Maron'
            }
        },
        {
            title: '1984',
            author: {
                firstName: 'George',
                lastName: 'Orwell'
            }
        },
        {
            title: 'Brave New World',
            author: {
                firstName: 'Aldous',
                lastName: 'Huxley'
            }
        }
    ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (info, index) {

        console.log('Book # ' + (index + 1) + '\n' + 'Title: ' + info.title + '\n' + 'Author: ' + info.author.firstName + ' ' + info.author.lastName);


        /**
         * Bonus:
         * - Create a function named `createBook` that accepts a title and author
         *   name and returns a book object with the properties described
         *   previously. Refactor your code that creates the books array to instead
         *   use your function.
         * - Create a function named `showBookInfo` that accepts a book object and
         *   outputs the information described above. Refactor your loop to use your
         *   `showBookInfo` function.
         */



        var books = [];

        function createBook() {

            var title = prompt('What is the name of the book?');
            var author = prompt('Who wrote it?');
            var authorName = (author.split(' '));

            var book = {
                title: title,
                author: {
                    firstName: authorName[0],
                    lastName: authorName[1]
                }

            };


            books.push(book);


        }
    })

    })()


    var books = [];

    function createBook() {

        var title = prompt('What is the name of the book?');
        var author = prompt('Who wrote it?');
        var authorName = (author.split(' '));

        var book = {
            title: title,
            author: {
                firstName: authorName[0],
                lastName: authorName[1]
            }

        };


        books.push(book);


    }
















