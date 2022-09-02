import * as Vue from 'Vue';

import App from './app.vue';
import Component from './component.vue';

const root = Vue.createApp({})

root.component('app', App)
root.component('component', Component)

const vm = root.mount('#app')
