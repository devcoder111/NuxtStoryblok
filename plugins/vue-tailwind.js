import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import { TButton } from 'vue-tailwind/dist/components'

const settings = {
  // 't-modal': {
  //   component: TModal,
  //   props: {
  //     fixedClasses: {
  //       overlay:
  //         'overflow-hidden left-0 right-0 top-0 bottom-0 w-full ios-scroll disable-tap-color h-[150%]',
  //       wrapper: 'fixed sm:relative mx-auto w-screen sm:w-full',
  //       modal: 'overflow-hidden overscroll-none scroll-smooth',
  //       close: 'flex items-center justify-center'
  //     },
  //     classes: {
  //       overlay: 'z-40 bg-black bg-opacity-50',
  //       wrapper: 'z-50 max-w-lg sm:max-w-2xl sm:max-h-xl px-3',
  //       modal: 'bg-white shadow rounded',
  //       body: 'p-3',
  //       header: 'p-3 rounded-t',
  //       footer: 'p-3 sm:p-6 rounded-b',
  //       close:
  //         'bg-gray-100 text-gray-600 rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
  //       closeIcon: 'fill-current h-4 w-4',
  //       overlayEnterClass: 'opacity-0',
  //       overlayEnterActiveClass: 'transition ease-out duration-100',
  //       overlayEnterToClass: 'opacity-100',
  //       overlayLeaveClass: 'opacity-100',
  //       overlayLeaveActiveClass: 'transition ease-in duration-75',
  //       overlayLeaveToClass: 'opacity-0',
  //       enterClass: '',
  //       enterActiveClass: '',
  //       enterToClass: '',
  //       leaveClass: '',
  //       leaveActiveClass: '',
  //       leaveToClass: ''
  //     },
  //     variants: {
  //       single: {
  //         overlay:
  //           'z-[500] bg-black bg-opacity-50 backdrop-brightness-75 backdrop-filter backdrop-blur-lg fixed flex justify-center',
  //         modal:
  //           'bg-white px-5 md:px-14 py-4 space-y-3 overflow-y-scroll max-h-full no-scrollbar',
  //         header: 'px-0 pt-5 md:pt-10',
  //         wrapper:
  //           'z-[700] mx-auto flex justify-center items-start max-w-lg md:max-w-2xl px-10 py-6 max-h-full',
  //         body: 'relative'
  //       },
  //       cookie: {
  //         overlay:
  //           'z-[500] bg-black bg-opacity-50 backdrop-brightness-75 backdrop-filter backdrop-blur-lg fixed flex justify-center',
  //         wrapper: 'z-[700] mx-auto max-w-lg md:max-w-2xl'
  //       }
  //     }
  //   }
  // },
  't-button': {
    component: TButton,
    props: {
      fixedClasses: 'rounded-none py-3 px-6',
      classes: {},
      variants: {
        dark:
          'border border-white text-white bg-dark hover:bg-white hover:text-black hover:ring-white'
      }
    }
  }
}

Vue.use(VueTailwind, settings)
