import './styles/index.scss'
import Navigation from './app/layout/Navigation'
import Home from './app/pages/Home'
import Users from './app/pages/Users'
import each from 'lodash/each'
import NormalizeWheel from 'normalize-wheel'

class App {
  constructor() {
    this.createContent()
    this.createNavigation()
    this.createPage()

    this.addLinkListeners()
    this.addEventListeners()

    this.update()
  }

  createContent() {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }

  createNavigation() {
    this.navigation = new Navigation({
      template: this.template
    })
  }

  createPage() {
    this.pages = {
      home: new Home()
      // users: new Users()
    }

    this.page = this.pages[this.template]
    this.page.create()
  }

  async onChange(url) {
    window.history.pushState({}, '', url)
    const request = await window.fetch(url)

    if (request.status === 200) {
      const html = await request.text()
      const div = document.createElement('div')
      div.innerHTML = html

      const divContent = div.querySelector('.content')
      this.template = divContent.getAttribute('data-template')
      this.navigation.onChange(this.template)

      this.content.setAttribute('data-template', this.template)
      this.content.innerHTML = divContent.innerHTML

      this.page = this.pages[this.template]
      this.page.create()
    }
  }

  addLinkListeners() {
    const links = document.querySelectorAll('a')
    each(links, (link) => {
      link.onclick = (event) => {
        const { href } = link
        event.preventDefault()

        this.onChange(href)
      }
    })
  }

  onWheel(event) {
    const normalizeWheel = NormalizeWheel(event)

    if (this.page && this.page.update) {
      this.page.onWheel(normalizeWheel)
    }
  }

  onTouchMove(event) {
    if (this.page && this.page.update) {
      this.page.onWheel(event)
    }
  }

  onResize() {
    if (this.page && this.page.onResize) {
      this.page.onResize()
    }
  }

  addEventListeners() {
    window.addEventListener('mousewheel', this.onWheel.bind(this))
    window.addEventListener('touchmove', this.onTouchMove.bind(this))

    window.addEventListener('resize', this.onResize.bind(this))
  }

  update() {
    if (this.page && this.page.update) {
      this.page.update()
    }
    this.frame = window.requestAnimationFrame(this.update.bind(this))
  }
}

window.onload = () => {
  new App()
}
