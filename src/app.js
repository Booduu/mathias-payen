import './styles/index.scss'
import Navigation from './app/layout/Navigation'
import Home from './app/pages/Home'
import Users from './app/pages/Users'
import each from 'lodash/each'

class App {
  constructor() {
    this.createContent()
    this.createNavigation()
    this.createPage()

    this.addLinkListeners()
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
      home: new Home(),
      users: new Users()
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
}

window.onload = () => {
  new App()
}
