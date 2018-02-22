'use strict';



const users = [];

//first data set ajax request - each item from response object pushed into users array
$.ajax('data/mock_data_1.json').done(function(a){
    a.forEach(function(a){
        users.push(a);
    });

    //second data set ajax request - each item from response object pushed into users array
    $.ajax('data/mock_data_2.json').done(function(a){
        a.forEach(function(a){
            users.push(a);
        });
        console.log(users);
        //getPrices function will execute once second data request has returned.
        getPrices();


    });
});

let totalPrices;

const getPrices = totalPrices =>{

    //returns just the prices from the object without the dollar sign and as a number;
    totalPrices = users.map(function(user) {
        return Number(user.price.substr(1));

        //reduce the new array of prices to one single value and define it as totalPrices
    }).reduce(function(accum,user){return accum+user},0).toFixed(2);
    console.log('Total price of users cars comes to', totalPrices);
};


// obj = users
// key = shirt_size

const shirtSizes = users.reduce((obj,key) => {


},{});