document.addEventListener('DOMContentLoaded', () => {
  const popups = document.querySelectorAll('[data-popup]')
  const popupButtons = document.querySelectorAll('[data-popup-name]')

  if(popups && popupButtons) {
    popupButtons.forEach(button => {
      const popupName = button.getAttribute('data-popup-name')
      const popup = Object.values(popups).find(popup => popup.getAttribute('data-popup') === popupName)

      if(popupName && popup) {
        const popupInner = popup.querySelector('.popup__inner')
        const closeButton = popup.querySelector('.popup__close')
        const closePopup = () => {
          popup.classList.remove('popup--view')
          document.documentElement.style.overflow = 'hidden auto'
          document.removeEventListener('click', checkClick)
          window.removeEventListener('keydown', checkKey)
        }
        const checkClick = e => {
          if(e.target === popupInner || popupInner.contains(e.target)) return
          closePopup()
        }

        const checkKey = e => {
          if(e.code === 'Escape') {
            closePopup()
          }
        }
        const openPopup = () => {
          popup.classList.add('popup--view')
          document.documentElement.style.overflow = 'hidden'
          setTimeout(() => {
            document.addEventListener('click', checkClick)
            window.addEventListener('keydown', checkKey)
          },5 )
        }

        button.addEventListener('click', openPopup)
        closeButton.addEventListener('click', closePopup)
      }
    })
  }
})
