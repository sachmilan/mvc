async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_content = document.querySelector('textarea[name="comment-body"]').value.trim();
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
 
    if (comment_content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },    
            body: JSON.stringify({
                post_id,
                comment_content
            }),
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert('Failed to add comment');
        }
    } else { 
        alert('Please enter a comment');
    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);