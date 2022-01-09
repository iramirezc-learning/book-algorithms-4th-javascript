const UnionFindWeighted = require('./union-find-weighted')

describe('UnionFindWeighted', () => {
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
    this.wuf = new UnionFindWeighted(this.sites)
  })

  it('should have a prop `id` which is an array initialized with different components', () => {
    const expectedIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    expect(this.wuf.id).toEqual(expectedIds)
  })

  it('should have a prop `size` which is an array initialized to 1', () => {
    const expectedSizes = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    expect(this.wuf.size).toEqual(expectedSizes)
  })

  it('should have a property `_count` equal to the number of sites', () => {
    expect(this.wuf._count).toBe(this.sites)
  })

  it('should not be extensible', () => {
    const expectedProps = ['id', 'size', '_count']

    // @ts-ignore
    this.wuf.newProp = 'hello'

    const actualProps = Object.getOwnPropertyNames(this.wuf)
    expect(actualProps).toEqual(expectedProps)
    // @ts-ignore
    expect(this.wuf.newProp).toBeUndefined()
  })

  describe('.count()', () => {
    it('should return the count to be the initial components count', () => {
      expect(this.wuf.count()).toBe(this.sites)
    })
  })

  describe('.find()', () => {
    it('should return the same component id as the site index when initialized', () => {
      const sites = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      sites.forEach((site, index) => {
        expect(this.wuf.find(site)).toBe(index)
      })
    })

    it('should return the new component id if changed for a site', () => {
      const siteIndex = 0
      const newComponentId = 5
      this.wuf.id[siteIndex] = newComponentId // change the componentId for site 0

      expect(this.wuf.find(siteIndex)).toBe(newComponentId)
    })
  })

  describe('.connected()', () => {
    it('should return true if `p` and `q` have the same component id', () => {
      const p = 0 // first site
      const q = 9 // last site
      this.wuf.id[0] = 9 // force site with index 0 to have the same component id as site with index 9

      expect(this.wuf.connected(p, q)).toBeTrue()
    })

    it('should return false if `p` and `q` have different components id', () => {
      const p = 0 // first site with component id = 0
      const q = 9 // last site with component id = 9

      expect(this.wuf.connected(p, q)).toBeFalse()
    })
  })

  describe('.union()', () => {
    it('should connect two sites by assigning them the same component id', () => {
      const p = 0 // first site
      const q = 9 // last site
      const expectedIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 0]

      this.wuf.union(p, q)

      expect(this.wuf.id).toEqual(expectedIds)
    })

    it('should decrement the count of components by 1', () => {
      const expectedCount = this.sites - 1

      this.wuf.union(3, 4)

      expect(this.wuf.count()).toBe(expectedCount)
    })

    it('should do nothing when sites are already connected', () => {
      const p = 2 // 3rd site
      const q = 5 // 6th site
      const expectedIds = [0, 1, 2, 3, 4, 2, 6, 7, 8, 9]
      const expectedCount = this.sites - 1

      this.wuf.union(p, q)
      this.wuf.union(q, p)

      expect(this.wuf.id).toEqual(expectedIds)
      expect(this.wuf.count()).toBe(expectedCount)
    })

    it('should connect the pairs given returning a total of 2 components', () => {
      const expectedCount = 2

      this.pairs.forEach(([p, q]) => {
        this.wuf.union(p, q)
      })

      expect(this.wuf.count()).toBe(expectedCount)
    })

    it('should update all the component ids', () => {
      //            sites [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const expectedIds = [6, 2, 6, 4, 4, 6, 6, 2, 4, 4]

      this.pairs.forEach(([p, q]) => {
        this.wuf.union(p, q)
      })

      expect(this.wuf.id).toEqual(expectedIds)
    })

    it('should increment the size for each index', () => {
      //              sites [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const expectedSizes = [1, 1, 3, 1, 4, 1, 6, 1, 1, 1]

      this.pairs.forEach(([p, q]) => {
        this.wuf.union(p, q)
      })

      expect(this.wuf.size).toEqual(expectedSizes)
    })
  })
})
