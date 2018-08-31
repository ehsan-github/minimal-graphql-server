import DataLoader = require('dataloader')
import fetch = require('node-fetch')

export default new DataLoader(keys => Promise.all(keys.map(
  async ([url, opt, format = 'json']) => {
    const response = await fetch(url, opt)
    switch (format) {
      case 'json':
        return await response.json()
      default:
        throw new Error('Undefined format: ' + format)
    }
  }
)))
