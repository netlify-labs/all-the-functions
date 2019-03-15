exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      response: 'hi',
      key: process.env.FAUNADB_SERVER_SECRET
    })
  }
}
