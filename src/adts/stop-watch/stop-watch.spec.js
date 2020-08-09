const StopWatch = require('./stop-watch')

describe('Unit Tests: StopWatch ADT', () => {
  describe('instance', () => {
    beforeEach(() => {
      this.fakeNow = new Date()
      jasmine.clock().install()
      jasmine.clock().mockDate(this.fakeNow)
      this.timer = new StopWatch()
    })

    afterEach(() => {
      jasmine.clock().uninstall()
    })

    describe('when initialized:', () => {
      it('should have a prop `_start` equal to fakeNow', () => {
        expect(this.timer._start).toBe(this.fakeNow.getTime())
      })

      it('should have the `_start` prop as final (not modifiable)', () => {
        const oldStart = this.timer._start

        this.timer._start = 1

        expect(this.timer._start).toBe(oldStart)
      })

      it('should not be extensible', () => {
        const expectedProps = ['_start']

        this.timer.newProp = 'hello'

        const actualProps = Object.getOwnPropertyNames(this.timer)
        expect(actualProps).toEqual(expectedProps)
        expect(this.timer.newProp).toBeUndefined()
      })
    })

    describe('elapsedTime method', () => {
      it('should return a number', () => {
        const expectedType = 'number'

        const result = this.timer.elapsedTime()

        expect(typeof result).toBe(expectedType)
      })

      it('should return the elapsed seconds', () => {
        jasmine.clock().tick(10 * 1000) // 10 sec

        const result = this.timer.elapsedTime()

        expect(result).toBe(10)
      })
    })
  })
})
