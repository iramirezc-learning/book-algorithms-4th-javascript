const UnionFind = require('./union-find')

describe('UnionFind', () => {
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
    this.uf = new UnionFind(this.sites)
  })

  it('should have a prop `id` which is an array initialized with different components', () => {
    const expectedIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    expect(this.uf.id).toEqual(expectedIds)
  })

  it('should have a property `_count` equal to the number of sites', () => {
    expect(this.uf._count).toBe(this.sites)
  })

  it('should not be extensible', () => {
    const expectedProps = ['id', '_count']

    // @ts-ignore
    this.uf.newProp = 'hello'

    const actualProps = Object.getOwnPropertyNames(this.uf)
    expect(actualProps).toEqual(expectedProps)
    // @ts-ignore
    expect(this.uf.newProp).toBeUndefined()
  })

  describe('.count()', () => {
    it('should return the count to be the initial components count', () => {
      expect(this.uf.count()).toBe(this.sites)
    })
  })

  describe('.find()', () => {
    it('should return the same component id as the site index when initialized', () => {
      const sites = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      sites.forEach((site, index) => {
        expect(this.uf.find(site)).toBe(index)
      })
    })

    it('should return the new component id if changed for a site', () => {
      const siteIndex = 0
      const newComponentId = 5
      this.uf.id[siteIndex] = newComponentId // change the componentId for site 0

      expect(this.uf.find(siteIndex)).toBe(newComponentId)
    })
  })

  describe('.connected()', () => {
    it('should return true if `p` and `q` have the same component id', () => {
      const p = 0 // first site
      const q = 9 // last site
      this.uf.id[0] = 9 // force site with index 0 to have the same component id as site with index 9

      expect(this.uf.connected(p, q)).toBeTrue()
    })

    it('should return false if `p` and `q` have different components id', () => {
      const p = 0 // first site with component id = 0
      const q = 9 // last site with component id = 9

      expect(this.uf.connected(p, q)).toBeFalse()
    })
  })

  describe('.union()', () => {
    it('should connect two sites by assigning them the same component id', () => {
      const p = 0 // first site
      const q = 9 // last site
      const expectedIds = [9, 1, 2, 3, 4, 5, 6, 7, 8, 9]

      this.uf.union(p, q)

      expect(this.uf.id).toEqual(expectedIds)
    })

    it('should decrement the count of components by 1', () => {
      const expectedCount = this.sites - 1

      this.uf.union(3, 4)

      expect(this.uf.count()).toBe(expectedCount)
    })

    it('should do nothing when sites are already connected', () => {
      const p = 2 // 3rd site
      const q = 5 // 6th site
      const expectedIds = [0, 1, 5, 3, 4, 5, 6, 7, 8, 9]
      const expectedCount = this.sites - 1

      this.uf.union(p, q)
      this.uf.union(q, p)

      expect(this.uf.id).toEqual(expectedIds)
      expect(this.uf.count()).toBe(expectedCount)
    })

    it('should connect the pairs given returning a total of 2 components', () => {
      const expectedCount = 2

      this.pairs.forEach(([p, q]) => {
        this.uf.union(p, q)
      })

      expect(this.uf.count()).toBe(expectedCount)
    })

    it('should update all the component ids', () => {
      //            sites [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      const expectedIds = [1, 1, 1, 8, 8, 1, 1, 1, 8, 8]

      this.pairs.forEach(([p, q]) => {
        this.uf.union(p, q)
      })

      expect(this.uf.id).toEqual(expectedIds)
    })
  })
})
