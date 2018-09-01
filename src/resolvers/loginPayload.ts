
export function user({ access_token }, args, { dataloader }) {
  return dataloader.load(['/api/user/profile', {
    headers: {
      'Authorization': 'Bearer ' + access_token
    }
  }])
}
