

// const url = fetch('http://127.0.0.1:5501/data.json')
// const url = 'http://127.0.0.1:5501/data.json'
// const response = await fetch('http://127.0.0.1:5501/data.json');
// const commits = await response.json();
// alert(commits[0].author.login);

// .then(response => response.json())
// .then(data => console.log(data))



fetch('http://127.0.0.1:5501/data.json')
    .then(response => response.json())
    .then(result => {
        // console.log(result.photographers[0].name)
        // console.log(result.photographers[1].name)
        // for (var i = 0; i < result.photographers.length; i++) {
        //     console.log(result.photographers[i].name)
        //     console.log(result)
        // }
        result.photographers.forEach(photographer => {
            console.log(photographer.name);
        });
    }
    )



// fetch('http://127.0.0.1:5501/data.json')
//     .then(response => response.json())
//     .then(result => console.log(result.photographers[0].tags[0]))



