



import { apiGet, apiPut } from "./../../service/api";

const Admin =  {

    render: async function()  {
       let data = await apiGet('/cellphones')
       
     
       console.log(data);
        return /*html*/`
            <h1>Admin</h1>
           <div class="mb-3">
                <input class="form-control" id="" type="text" placeholder="Tìm Kiếm" aria-label="1">
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Danh Muc</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.map(item => /*html*/`    
                      <tr>
                        <td>${item.id}</td>
                          <td><a class="hover:text-primary" href="/admin/${item.id}">${item.name}</a></td>
                        <td>${item.categories.name}</td>
                          <td>${item.sale_price}</td>
                          <td> <img src="${item.images.base_url}" class="image" width = "200px"></td>
                          <td>  
                            
                          <button class="btn btn-primary" id = "hiden" data-id="${item.id}">Ẩn</button>
                          </td>
                      </tr>` )}
                </tbody>
           

          `;
    },
    afterRender: function() {

        const hiden = document.querySelectorAll('#hiden');
        hiden.forEach(item => {
            item.addEventListener('click', async function(e) {
            e.preventDefault();
                const id = this.dataset.id;
                const data = await apiGet(`/cellphones/${id}`);
                console.log(data);
                const newData2 = {
                    ...data,
                    isheden: !data.isheden

                }
                console.log(newData2);
                apiPut(`/cellphones/${id}`, newData2);
                window.location.href = '/admin';
            })


    })
}

}
    export default Admin;