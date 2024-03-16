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
    this.experiences = []
    this.movingElements = {
      number: 4
    }
    this.transformPrefix = Prefix('transform')

    this.create()
  }

  handleElements(list, entry) {}

  handleBounds() {
    this.wrapperHeight = this.element.offsetHeight

    //get the screen height
    this.viewportHeight = window.innerHeight

    // get the height of an experience
    this.childHeight = Math.round(this.elements[0].offsetHeight)

    // get how many element in the screen
    this.numberElement = Math.round(this.viewportHeight / this.childHeight)
  }

  animateOut(entry, index) {
    console.log('outout')
  }

  async animateIn(entry, index) {
    console.log('in')
    let clone = entry.target.cloneNode(true)
    this.element.appendChild(clone)

    this.element = document.querySelector('.experiences')
  }

  create() {
    this.handleBounds()

    map(this.element.childNodes, (el, index) => {
      // el.style[this.transformPrefix] =
      //   `translateY(${index * this.childHeight}px)`
      el.style.top = `${index * this.childHeight}px`
    })

    // if (this.wrapperHeight < window.innerHeight * 2) {
    //   /**
    //    * clone node
    //    */
    //   for (let i = 0; i < this.initialElements.length; i++) {
    //     this.element.appendChild(this.initialElements[i].cloneNode(true))
    //     this.wrapperHeight = this.element.offsetHeight
    //   }
    // }
  }

  update({ direction, scroll }) {
    this.direction = direction

    map(this.element.childNodes, (el) => {
      if (el.getBoundingClientRect().top < 0) {
        el.style.top = `300px`
      } else {
      }
      el.style[this.transformPrefix] = `translateY(${scroll.current}px)`
    })

    // if (this.elements.wrapper) {
    //   this.elements.wrapper.style[this.transformPrefix] =
    //     `translateY(-${Math.round(this.scroll.current)}px)`
    // }
  }
}

// viewport 700

// WRAPPER 700

// SCROLL 100

// W + S 800
