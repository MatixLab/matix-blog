/* eslint-disable no-undef */
window.dataLayer = window.dataLayer || []
window.gtag = function gtag() {
  // eslint-disable-next-line prefer-rest-params
  dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', 'YOUR-ID-HERE')
