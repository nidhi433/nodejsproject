// test/app.spec.js
const assert = require('assert')
const {add} = require('./handler')

describe('add function', () => {
  it('should add two numbers correctly', async() => {
    const event={a:2,b:3}
    const result = await add(event)
    const code=result.statusCode
    assert.strictEqual(code, 200)
  })

  // it('should return 0 when adding 0 and 0', async() => {
  //   const event={a:0,b:0}
  //   result = await add(event)
  //   assert.strictEqual(result, 0)
  // })
})
