    function newToDo() {
        document.body.innerHTML += ('<ol>')

                var item = prompt('What would you like to add?');
                document.body.innerHTML += ('<li class="list_item">' + (item) + '</li>');

        var list = document.querySelectorAll('.list_item');
        for (var i = 0; i<list.length;i++){
            list[i].style['fontSize'] = ('25px');
            list[i].style['font-family'] = ('sans-serif');
            console.log(list)
        }
        document.body.innerHTML += ('</ol>')
    };

    


var colorHex = ['a','a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];

var randomColor = [];

function getRandomBgColor(){

do{
    randomNum = Math.round(Math.random()*17);
    randomNum = randomNum.toString().toUpperCase();

    randomColor.push(colorHex[randomNum])
}

while(randomColor.length!=6);
randomColor = '#' + randomColor.join('')

document.body.bgColor = randomColor;
randomColor = []

}

function removeItem(){
    var choice = prompt ('What item would you like to remove? Enter the item number')


}



