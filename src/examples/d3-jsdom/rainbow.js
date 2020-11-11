const http = require('http')
const d3 = require('d3')
const { JSDOM } = require('jsdom')

const PORT = 8083

/**
 * D3JSDOM
 * @classdesc Example of a D3 drawing + JSDOM
 * @see {@link https://gist.github.com/palanik/ba5e15dbbc7ea0574ae0d38252563b0d}
 */
class D3JSDOM {
  /**
   * Returns a new DOM
   */
  static createDOM () {
    return (new JSDOM('<!DOCTYPE html><body></body>')).window.document
  }

  /**
   * Creates and appends an SVG element.
   * @param {*} el The node element to append the SVG to.
   * @param {number} width The SVG Width.
   * @param {number} height The SVG height.
   * @returns {*} The SVG node appended
   */
  static createSVG (el, width, height) {
    return el.append('svg')
      .attr('xmlns', 'http://www.w3.org/2000/svg')
      .attr('width', width)
      .attr('height', height)
  }

  /**
   * Generates a beautiful Rainbow drawing with D3
   * @returns {*} SVG Markup
   */
  static getD3Draw () {
    const τ = 2 * Math.PI
    const n = 500
    const width = 720
    const height = 720
    const outerRadius = width / 2 - 20
    const innerRadius = outerRadius - 100
    const dom = D3JSDOM.createDOM()
    const body = d3.select(dom.querySelector('body'))
    const svg = D3JSDOM.createSVG(body, width, height)

    svg
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)
      .selectAll('path')
      .data(d3.range(0, τ, τ / n))
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .outerRadius(outerRadius)
        .innerRadius(innerRadius)
        .startAngle(d => d)
        .endAngle(d => d + τ / n * 1.1))
      .style('fill', d => d3.hsl(d * 360 / τ, 1, 0.5))

    return body.html()
  }

  /**
   * Runs an HTTP Server to serve a D3 drawing on `PORT`.
   * @example
   * ```sh
   * $ node d3-jsdom.js
   * Server listening on http://localhost:8083
   * ```
   */
  static main () {
    http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'image/svg+xml' })
      res.end(D3JSDOM.getD3Draw())
    }).listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))
  }
}

// Execution
// ==============================
if (require.main === module) D3JSDOM.main()
