import Page from '../classes/Page'
import Experiences from '../components/Experiences'
export default class Home extends Page {
  constructor() {
    super({
      element: '.home',
      elements: {
        wrapper: '.home__wrapper'
      }
    })
  }

  create() {
    super.create()
    this.experiences = new Experiences()
  }

  onResize() {
    if (this.experiences && this.experiences.onResize) {
      this.experiences.onResize()
      this.scroll = {
        current: 0,
        target: 0,
        last: 0,
        limit: 1000
      }
    }
  }

  update() {

    super.update()
    if (this.experiences && this.experiences.update) {
      this.experiences.update({
        direction: this.direction,
        scroll: this.scroll
      })
    }
  }
}
