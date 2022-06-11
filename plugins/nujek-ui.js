import Vue from 'vue'
import Nujek from '~nujek-ui/plugin'
import { NjSection } from '~nujek-ui/components'

const settings = {
  NjSection: {
    component: NjSection,
    props: {
      fixedClasses: {
        // https://github.com/tailwindlabs/tailwindcss-typography#overriding-max-width
        wrapper: 'w-full flex justify-center',
        container: 'w-full relative'
      },
      variants: {
        'section-2xl': {
          wrapper: 'py-8 md:py-10 xl:py-12 px-6 md:px-32',
          container: 'max-w-screen-2xl'
        },
        hero: {
          wrapper: 'pb-8 md:pb-20 xl:pb-24 md:px-32',
          container: 'max-w-screen-2xl'
        },
        cta: {
          wrapper: 'py-8 md:py-20 xl:py-24 px-6 md:px-32',
          container: 'max-w-screen-xl'
        }
      }
    }
  }
}

Vue.use(Nujek, settings)
