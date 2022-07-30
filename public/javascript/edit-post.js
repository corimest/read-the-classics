async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const summary = document.querySelector('#summary').value;
  const image_url = document.querySelector('#image_link').value;
  const category = document.querySelector('#category').value;

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const response = await fetch(`/api/books/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      author,
      summary,
      image_url,
      category
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-book-form').addEventListener('submit', editFormHandler);
