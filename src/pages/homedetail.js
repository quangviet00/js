import "./../css/home.css"

import { apiGet } from "../service/api";
const HomeDetail = {
    
    render: async function(params) {
        const phoned = await apiGet(`/cellphones/${params.data.id}`)
       
        console.log(phoned)
        return /*html*/`
 <h1 class="bg-red-100">HomeDetail</h1>  
 <h1 class="namephone">${phoned.name}</h1>
        <div class = "flex "> <img src="${phoned.images.base_url}" width = "300px">

        <div class="gia flex w-1/3 ">
       <div> <p>Giá :${phoned.sale_price} Đ <del class="bg-red-500">${phoned.original_price} Đ</del></p>
       <br>
       <span>
       Mô Tả Ngắn:
       </span>
       ${phoned.short_description}
       <div>
       <input type="number" class="input2" value="1">
         <button class="btn btn-primary">Thêm Vào Giỏ Hàng</button>
</div>



       </div>
  
           
           
            
            
           


        </div>
        <div class = "flex w-1/3">
    <h1>Thông số kỹ thuật</h1>
    <table class="table table-striped border:1">
        <thead>
            <tr>
                <th>Tên thông số</th>
                <th>Giá trị</th>
            </tr>
        </thead>
        <tbody>
            ${phoned.specifications.map(function(spec) {
                return /*html*/`
                <tr>
                    <td>${spec.name}</td>
                    <td>${spec.value}</td>
                </tr>
                `
            }
            ).join('')}
        </tbody>
    </table>
  
</div>
        </div>

           
        <div class = "motadai">
        <span>
           Mô Tả Dài:
           </span>
           ${phoned.description}
      </div>  
                 
                        
                      
              
                    
               
            
        `
            }
   
    }
export default HomeDetail;