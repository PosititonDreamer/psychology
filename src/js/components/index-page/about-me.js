document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('.about-me__video')

  if(videos) {
    videos.forEach(videoElement => {
      const play = videoElement.querySelector('.about-me__play-button')
      const video = videoElement.querySelector('video')
      videoElement.addEventListener('click', () => {
        play.classList.add('about-me__play-button--hide')
        video.controls = true
        video.load()
        video.play()
      })
    })
  }
})
