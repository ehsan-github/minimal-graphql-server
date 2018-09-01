import DataLoader = require('dataloader')
import fetch = require('node-fetch')

const base_url = 'https://dev.immiwork.com/back'

export default new DataLoader(keys => Promise.all(keys.map(
  async ([url, opt, format = 'json']) => {
    const response = await fetch(base_url + url, opt)
    if (!response.ok) throw new Error(response.statusText)
    switch (format) {
      case 'json':
        return await response.json()
      default:
        throw new Error('Undefined format: ' + format)
    }
  }
)))
