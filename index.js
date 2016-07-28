import Vue from 'vue'
import index from './index.vue'

Vue.config.debug = true;
var vueHeader1 = new Vue({
    el: 'body',
    components: { index }
})