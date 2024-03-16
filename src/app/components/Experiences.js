// import Animation from '../classes/Animation'
import each from 'lodash/each'
import map from 'lodash/map'
import Prefix from 'Prefix'
import Experience from './Experience'

export default class Experiences {
  constructor() {
    this.element = document.querySelector('.experiences')
    this.elements = document.querySelectorAll('.experience__wrapper')
    this.initialElements = document.querySelectorAll('.experience__wrapper')
    this.movingElements = {
      number: 4
    }
    this.transformPrefix = Prefix('transform')

    this.create()
  }

  handleElements(list, entry) {}

  // handleBounds() {
  //   this.wrapperHeight = this.element.offsetHeight

  //   //get the screen height
  //   this.viewportHeight = window.innerHeight

  //   // get the height of an experience
  //   this.childHeight = Math.round(this.elements[0].offsetHeight)

  //   // get how many element in the screen
  //   this.numberElement = Math.round(this.viewportHeight / this.childHeight)
  // }

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
        top: element.getBoundingClientRect().height * index,
        wrapperHeight: this.wrapperHeight
      })
    })

    this.element.style.height = `${this.wrapperHeight}px`
  }

  onResize() {
    // map(this.experiences, (experience, index) => experience.onResize())
  }

  update({ direction, scroll }) {
    this.direction = direction

    map(this.experiences, (experience, index) => {
      experience.update(direction, scroll, this.wrapperHeight)
    })
  }
}
