export default class Animation {
  constructor({ element }) {
    this.element = element
    // super()

    this.createObserver()

    this.animateIn.bind(this);
  }

  createObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry, index) => {
        if (entry.isIntersecting) {
          this.animateIn(entry, index)
        } else {
          this.animateOut(entry, index)
        }
      })
    })

    this.observer.observe(this.element, {
      // rootMargin: '0px'
      treshold: 0.5
    })
  }

  animateIn() {}

  animateOut() {}
}
