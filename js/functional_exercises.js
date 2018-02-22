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

        //getPrices function will execute once second data request has returned.
        getPrices();
    });
});


// function to map all prices from objects into one array and then reduce them to one total value

let totalPrices;

const getPrices = totalPrices =>{

    //returns just the prices from the object minus the dollar sign and as a number;
    totalPrices = users.map(function(user) {
        return Number(user.price.substr(1));

        //reduce the new array of prices to one single value and define it as totalPrices
    }).reduce(function(accum,user){return accum+user},0).toFixed(2);
    console.log(totalPrices);
};