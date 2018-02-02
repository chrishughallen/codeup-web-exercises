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











