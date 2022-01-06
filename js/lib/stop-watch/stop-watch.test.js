const StopWatch = require('./stop-watch')

describe('StopWatch', () => {
  beforeEach(() => {
    this.fakeNow = new Date()
    jasmine.clock().install()
    jasmine.clock().mockDate(this.fakeNow)
    this.timer = new StopWatch()
  })

  afterEach(() => {
    jasmine.clock().uninstall()
  })

  it('should have a prop `start` equal to fakeNow', () => {
    expect(this.timer.start).toBe(this.fakeNow.getTime())
  })

  it('should have the `start` prop as final (not modifiable)', () => {
    const oldStart = this.timer.start

    this.timer.start = 1

    expect(this.timer.start).toBe(oldStart)
    expect(this.timer.start).not.toBe(1)
  })

  it('should not be extensible', () => {
    const expectedProps = ['start']

    // @ts-ignore
    this.timer.newProp = 'hello'

    const actualProps = Object.getOwnPropertyNames(this.timer)
    expect(actualProps).toEqual(expectedProps)
    // @ts-ignore
    expect(this.timer.newProp).toBeUndefined()
  })

  describe('.elapsedTime()', () => {
    it('should return a number', () => {
      const result = this.timer.elapsedTime()

      expect(typeof result).toBe('number')
    })

    it('should return the elapsed seconds', () => {
      jasmine.clock().tick(10 * 1000) // 10 sec

      const result = this.timer.elapsedTime()

      expect(result).toBe(10)
    })
  })
})
