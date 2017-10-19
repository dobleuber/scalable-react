export function createLink({ topicName, url, description }) {
  return fetch(`http://localhost:3000/api/topics/${topicName}/links`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url, description, topicName,
    }),
  }).then(response => response.json());
}

export function voteLink({ id, email }) {
  return fetch(`http://localhost:3000/api/links/${id}/vote`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      increment: 1,
    }),
  }).then(response => response.json());
}
