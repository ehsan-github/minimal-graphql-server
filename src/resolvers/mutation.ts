
const FormData = require('form-data');

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

export function requestResetPassword(obj, { email }, { dataloader }) {
  let form = new FormData();
  form.append('email', email);
  return dataloader.load(['/api/auth/password/send-link', {
    method: 'POST',
    body: form
  }])
}

export function resetPassword(obj, { code, password }, { dataloader }) {
  let form = new FormData();
  form.append('code', code);
  form.append('password', password);
  return dataloader.load(['/api/auth/password/reset', {
    method: 'POST',
    body: form
  }])
}

export function changePassword(obj, { access_token, password }, { dataloader }) {
  let form = new FormData();
  form.append('password', password);
  return dataloader.load(['/api/auth/password/change', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + access_token,
      'Content-Type': 'text/html; charset=UTF-8'
    },
    body: form
  }])
}

export function uploadAvatar(obj, { access_token, avatar }, { dataloader }) {
  return dataloader.load(['/api/user/profile/avatar', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + access_token
    },
    body: avatar
  }])
}
