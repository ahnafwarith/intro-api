function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayUsers(data))
}
loadPosts();
function displayUsers(posts) {
    console.log(posts);
}