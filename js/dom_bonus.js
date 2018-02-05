(function listMaker() {
document.body.innerHTML = ('<ul>')
    do {
        var choice = confirm('Would you like to add an item to the list?');

        if (choice) {
            var item = prompt('What would you like to add?');
            document.body.innerHTML += ('<li class="list_item">' + (item) + '</li>');

        }
    }
    while(choice);
    var list = document.querySelectorAll('.list_item');
    for (var i = 0; i<list.length;i++){
        list[i].style.color = 'blue'
        console.log(list)
    }
document.body.innerHTML += ('</ul>')
})();




