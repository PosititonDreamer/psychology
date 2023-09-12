document.addEventListener('DOMContentLoaded', () => {
  const banner = document.querySelector('.banner')

  if (banner) {
    const lineLeft = banner.querySelector('.banner__line--left')
    const lineRight = banner.querySelector('.banner__line--right')
    const container = banner.querySelector('.banner__container')

    if (lineLeft && lineRight && container) {
      const resize = () => {
        const width = window.innerWidth - container.clientWidth
        lineLeft.style.setProperty('--max-width', `${Math.ceil(width / 3 * 2)}px`)
        lineRight.style.setProperty('--max-width', `${Math.floor(width / 3)}px`)
      }

      window.addEventListener('resize', resize)
      resize()
    }
  }
})
