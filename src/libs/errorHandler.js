import Cookies from 'js-cookie'
import Router from 'next/router'
const projectName = 'next_ssr_real_world_app'
const cookiesUserToken = '_user_token'

export const handleErrorInitialProps = (res, error) => {
  console.log('[ERROR HANDLER]: ', error.message)
  console.error(error)
  const status = error.response && error.response.status
  if (status === 401) {
    process.browser && localStorage.removeItem(`${projectName}_user`)
    Cookies.remove(cookiesUserToken)
    process.browser ? Router.push('/login') : res && res.writeHead(301, { Location: '/login' })
  }
  return { initData: {} }
}