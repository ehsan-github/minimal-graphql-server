
export function user(obj, { accessToken }, { dataloader }) {
  return dataloader.load(['/api/user/profile', {
    headers: {
      Authorization: 'Bearer ' + accessToken
    }
  }])
}
