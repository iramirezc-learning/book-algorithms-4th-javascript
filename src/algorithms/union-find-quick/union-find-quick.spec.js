const UFQ = require('./union-find-quick')

describe('Unit Tests: Union Find Quick Algorithm', () => {
  beforeEach(() => {
    this.sites = 10
    this.pairs = [
      [4, 3],
      [3, 8],
      [6, 5],
      [9, 4],
      [2, 1],
      [8, 9],
      [5, 0],
      [7, 2],
      [6, 1],
      [1, 0],
      [6, 7]
    ]
    this.ufq = new UFQ(this.sites)
  })

  describe('when initialized', () => {
    it('should have a prop `_id` which is an array initialized with different components', () => {
      const expectedIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      expect(this.ufq._id).toEqual(expectedIds)
    })

    it('should have a property `_count` equal to the number of sites', () => {
      expect(this.ufq._count).toBe(this.sites)
    })

    it('should not be extensible', () => {
      const expectedProps = ['_id', '_count']

      this.ufq.newProp = 'hello'

      const actualProps = Object.getOwnPropertyNames(this.ufq)
      expect(actualProps).toEqual(expectedProps)
      expect(this.ufq.newProp).toBeUndefined()
    })
  })

  describe('count method', () => {
    it('should return the count to be the initial components count', () => {
      expect(this.ufq.count()).toBe(this.sites)
    })
  })

  describe('find method', () => {
    it('should return the same component id as the site index when initialized', () => {
      const sites = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      sites.forEach((site, index) => {
        expect(this.ufq.find(site)).toBe(index)
      })
    })

    it('should return the new component id if changed for a site', () => {
      const siteIndex = 0
      const newComponentId = 5
      this.ufq._id[siteIndex] = newComponentId // change the componentId for site 0

      expect(this.ufq.find(siteIndex)).toBe(newComponentId)
    })
  })

  describe('connected method', () => {
    it('should return true if `p` and `q` have the same component id', () => {
      const p = 0 // first site
      const q = 9 // last site
      this.ufq._id[0] = 9 // force site with index 0 to have the same component id as site with index 9

      expect(this.ufq.connected(p, q)).toBeTrue()
    })

    it('should return false if `p` and `q` have different components id', () => {
      const p = 0 // first site with component id = 0
      const q = 9 // last site with component id = 9

      expect(this.ufq.connected(p, q)).toBeFalse()
    })
  })

  describe('union method', () => {
    it('should connect two sites by assigning them the same component id', () => {
      const p = 0 // first site
      const q = 9 // last site
      const expectedIds = [9, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      this.ufq.union(p, q)

      expect(this.ufq._id).toEqual(expectedIds)
    })

    it('should decrement the count of components by 1', () => {
      const expectedCount = this.sites - 1

      this.ufq.union(3, 4)

      expect(this.ufq.count()).toBe(expectedCount)
    })

    it('should do nothing when sites are already connected', () => {
      const p = 2 // 3rd site
      const q = 5 // 6th site
      const expectedIds = [0, 1, 5, 3, 4, 5, 6, 7, 8, 9]
      const expectedCount = this.sites - 1

      this.ufq.union(p, q)
      this.ufq.union(q, p)

      expect(this.ufq._id).toEqual(expectedIds)
      expect(this.ufq.count()).toBe(expectedCount)
    })

    it('should connect the pairs given returning a total of 2 components', () => {
      const expectedCount = 2

      this.pairs.forEach(([p, q]) => {
        this.ufq.union(p, q)
      })

      expect(this.ufq.count()).toBe(expectedCount)
    })

    it('should update all the component ids', () => {
      //            sites [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const expectedIds = [1, 1, 1, 8, 3, 0, 5, 1, 8, 8]

      this.pairs.forEach(([p, q]) => {
        this.ufq.union(p, q)
      })

      expect(this.ufq._id).toEqual(expectedIds)
    })
  })
})
