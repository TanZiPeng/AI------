import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import LoadingBar from './components/LoadingBar.vue'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(LoadingBar)
    })
  }
}
