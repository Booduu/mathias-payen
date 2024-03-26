import Animation from '../classes/Animation'
import Prefix from 'Prefix'
import GSAP from 'gsap'

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

  animateOut(entry) {
    // GSAP.to(entry.target, { autoAlpha: 0, duration: 0.5 })
  }

  async animateIn(entry) {
    GSAP.fromTo(
      entry.target,
      {
        autoAlpha: 0,
        duration: 1
      },
      {
        autoAlpha: 1,
        duration: 1
        // ease: 'expo.out'
      }
    )
  }

  create() {}

  onResize() {
    const newHeight = this.element.getBoundingClientRect().height * this.index
    this.translateY = 0
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
