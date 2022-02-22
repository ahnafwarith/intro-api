function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayUsers(data))
}
loadPosts();
function displayUsers(posts) {
    const sec = document.getElementById('sect');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        sec.appendChild(div)
    }
}