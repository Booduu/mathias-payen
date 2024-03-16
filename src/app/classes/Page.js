import Prefix from 'Prefix'
import each from 'lodash/each'
import GSAP from 'gsap'

function lerp(p1, p2, t) {
  return p1 + (p2 - p1) * t
}
export default class Page {
  constructor({ element, elements }) {
    this.selector = element
    this.selectorChildren = {
      ...elements
    }

    this.transformPrefix = Prefix('transform')
  }

  create() {
    this.element = document.querySelector(this.selector)
    this.elements = {}

    this.scroll = {
      current: 0,
      target: 0,
      last: 0,
      limit: 1000
    }

    each(this.selectorChildren, (entry, key) => {
      if (
        entry instanceof window.HTMLElement ||
        entry instanceof window.NodeList ||
        Array.isArray(entry)
      ) {
        this.elements[key] = entry
      } else {
        this.elements[key] = document.querySelectorAll(entry)

        if (this.elements[key].length === 0) {
          this.elements[key] = null
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry)
        }
      }
    })
  }

  onWheel({ pixelY }) {
    this.scroll.target += pixelY
  }

  update() {
    // infinite scroll on y
    if (this.scroll.current > this.scroll.target) {
      this.direction = 'up'
    } else if (this.scroll.current < this.scroll.target) {
      this.direction = 'down'
    }

    this.scroll.target = GSAP.utils.clamp(
      -1000,
      this.scroll.limit,
      this.scroll.target
    )

    this.scroll.current = GSAP.utils.interpolate(
      this.scroll.current,
      this.scroll.target,
      0.1
    )

    // if (this.scroll.current < 0.01) {
    //   this.scroll.current = 0
    // }

    // if (this.elements.wrapper) {
    //   this.elements.wrapper.style[this.transformPrefix] =
    //     `translateY(-${Math.round(this.scroll.current)}px)`
    // }
  }
}
