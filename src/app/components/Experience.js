import Animation from '../classes/Animation'
import Prefix from 'Prefix'
export default class Experience extends Animation {
  constructor({ element, index, top }) {
    super({ element })
    this.element = document.querySelector('.experiences')
    this.element = element
    this.index = index
    this.top = top
    this.translateY = 0

    this.transformPrefix = Prefix('transform')

    this.create()
    this.update()
  }

  animateOut(entry) {}

  animateIn(entry) {}

  create() {
    this.element.style.top = `${this.top}px`
  }

  onResize() {
    this.element.style.top =
      this.element.getBoundingClientRect().height * this.index
    console.log('resize xp oo')
  }

  updateTranslateY(position) {}

  update(direction, scroll, wrapperHeight) {
    if (direction === 'up') {
      if (this.element.getBoundingClientRect().top < -100) {
        this.translateY += wrapperHeight
      }
    }

    if (direction === 'down') {
      if (
        this.element.getBoundingClientRect().bottom >
        window.innerHeight + 100
      ) {
        this.translateY -= wrapperHeight
      }
    }

    this.element.style[this.transformPrefix] =
      `translateY(${scroll?.current + this.translateY}px)`
  }
}
