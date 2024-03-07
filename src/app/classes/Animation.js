export default class Animation {
  constructor({ element }) {
    this.element = element
    // super()

    this.createObserver()
  }

  createObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          this.animateIn(entry, index)
        } else {
          this.animateOut(entry, index)
        }
      })
    })

    this.observer.observe(this.element, {
      rootMargin: '300px'
    })
  }
}
