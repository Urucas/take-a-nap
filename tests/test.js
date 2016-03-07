import chai from 'chai'
import { sleep, nap } from "../lib/"

chai.should()
const expect = chai.expect
const assert = chai.assert

const timestamp = _ => {
  return (new Date()).getTime()
}

describe("Test ", _ => {
  
  it("test sleep returns a promise", done => {
    expect(sleep).to.be.a("function")
    const isIt = sleep() instanceof Promise
    isIt.should.equal(true)
    done()
  })
  
  it("test nap await", async function(done) {
    expect(nap).to.be.a("function")
    const t1 = timestamp()
    await nap(3000)
    const t2 = timestamp()
    assert.isAbove(t2-t1, 3000, "test time diff is greater than 300")
    done()
  })

})
