function showMultiplicationTable(num){

    for (var i = 1;i<=10;i++){
        console.log(num + ' x ' + i + ' = ' + (i*num))
    }

}

showMultiplicationTable(7);


console.log("***********************************")

for (var i = 1; i<=10; i++){
    var j = Math.floor(Math.random() * 180) + 20;
    if (j % 2 == 0){
        console.log(j + ' is even')
    }
    else if(j % 2 != 0){
        console.log(j + ' is odd')
    }
}

console.log("***********************************")

for (var i = 100; i>=5; i-=5){
    console.log(i);
}



// Each iteration should add an additional digit to the output string that is equal to whatever iteration the loop is on.
console.log("***********************************")

for (var i = 0; i<10; i++) {
    i = i.toString();
    console.log(i.repeat(i));
}
