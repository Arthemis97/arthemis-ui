import * as components from "./components";
import "./sass/main.scss";
const Arthemis = {
  install(Vue) {
    for (const componentName in components) {
      const component = components[componentName];
      Vue.component(component.name, component);
    }
  }
};

export default Arthemis;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(Arthemis);
}
