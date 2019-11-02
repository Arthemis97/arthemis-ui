import Vue from 'vue'
import App from './App.vue'

// Art Components
import globalComponents from './components';

globalComponents.forEach(component => {
  Vue.component(component.name, component);
});

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')

