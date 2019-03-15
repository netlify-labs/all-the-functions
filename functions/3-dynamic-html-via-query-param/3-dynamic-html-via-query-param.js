
exports.handler = async (event, context) => {
  const userName = event.queryStringParameters && event.queryStringParameters.name

  const html = (name = 'there') => {
    return `
    <html lang="en">
      <head>
        <meta charset="utf-8">
      </head>
      <body>
        <h1>Hi ${name}</h1>
      </body>
    </html>`
  }

  return {
    'statusCode': 200,
    'headers': {
      'Cache-Control': 'no-cache',
      'Content-Type': 'text/html',
    },
    'body': html(userName)
  }
}
