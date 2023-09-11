import gsap from "gsap";
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion')

  if(accordions) {
    const duration = .3
    const delay = 0
    accordions.forEach((accordion, index) => {
      const head = accordion.querySelector('.accordion__head')
      const content = accordion.querySelector('.accordion__inner')

      if(head && content) {
        head.addEventListener('click', () => {
          if(accordion.classList.contains('accordion--open')) {
            gsap.to(content, {height: 0, duration, delay})
            accordion.classList.remove('accordion--open')
            return
          }
          gsap.to(content, {height: 'auto', duration, delay})
          accordion.classList.add('accordion--open')
        })
      }
    })
  }
})
