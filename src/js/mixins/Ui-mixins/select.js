import gsap from "gsap";

document.addEventListener('DOMContentLoaded', () => {
  let selects = document.querySelectorAll('.select')
  if (selects) {
    const duration = 0.3
    const delay = 0
    selects = document.querySelectorAll('.select')
    selects.forEach((select, index) => {
      if (select.classList.contains('select--created')) return
      let activeIndex = 0
      const selectActive = select.querySelector('.select__active')
      const selectActiveSpan = selectActive.querySelector('span ')
      const selectList = select.querySelector('.select__list')
      const selectItems = select.querySelectorAll('.select__item')
      const selectInput = select.querySelectorAll('.select__input')
      select.style.zIndex = `${selects.length - index + 1}`
      select.classList.add('select--created')
      selectActive.addEventListener('click', (e) => {
        if (selectActive.classList.contains('select__active--view')) {
          closeSelect()
          return
        }
        gsap.to(selectList, { duration, delay, height: 'auto' })
        selectActive.classList.add('select__active--view')
        setTimeout(() => {
          document.addEventListener('click', closeSelect)
        })
      })

      const closeSelect = () => {
        gsap.to(selectList, { duration, delay, height: 0 })
        selectActive.classList.remove('select__active--view')
        document.removeEventListener('click', closeSelect)
      }

      const scroll = () => {
        closeSelect()
      }
      scroll()
      window.addEventListener('scroll', scroll)
      window.addEventListener('resize', scroll)

      selectItems.forEach((item, index) => {
        const changeItem = () => {
          const text = item.innerText
          selectActiveSpan.innerHTML = text
          selectInput.value = text
          selectItems[activeIndex].classList.remove('select__item--active')
          activeIndex = index
          selectItems[index].classList.add('select__item--active')
        }

        item.addEventListener('click', changeItem)

        item.addEventListener('change', changeItem)

        if (item.classList.contains('select__item--active')) {
          item.dispatchEvent(new Event('change'))
        }
      })
    })
  }
})
