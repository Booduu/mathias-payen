// import Animation from '../classes/Animation'
import each from 'lodash/each'
import map from 'lodash/map'

import Experience from './Experience'

export default class Experiences {
  constructor() {
    this.element = document.querySelector('.experiences')
    this.elements = document.querySelectorAll('.experience__wrapper')

    this.create()
  }

  handleElements(list, entry) {}

  handleBounds() {
    this.wrapperHeight = this.element.offsetHeight

    //get the screen height
    this.viewportHeight = window.innerHeight

    // get the height of an experience
    this.childHeight = this.elements[0].offsetHeight

    // get how many element in the screen
    this.numberElement = this.viewportHeight / this.childHeight

    console.log('ooooo', this.viewportHeight, this.numberElement)
  }

  create() {
    each(this.elements, (entry, key) => {
      new Experience(entry, this.elements, this.element)
    })

    this.handleBounds()
  }

  update({ direction }) {
    // si scroll vers le bas

    // this.elements.forEach((el, i) => {

    // })
    if (direction === 'down') {
    }
    // regarder combien il y a d'element dans window
    // regarder la hauteur d'un element
    // si scroll vers le bas -> cloner le premier element en fin de liste

    //
    // le retirer de la liste pour le mettre en bas de la liste
    // map(this.elements, (element, index) => {
    // })
    // if (direction === 'down') {
    // }
  }
}
