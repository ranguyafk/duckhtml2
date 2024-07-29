// Any scripts that need to be preloaded in advance, like ads or analytics

// UV Service Worker

if (/debug/.test(window.location)) {
  console.log('Debug mode enabled')
  var eruda = document.createElement('script')
  eruda.src = 'https://cdn.jsdelivr.net/npm/eruda'
  document.head.append(eruda)

  eruda.onload = () => {
    eruda.init()
  }
}


const swAllowedHostnames = ['localhost', '127.0.0.1']

async function registerSW() {
  console.log('Starting registration...')
  if (location.protocol !== 'https:' && !swAllowedHostnames.includes(location.hostname)) throw new Error('Service workers cannot be registered without https.')

  if (!navigator.serviceWorker) throw new Error("Your browser doesn't support service workers.")

  await navigator.serviceWorker
    .register('sw.js', {
      scope: __uv$config.prefix
    })
    .then(() => {
      console.log('Registered!')
    })
}

registerSW()
