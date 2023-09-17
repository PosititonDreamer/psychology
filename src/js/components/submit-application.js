import {finalCheck} from "../helpers/final-check";
import {checkPhone} from "../helpers/check-phone";

document.addEventListener('DOMContentLoaded', () => {
  const submitApplication = document.querySelector('.submit-application')

  if(submitApplication) {
    const form = submitApplication.querySelector('.submit-application__form')
    const final = submitApplication.querySelector('.submit-application__final')
    const inputs = submitApplication.querySelectorAll('.submit-application__input .input-wrapper__input')
    const acceptButton = submitApplication.querySelector('.submit-application__button')
    if(form && final && acceptButton && inputs) {
      form.addEventListener('applyForm', () => {
        final.classList.add('submit-application__final--view')
      })

      const checkForm = {}

      const types = ['phone']
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

          if (name === 'phone') {
            const {acceptPhone} = checkPhone(input)
            input.addEventListener('blur', () => {
              checkForm[name] = acceptPhone()
              finalCheckFunction()
            })
          }

          if (!types.find(type => name === type)) {
            input.addEventListener('blur', () => {
              input.value.trim().length > 0 ? input.classList.remove('input-wrapper__input--error') : input.classList.add('input-wrapper__input--error')
              checkForm[name] = input.value.trim().length > 0
              finalCheckFunction()
            })
          }
        }

      })
      finalCheckFunction()


      acceptButton.addEventListener('click', e => {
        e.preventDefault()
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
