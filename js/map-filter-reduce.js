const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];


let over3 = users.filter(function(n){
    return n.languages.length>=3
});

console.log(over3);

let emails = users.map(function(a){
    return a.email
});
console.log(emails);



//a represents previous(first) object in array and b represents the current (object) the loop is on

let values = users.reduce((a,b)=> { a[b.id] = b; return a; }, {});

console.log(values);
