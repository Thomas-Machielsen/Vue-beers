const postData = (url, data) => fetch(url, { // eslint-disable-line  no-undef
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json',
  },
}).then(res => res.json())
  .catch(error => error)
  .then(response => response);

export default postData;
