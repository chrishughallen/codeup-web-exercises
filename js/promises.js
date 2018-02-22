function wait (num){

    return new Promise ((resolve,reject) =>{
        setTimeout(() =>{
           resolve();
        },num);
    });
}
wait(1000).then(() => console.log('You\'ll see this after 1 second'));

wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


const lastCommit = (username) => {
    fetch(`https://api.github.com/users/${username}/events/public`,{headers:
            {'Authorization':'token d839179408299e3666bcddeab9e99b540e00fd6c'}
    }).then(response => response.json()
        .then(data => {
            console.log(`${username}'s last commit was made on ${data[0].created_at.substring(0,10)}`)
        })).catch(() => console.error("BAD REQUEST"))};



