import gsap from 'gsap'

document.addEventListener('DOMContentLoaded', () => {
  const beafCards = document.querySelectorAll('.beaf-card')
  if (beafCards.length) {
    beafCards.forEach(item => {
      const width = item.clientWidth
      const line = item.querySelector('.beaf-card__line')
      if (!line) return
      item.setAttribute('style', `--width: ${width / 100 * 50}px; --left-line: ${width / 100 * 50 - line.clientWidth / 2}px`)
      let mouseDown = false

      const newPosition = (e, mouse = null) => {
        line.removeAttribute('style')
        let left
        if(e.touches) {
          left = e.touches[0].clientX - item.offsetLeft
        } else {
          left = e.x - item.offsetLeft
        }

        if (left <= 0) left = 0
        if (left >= width) left = width

        if (mouse) {
          gsap.to(item, {
            '--width': `${left}px`,
            '--left-line': `${left - line.clientWidth / 2}px`,
            duration: .3,
            delay: 0
          })
          return
        }

        item.setAttribute('style', `--width: ${left}px; --left-line: ${left - line.clientWidth / 2}px`)
      }

      item.addEventListener('mousedown', (e) => {
        mouseDown = true
        document.documentElement.style.overflow = 'hidden'
        if (e.target !== line && !line.contains(e.target)) newPosition(e, true)
      })

      item.addEventListener('touchstart', (e) => {
        mouseDown = true
        document.documentElement.style.overflow = 'hidden'
        if (e.target !== line && !line.contains(e.target)) newPosition(e, true)
      })

      document.addEventListener('mouseup', () => {
        mouseDown = false
        document.documentElement.style.overflow = 'hidden auto'
      })

      document.addEventListener('touchend', () => {
        mouseDown = false
        document.documentElement.style.overflow = 'hidden auto'
      })

      item.addEventListener('mousemove', (e) => {
        if (mouseDown) newPosition(e)
      })

      item.addEventListener('touchmove', (e) => {
        if (mouseDown) newPosition(e)
      })
    })
  }
})
