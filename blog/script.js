let users = JSON.parse(localStorage.getItem('users')) || [];
let posts = JSON.parse(localStorage.getItem('posts')) || [];

function signup() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (users.find(u => u.username === user)) return alert('User exists');
  users.push({ username: user, password: pass });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Signed up!');
}

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const found = users.find(u => u.username === user && u.password === pass);
  if (found) {
    localStorage.setItem('loggedInUser', user);
    alert('Logged in');
    location.reload();
  } else {
    alert('Invalid credentials');
  }
}

function logout() {
  localStorage.removeItem('loggedInUser');
  location.reload();
}

function createPost() {
  const title = document.getElementById('post-title').value;
  const content = document.getElementById('post-content').value;
  const author = localStorage.getItem('loggedInUser');
  if (!title || !content) return alert('Fill all fields');
  const post = { id: Date.now(), title, content, author };
  posts.push(post);
  localStorage.setItem('posts', JSON.stringify(posts));
  displayPosts();
}

function displayPosts() {
  const container = document.getElementById('posts');
  container.innerHTML = '';
  posts.forEach(p => {
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = `
      <h3><a href="blog.html?id=${p.id}">${p.title}</a></h3>
      <p>By ${p.author}</p>
    `;
    container.appendChild(post);
  });
}

function setupUI() {
  const user = localStorage.getItem('loggedInUser');
  document.getElementById('welcome').innerText = user ? `Welcome, ${user}` : '';
  document.getElementById('create-post').style.display = user ? 'block' : 'none';
}

setupUI();
displayPosts();
