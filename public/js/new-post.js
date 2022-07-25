const btnContainer = document.querySelector('.new-post-btn-container');
const newPostCard = document.querySelector('#new-post-card');

const displayToggle = (event) => {
    newPostCard.removeAttribute('hidden');
    btnContainer.setAttribute('hidden', '');
};

// file that the dashboard uses to create new posts
async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('textarea[name="post-content"]').value;
    
    if (title && post_content) {
        const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
        });
    
        if (response.ok) {
            btnContainer.removeAttribute('hidden');
            newPostCard.setAttribute('hidden', '');
            document.location.replace('/dashboard');
        } else {
        alert('Failed to create new post');
        }
    } else {
        alert('Please enter a title and fill out post contents');
    }
}
  
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
document.querySelector('#new-post-btn').addEventListener('click', displayToggle); 