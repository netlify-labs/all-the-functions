
exports.handler = async (event, context) => {
  return {
    statusCode: 302,
    headers: {
      Location: 'https://google.com',
      'Cache-Control': 'no-cache',
    },
    body: JSON.stringify({})
  }
}
