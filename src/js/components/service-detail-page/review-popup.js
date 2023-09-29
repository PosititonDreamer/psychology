import {finalCheck} from "../../helpers/final-check";
import {checkPhone} from "../../helpers/check-phone";

document.addEventListener('DOMContentLoaded', () => {
  const popupReview = document.querySelector('.review-popup')

  if(popupReview) {
    const form = popupReview.querySelector('.review-popup__form')
    const final = popupReview.querySelector('.review-popup__final')
    const inputs = popupReview.querySelectorAll('.review-popup__input .input-wrapper__input')
    const acceptButton = popupReview.querySelector('.review-popup__button')
    const rateInputs = popupReview.querySelectorAll('.review-popup__rate input')
    const rateList = popupReview.querySelector('.review-popup__rate-list')
    if(form && final && acceptButton && inputs && rateList && rateInputs) {
      form.addEventListener('applyForm', () => {
        final.classList.add('review-popup__final--view')
      })
      const checkForm = {}

      const {finalCheckFunction} = finalCheck(checkForm, acceptButton)


      inputs.forEach(input => {
        const name = input.name
        const changeInput = () => {
          if (input.value.trim().length > 0) {
            input.classList.add('input-wrapper__input--not-empty')
          }
          if(!input.required && input.value.trim().length === 0) {
            input.classList.remove('input-wrapper__input--not-empty')
          }
        }
        input.addEventListener('input', changeInput)
        input.addEventListener('change', changeInput)

        if (input.required) {
          checkForm[name] = false
          input.addEventListener('blur', () => {
            input.value.trim().length > 0 ? input.classList.remove('input-wrapper__input--error') : input.classList.add('input-wrapper__input--error')
            checkForm[name] = input.value.trim().length > 0
            finalCheckFunction()
          })
        }

      })
      checkForm.rate = false
      rateInputs.forEach(input => {
        const parent = input.closest('.review-popup__rate')

        const changeInput = () => {
          checkForm.rate = true
          rateList.classList.remove('review-popup__rate-list--error')
          popupReview.querySelector('.review-popup__rate--checked')?.classList.remove('review-popup__rate--checked')
          parent.classList.add('review-popup__rate--checked')
          finalCheckFunction()
        }

        input.addEventListener('change', changeInput)
        if (input.checked) {
          changeInput()
        }
      })
      finalCheckFunction()

      acceptButton.addEventListener('click', e => {
        e.preventDefault()

        if (!checkForm.rate) {
          rateList.classList.add('review-popup__rate-list--error')
        }

        if(finalCheckFunction()) {
          inputs.forEach(input => {
            if(input.required) {
              input.dispatchEvent(new Event('blur'))
            }
          })
        } else {
          form.dispatchEvent(new Event('applyForm'))
        }
      })
    }
  }
})
