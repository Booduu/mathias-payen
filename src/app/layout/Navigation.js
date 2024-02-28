import GSAP from 'gsap'

// import Link from 'animations/Link';

export default class Navigation {
  constructor({ template }) {
    this.element = '.navigation'
    this.elements = {
      items: document.querySelectorAll('.navigation__list__item'),
      links: document.querySelectorAll('.navigation__list__link')
    }

    this.onChange(template)
  }

  onChange(template) {
    if (template === 'users') {
      GSAP.fromTo(
        this.elements.items[0],
        {
          autoAlpha: 0,
          duration: 0.4
        },
        {
          autoAlpha: 1,
          duration: 0.4
        }
      )

      GSAP.fromTo(
        this.elements.items[1],
        {
          autoAlpha: 1,
          duration: 0.4
        },
        {
          autoAlpha: 0,
          duration: 0.4
        }
      )
    }

    if (template === 'home') {
      GSAP.fromTo(
        this.elements.items[0],
        {
          autoAlpha: 1,
          duration: 0.4
        },
        {
          autoAlpha: 0,
          duration: 0.4
        }
      )

      GSAP.fromTo(
        this.elements.items[1],
        {
          autoAlpha: 0,
          duration: 0.4
        },
        {
          autoAlpha: 1,
          duration: 0.4
        }
      )
    }
  }
}
