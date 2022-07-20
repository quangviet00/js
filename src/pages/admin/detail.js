import { apiGet , apiPut} from "./../../service/api";


const AdminBookDetail = {
    render: async function(param) {
      
        let data = await apiGet(`/cellphones/${param.data.id}`);
        console.log(data);
        console.log(data.specifications);
        return /*html*/`    
            <h1>Admin</h1>
            <div class="container mx-auto">
            <h2 class="text-2xl text-primary-dark mt-5">Admin/Book Detail</h2>
            <div class="flex space-x-4 mt-3">
                <form class="w-full max-w-lg">
                    <div class="w-full">
                        <label>Tên sản phẩm</label>
                        <input class="block w-full border rounded py-3 px-4 mb-3"
                        id="grid-first-name" 
                        type="text" 
                        placeholder="Jane"
                        value="${data.name}"
                        >
                    </div>
                    <div class="w-full">
                        <label>Giá</label>
                        <input class="block w-full border rounded py-3 px-4 mb-3"
                        id="gia"
                        type="text"
                        placeholder="Jane"
                        value="${data.sale_price}"
                        >
                    </div>
                    <div class="w-full">
                        <label>Số lượng</label>
                        <input class="block w-full border rounded py-3 px-4 mb-3"
                        id="soluong"
                        type="text"
                        placeholder="Jane"
                        value="${data.quantity_sold.value}"
                        >
                    </div>
                    <div class="w-full mt-3">
                    <label>Mô tả ngắn</label>
                    <textarea class="block w-full border rounded py-3 px-4 mb-3" 
                    id="gmotangan" 
                    cols="50"
                    rows="5"
                    type="text">${data.short_description}</textarea>
                </div>
                <div class="w-full mt-3">
                <label>Mô tả dài</label>
                <textarea class="block w-full border rounded py-3 px-4 mb-3" 
                id="motadai" 
                cols="50"
                rows="10"
                type="text">${data.description}</textarea>
            </div>
                    <div class="w-full">
                        <label>Danh mục</label>
                        <input class="block w-full border rounded py-3 px-4 mb-3"
                        id="danhmuc"
                        type="text"
                        placeholder="Jane"
                        value="${data.categories.name}"
                        >
                    </div>
                   
                   
                    <div class = "flex space-x-4 mt-3">
               
                <img class="w-1/3" height: 10px; src=" ${data.images.base_url}" width = "300px">
                </div>
                ${data.specifications.map(item => {
                    return /*html*/`
                    <div class="w-full">
                    <label>${item.name}</label>
                    <input class="block w-full border rounded py-3 px-4 mb-3"
                    id="thongso"
                    data-name="${item.name}"
                    type="text"
                    placeholder="Jane"
                    value="${item.value}"
                    >
                </div>  `

                }
                ).join('')}
                <button class = "text-red-500 text-2xl" id="edit"  >Sửa</button>
                </form>

              
               
    
            </div>
            
        </div>`;
            
   
    } ,
  
    afterRender: async function(param) {
        const id = param.data.id;
        
        const newData = await apiGet(`/cellphones/${id}`);
        const edit = document.querySelector('#edit');     
        const name = document.querySelector('#grid-first-name');
        const gia = document.querySelector('#gia');
        const soluong = document.querySelector('#soluong');
        const gmotangan = document.querySelector('#gmotangan');
        const motadai = document.querySelector('#motadai');
        const danhmuc = document.querySelector('#danhmuc');
        const thongso = document.querySelectorAll('#thongso');
        const data1=[];
      
        edit.addEventListener('click', async (e) => {
           e.preventDefault();
           thongso.forEach(item => {
           
            const name = item.dataset.name;
            const value = item.value;
            data1.push({name,value});
            })
                const newData1 = {
                    ...newData,
                    name: name.value,
                    sale_price: gia.value,
                    quantity_sold: soluong.value,
                    short_description: gmotangan.value,
                    description: motadai.value,
                    categories: danhmuc.value,
                    specifications: 
                        data1.map(item => {
                            return {
                                name: item.name,
                                value: item.value
                            }
                        })
                    

                }

                apiPut(`/cellphones/${id}`, newData1)
                .then(() => { alert('Sửa thành công')})
                .catch(console.log);

                console.log(edit);
        })
    }


};
    
    

export default AdminBookDetail;