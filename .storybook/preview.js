import { configure, addParameters } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import Vue from 'vue'
import '@/assets/css/tailwind.css'

const customViewports = {
  Mobile: {
    name: 'Mobile',
    styles: {
      width: '480px',
      height: '800px',
    },
    type: 'mobile',
  },
  Small: {
    name: 'Small',
    styles: {
      width: '640px',
      height: '1136px',
    },
    type: 'tablet',
  },
  Medium: {
    name: 'Medium',
    styles: {
      width: '768px',
      height: '1024px',
    },
    type: 'tablet',
  },
  Large: {
    name: 'Large',
    styles: {
      width: '1024px',
      height: '760px',
    },
    type: 'desktop',
  },
  ExtraLarge: {
    name: 'Extra Large',
    styles: {
      width: '1280px',
      height: '800px',
    },
    type: 'desktop',
  },
}

addParameters({
  viewport: { viewports: customViewports },
})

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a href="#" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

// function loadStories() {
//   const req = require.context('../components', true, /\.stories\.js$/)
//   req.keys().forEach((filename) => req(filename))
// }

// configure(loadStories, module)
