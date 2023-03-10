const searchInput = document.getElementById('search-input');
const posts = Array.from(document.getElementsByClassName('post'));

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  
  posts.forEach((post) => {
    const title = post.querySelector('h2').textContent.toLowerCase();
    const content = post.querySelector('p').textContent.toLowerCase();
    
    if (title.includes(searchTerm) || content.includes(searchTerm)) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
});