async function editFormHandler(event) {
    event.preventDefault();
    
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const post_content = document.querySelector('textarea[name="post-content"]').value;

    if (title && post_content) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          title,
          post_content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    } else {
      alert('Please enter a title and post contents');
    };
};  

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);