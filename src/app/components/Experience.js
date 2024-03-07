import Animation from '../classes/Animation'

export default class Experience extends Animation {
  constructor(element, elements, parent) {
    super({ element })
    this.element = element
    this.elements = elements
    this.parent = parent

    // this.handleElements = handleElements

    this.create()
  }

  animateOut(entry, index) {
    let clone = entry.target.cloneNode(true)
    this.parent.appendChild(clone)
    this.elements = Array.from(this.elements).push(clone)
    this.createObserver()
  }

  animateIn(entry) {
    console.log('in')
  }

  create() {
    console.log('element', this.element)
  }

  update() {}
}
