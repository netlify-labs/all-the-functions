exports.handler = (event, context, callback) => {
  console.log('1-normal-function')
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      cool: 'two'
    })
  })
}
