import Header from "../components/header";
import { apiGet } from "../service/api"

const Home = {
    render: async function() {
const paramUrl = new URLSearchParams(window.location.search);
const search = paramUrl.get('search');
const data = await apiGet(`/cellphones?search=${search}`);



        const cellphones = await apiGet('/cellphones')
        console.log(cellphones)
        return /*html*/`
        ${Header.render()}
            <h1 class="bg-red-100">Home</h1>
        
            <div class="grid grid-cols-5 gap-3" id="newItem">
                ${cellphones.map(function(phone) {
                   if (phone.isheden===false) {
                    return /*html*/`
                    <div>
                        <img src="${phone.images.base_url}">
                        <a class="hover:text-primary" href="/home/${phone.id}">${phone.name}</a>
                        <p>${phone.sale_price}</p>
                    </div>
                    `
                   }
                }).join('')}
            </div>
        `   
    },
    afterRender: async function(){
      
        const myInput = document.querySelector('#input')
        const btn = document.querySelector('#btn')
        btn.addEventListener('click', async function(e){
            e.preventDefault();   // không cho thực hiện sự kiện mặc định
            console.log(myInput);
            const newItem = await apiGet(`/cellphones?name_like=${myInput.value}`);
            const renderr = newItem.map(phone => {
                return /*html*/`
                <div>
                <img src="${phone.images.base_url}">
                <a class="hover:text-primary" href="/home/${phone.id}">${phone.name}</a>
                <p>${phone.sale_price}</p>
            </div>

                `
            }

            ).join('');
            document.getElementById('newItem').innerHTML = renderr;

    
        })
    }
}

export default Home