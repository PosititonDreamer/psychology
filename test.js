// указать в секундах
const timeCraft = 90
// задержка в секундах
const delay = 10
// указать ссылку на аудио
const audioLink = 'https://zvukipro.com/uploads/files/2020-01/1580160021_02599.mp3'
let start = true
let timeout

const startTimeout = () => {
    timeout = setTimeout(() => {
        clickable()
    }, (timeCraft + delay) * 1000)
}

const clickable = () => {
    const modal = document.querySelector('.commons_modalBackdrop__EOPaN')
    if (modal) {
        const button = modal.querySelector('.Crafting_craftingButton__Qd6Ke')
        if (button) {
            if (start) {
                start = false
                button.click()
                startTimeout()
                return
            }
            button.click()
            setTimeout(() => {
                button.click()
                startTimeout()
            }, delay * 1000)
        }
    } else {
        const audio = document.createElement('audio')
        const source = document.createElement('source')
        audio.setAttribute('autoplay', true)
        audio.volume = 1
        source.type = "audio/mpeg"
        source.src = audioLink
        audio.appendChild(source)
        document.body.appendChild(audio)
        audio.load()
        setTimeout(() => {
            audio.pause()
            audio.remove()
        }, 5000)
    }
}

clickable()
