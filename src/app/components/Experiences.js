// import Animation from '../classes/Animation'
import each from 'lodash/each'
import map from 'lodash/map'
import Prefix from 'Prefix'
import Experience from './Experience'

export default class Experiences {
  constructor() {
    this.element = document.querySelector('.experiences')
    this.elements = document.querySelectorAll('.experience__wrapper')
   
    this.transformPrefix = Prefix('transform')

    this.create()
  }

  handleElements(list, entry) {}

  animateOut(entry, index) {
    // console.log('outout')
  }

  async animateIn(entry, index) {}

  create() {
    this.wrapperHeight = 0
    this.experiences = map(this.elements, (element, index) => {
      this.wrapperHeight += element.offsetHeight
      return new Experience({
        element,
        index,
        top: element.getBoundingClientRect().height * index
      })
    })

    this.element.style.height = `${this.wrapperHeight}px`
  }

  onResize() {
    this.wrapperHeight = 0
    map(this.experiences, (experience, index) => {
      experience.onResize()
      this.wrapperHeight += experience.element.offsetHeight
    })

    this.element.style.height = `${this.wrapperHeight}px`
  }

  update({ direction, scroll }) {
    this.direction = direction

    map(this.experiences, (experience, index) => {
      experience.update(direction, scroll, this.wrapperHeight)
    })
  }
}
