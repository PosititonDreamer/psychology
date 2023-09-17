import inputmask from "inputmask";

export const checkPhone = (input) => {

  inputmask('+7 999 999-99-99').mask(input)

  const acceptPhone = () => {
    const checkPhone = input.value.replace('_', '').length === 16
    checkPhone ? input.classList.remove('input-wrapper__input--error') : input.classList.add('input-wrapper__input--error')
    return checkPhone
  }


  return {
    acceptPhone
  }

}
