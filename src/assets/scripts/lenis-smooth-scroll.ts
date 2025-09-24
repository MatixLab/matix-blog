// import Lenis from 'lenis'

// const lenis = new Lenis({
//   smoothWheel: true,
//   duration: 1.2,
//   autoRaf: true,
//   anchors: true,
//   autoToggle: true,
//   infinite: false,
//   autoResize: true,
//   overscroll: true,
//   /**
//    * The easing function to use for the scroll animation，our default is custom but you can pick one from Easings.net.
//    * Useless if lerp defined.
//    * @see {@link https://easings.net/en |Easings.net }
//    * @see {@link https://github.com/ai/easings.net |Easings.net }
//    * @returns
//    */
//   easing: x => Math.sin((x * Math.PI) / 2)
// })

// window.lenis = lenis
// declare global {
//   interface Window {
//     lenis: Lenis
//   }
// }

// // add eventListener
// document.getElementById('stop')?.addEventListener('click', () => {
//   lenis.stop()
// })

// document.getElementById('scroll-start')?.addEventListener('click', () => {
//   lenis.scrollTo(100)
// })
