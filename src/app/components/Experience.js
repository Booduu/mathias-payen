import Animation from '../classes/Animation'

export default class Experience extends Animation {
  constructor(element, index) {
    super({ element })
    this.element = element
    this.index = index
  }

  animateOut(entry) {
    // this.cloneElement(entry.target)
    // this.createObserver()
    // let clone = entry.target.cloneNode(true)
    // this.parent.appendChild(clone)
    // this.elements = Array.from(this.elements).push(clone)
  }

  animateIn(entry) {
    console.log('in')
  }

  create() {
    console.log('element')
  }

  update() {
    console.log('XP upda')
  }
}
