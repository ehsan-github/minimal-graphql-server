
export function user(obj, { accessToken }, { dataloader }) {
  return dataloader.load(['/api/user/profile', {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  }])
}

export function loginUserQuery(obj, { email, password }, { dataloader }) {
  return dataloader.load(['/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }])
}
