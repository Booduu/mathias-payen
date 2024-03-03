import Page from '../classes/Page'
import Experience from '../components/Experiences'

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
  }
}
