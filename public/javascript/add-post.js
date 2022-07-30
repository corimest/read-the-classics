async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const summary = document.querySelector('#summary').value;
  const image_url = document.querySelector('#image_link').value;
  const category = document.querySelector('#category').value;

  const response = await fetch(`/api/books`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      author,
      category,
      summary,
      image_url
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-book-form').addEventListener('submit', newFormHandler);
