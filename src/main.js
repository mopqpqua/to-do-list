import Vue from 'vue';
import Todos from '@/Todos';

new Vue({
  render: (v) => v(Todos),
}).$mount('#todos');
