document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('.about-me__video')

  if (videos) {
    videos.forEach(videoElement => {
      const play = videoElement.querySelector('.about-me__play-button')
      const video = videoElement.querySelector('video')

      const played = () => {
        play.classList.add('about-me__play-button--hide')
        video.controls = true
        video.load()
        video.play()
        videoElement.removeEventListener('click', played)
      }
      videoElement.addEventListener('click', played)
    })
  }
})
