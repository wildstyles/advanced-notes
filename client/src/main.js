// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VeeValidate from 'vee-validate'

import Panel from '@/components/globals/Panel'
import Breadcrumbs from '@/components/globals/Breadcrumbs'
import EditModal from '@/components/profile/editModals/EditModal'
import DeleteModal from '@/components/profile/editModals/DeleteModal'
import DeleteSuccessModal from '@/components/profile/editModals/DeleteSuccessModal'
import SingleItem from '@/components/profile/items/SingleItem'
import NoItems from '@/components/profile/items/NoItems'

import store from '@/store/store'
import App from './App'
import router from './router'
import DateFilter from './filters/date'

Vue.component('panel', Panel)
Vue.component('edit-modal', EditModal)
Vue.component('delete-modal', DeleteModal)
Vue.component('single-item', SingleItem)
Vue.component('delete-success-modal', DeleteSuccessModal)
Vue.component('no-items', NoItems)
Vue.component('breadcrumbs', Breadcrumbs)

Vue.filter('date', DateFilter)
Vue.use(VeeValidate)

Vue.use(Vuetify, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

Vue.directive('readMore', {
  bind: function (el, bind, vn) {
    let val_container = bind.value;
console.log(bind.value.length)
    if (bind.value.length > bind.arg) {

      vn.elm.textContent = bind.value.substring(0, bind.arg) + ' ...'
      // let read_more = document.createElement('a');
      // read_more.href = '#';
      // read_more.text = 'read more';

      // let read_less = document.createElement('a');
      // read_less.href = '#';
      // read_less.text = 'read less';

      // vn.elm.append(' ', read_more);

      // read_more.addEventListener("click", function () {
      //   vn.elm.textContent = val_container;
      //   vn.elm.append(' ', read_less);
      // });

      // read_less.addEventListener("click", function () {
      //   vn.elm.textContent = bind.value.substring(0, bind.arg) + '...'
      //   vn.elm.append(' ', read_more);
      // });

    } else {
      vn.elm.textContent = bind.value
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  mounted () {
    console.log(this.$breadcrumbs)
  }
})
