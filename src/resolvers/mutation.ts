
export function registerUser(obj, { email, password, typ }, { dataloader }) {
  return dataloader.load(['/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, 'type': typ })
  }])
}

export function loginUser(obj, { email, password }, { dataloader }) {
  return dataloader.load(['/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }])
}
