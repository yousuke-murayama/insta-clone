import Vue from 'vue'
import VueRouter from 'vue-router'
import ImagesIndex from '@/views/ImagesIndex.vue'
import ImagesUpload from '@/views/ImagesUpload.vue'
import ImagesShow from '@/views/ImagesShow.vue'
import ImagesEdit from '@/views/ImagesEdit.vue'
import ImagesFavorites from '@/views/ImagesFavorites.vue'
import ImagesSearch from '@/views/ImagesSearch.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ImagesIndex',
    component: ImagesIndex
  },
  {
    path: '/upload',
    name: 'ImagesUpload',
    component: ImagesUpload
  },
  {
    path: '/show/:id',
    name: 'ImagesShow',
    component: ImagesShow
  },
  {
    path: '/edit/:id',
    name: 'ImagesEdit',
    component: ImagesEdit
  },
  {
    path: '/favorites',
    name: 'ImagesFavorites',
    component: ImagesFavorites
  },
  {
    path: '/search',
    name: 'ImagesSearch',
    component: ImagesSearch
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
