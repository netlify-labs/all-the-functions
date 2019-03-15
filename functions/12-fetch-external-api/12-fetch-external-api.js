const fetch = require('node-fetch')

/* Get IP address https://www.ipify.org/ */
const API_ENDPOINT = 'https://api.ipify.org?format=json'

exports.handler = async (event, context) => {
  try {
    const data = await fetch(API_ENDPOINT, {
      method: 'GET',
    }).then(response => response.json())
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (e) {
    return {
      statusCode: 422,
      body: JSON.stringify({
        e: e.message
      })
    }
  }
}
