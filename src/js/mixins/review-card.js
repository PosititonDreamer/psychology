import SimpleBar from "simplebar";

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.review-card__text')) {
    let height

    window.createScrollReview = () => {
      const reviewsCards = document.querySelectorAll('.review-card__text')
      if (reviewsCards) {
        const createScroll = (card) => {
          card.classList.add('review-card__text--scroll')
          new SimpleBar(card)
        }

        const deleteScroll = (card) => {
          card.classList.remove('review-card__text--scroll')
        }

        reviewsCards.forEach(card => {
          const checkScroll = card.classList.contains('review-card__text--scroll')
          const paddingBottom = checkScroll ? 45 : 0
          const clientHeight = checkScroll ? card.querySelector('.simplebar-content')?.clientHeight : card.clientHeight
          const checkHeight = clientHeight - paddingBottom >= height

          if (card.clientHeight === 0 || card.getAttribute('data-simplebar')) {
            !checkHeight ? deleteScroll(card) : card.classList.add('review-card__text--scroll')
            return;
          }

          checkHeight ? createScroll(card) : deleteScroll(card)
        })
      }
    }

    let debounce
    const resize = () => {
      height = window.innerWidth > 700 ? 176 : 152
      clearTimeout(debounce)
      debounce = setTimeout(() => {
        window.createScrollReview()
      }, 300)
    }
    resize()
    window.addEventListener('resize', resize)
  }
})