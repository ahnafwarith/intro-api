function getData() {
    //taking the code from a server
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        //declaring an arrow function that turns the data into json format
        .then(response => response.json())
        //taking the json converted data as parameter and printing in console.
        .then(data => console.log(data))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => loadData(data))
}

function loadData(data) {
    const ul = document.getElementById('ul')
    for (const user of data) {
        const li = document.createElement('li')
        li.innerText = `name: ${user.name}
        email: ${user.email}`
        ul.appendChild(li);
    }
}