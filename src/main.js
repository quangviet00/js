import Navigo from 'navigo'
import Footer from './components/footer'
import Header from './components/header'
import Home from './pages/home'

import '../style.css'
import HomeDetail from './pages/homedetail'
import Admin from './pages/admin'
import AdminDetail from './pages/admin/detail'
import { apiGet , apiPut } from './service/api'


const router = new Navigo('/', {linksSelector: "a"})
router.on({
  "/": function(params) {
    print(Home, params,Home.afterRender)
  },
  "home/:id": function( params) {
    print(HomeDetail, params)
  },
  "lien-he": function() {
    console.log('Lien he')
  },
  "gioi-thieu": function() {
    console.log('Gioi thieu')
  },
  '/admin': (params) => {
    print(Admin, params,Admin.afterRender);
  },   
  "/admin/:id": function (param) {
    print(AdminDetail, param, AdminDetail.afterRender);
  },

})
router.resolve()

async function print(component, params) {
  
  document.querySelector('#app').innerHTML = await component.render(params)
  document.querySelector('#footer').innerHTML = Footer.render(params)
  if(component.afterRender) {
    component.afterRender(params)
  }
}
