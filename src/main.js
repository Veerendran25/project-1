import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import car from './components/car.vue'
import ImageGallery from './components/ImageGallery.vue'
import comp from './components/comp.vue'
import vision from './components/vision.vue'
import order from './components/order.vue'
import faq from './components/faq.vue'
import foot from './components/foot.vue'
import ma from './components/ma.vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

const app = createApp(App)

app.use(router)
app.component("car",car)
app.component("brand",ImageGallery)
app.component('comp',comp)
app.component('vision',vision)
app.component('order',order)
app.component('faq',faq)
app.component('ma',ma)
app.component('foot',foot)
app.mount('#app')

