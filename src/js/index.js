// polyfills
import 'simplebar';
import '@babel/polyfill/dist/polyfill';
// styles
import 'simplebar/dist/simplebar.css';
import '../scss/style.scss';
// imports
import './_imports';

document.addEventListener('DOMContentLoaded', () => {
  const resize = () => {
    document.documentElement.style.setProperty('--window-height', `${window.innerHeight}px`)
  }
  resize()

  window.addEventListener('resize', resize)
})

document.addEventListener('DOMContentLoaded', () => {
  const lastBlogLists = document.querySelectorAll('.last-blog__list')
  if(lastBlogLists && location.pathname === '/blog/') {
    lastBlogLists.forEach(lastBlogList => {
      lastBlogList.classList.remove('last-blog__list')
      lastBlogList.classList.add('blog-list__list')
      lastBlogList.classList.add('blog-list__list--other-page')
    })
  }
})
