exports.handler = (event, context, callback) => {
  console.log('two')
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      cool: 'two'
    })
  })
}
