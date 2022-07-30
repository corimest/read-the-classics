async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  
  const response = await fetch(`/api/books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.status === 200) {
    window.location.href = '/';
  }
}

document.querySelector('.delete-book-btn').addEventListener('click', deleteFormHandler);