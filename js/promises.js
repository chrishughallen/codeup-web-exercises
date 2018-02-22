const wait = (num) =>{
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
           resolve();
        },num);
    });
};

wait(1000).then(() => console.log('You\'ll see this after 1 second'));

wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


const lastCommit = (username) => {

    //fetching JSON object from github with the passed in username
    fetch(`https://api.github.com/users/${username}/events/public`, {
        headers: {
            'Authorization': 'token '
        }

    //if promise resolves - turn the response into response.json to dig into the object
    }).then(response => response.json()

        //dig deeper into object to return last commit data and log the string below
        .then(data => {
            console.log(`${username}'s last commit was made on ${data[0].created_at.substring(0,10)}`)

        //if promise rejects - log the error 'BAD REQUEST'
        })).catch(() => console.error("BAD REQUEST"))};

