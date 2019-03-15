const faker = require('faker')

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      cool: faker.name.findName()
    })
  }
}
