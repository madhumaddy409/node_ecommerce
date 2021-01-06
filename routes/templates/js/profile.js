

    const fetchProductToModal = (prodId) => {
    console.log(prodId)
    const products = JSON.parse(localStorage.getItem('products'))
    const selectedProduct = products.find((product) => prodId === product._id)
    console.log(selectedProduct);


    $("#myModal").modal('show')
   }
      
  
        const token = localStorage.getItem('token')

         const cartProductPlaced = (prodId) => {

                
                console.log(prodId)
                user = JSON.parse(localStorage.getItem('user'))
                userId = user._id
             

                const data = { product_id:prodId,
                    user_id:userId,
                    quantity:1,
                    orderType:"COD",
                    userName:"Madhu",
                    PhoneNumbser:"8660058433",
                    city:"Shimogga",
                    State:"karnataka",
                    Address:"hosamane 6th main",
                    Status:"Active"
                
                };

                console.log(data)
                // fetch('http://localhost:3000/api/order', {
                // method: 'POST', // or 'PUT'
                // headers: {
                //     'Content-Type': 'application/json',
                //     'token': token
                // },
                // body: JSON.stringify(data),
                // })
                // .then(response => response.json())
                // .then(data => {
                // console.log('Success:', data);
                // let msg = "order placed"
                // alert(msg) ? "" : location.reload();
                // })
                // .catch((error) => {
                // console.error('Error:', error);
                // });

            }
        
     
         

        
    
    
    
        document.addEventListener("DOMContentLoaded", function() {
  
            const savedToken = localStorage.getItem('token')
            console.log(savedToken)
            // fetch('http://localhost:3000/api/me/', {
            fetch('https://nodetestcommerce.herokuapp.com/api/me/',{
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'token': savedToken
            },
            // body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            const username = data.username
            const email = data.email
            document.querySelector('#username').textContent=username;
            document.querySelector('#fullname').textContent=username;
            document.querySelector('#email').textContent=email;
            })
            .catch((error) => {
            console.error('Error:', error);
            });




            //

            // fetch('http://localhost:3000/api/cart/', {
            // fetch('https://nodetestcommerce.herokuapp.com/api/me/',{
            fetch('https://nodetestcommerce.herokuapp.com/api/cart/',{
            
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'token': savedToken
            },
            // body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            products = JSON.parse(localStorage.getItem('products'))
            console.log(products)
            
           

            const selectedProduct = []
            for (var key in data) {
            if (data.hasOwnProperty(key)) {
                const _id = data[key] 

                const prod = products.find((product) => _id === product._id);
                selectedProduct.push(prod);
                }
            }
  
            console.log(selectedProduct);

            selectedProduct.forEach(cartProduct => {
            var div = document.querySelector('#cartProduct')
            
            
            div.innerHTML = div.innerHTML + `
                <div class="row gutters-sm ">
                    <div class="col-sm-12 mb-4">
                    <div class="card h-100">

                        <div class="col-md-4 text-center col-sm-6 col-xs-6" id="cartProduct">
                <div class="thumbnail product-box">
                   <div style="height: 200px; width: auto"> <img style="height: inherit" class="img-fluid" src=${cartProduct.productImage} alt="" /> </div>
                    <div class="caption">
                        
                        <h3><a href="#">${cartProduct.name} </a></h3>
                        <p>Price : <strong>${cartProduct.price}</strong>  </p>
                        <p>${cartProduct.description}</p>
                       
                        <p><button class="btn btn-info btn-lg" onclick="cartProductPlaced('${cartProduct._id}')" role="button">Add To Cart</button> 
                        
                        <button type="button" onclick="fetchProductToModal('${cartProduct._id}')" class="btn btn-info btn-lg">Product Details</button>
                        </p>
                    </div>
                </div>
            </div>


            <!-- Modal -->
                        <div class="modal fade" id="myModal" role="dialog">
                            <div class="modal-dialog">
                            
                                <!-- Modal content-->
                                <div class="modal-content text-center">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    <h4 class="modal-title">Modal Header</h4>
                                </div>
        
                                <div class="modal-body">
        
                                <div style="height: 100px; width: auto"> <img id="modalImage" style="height: inherit" class="img-fluid" src=${cartProduct.productImage} alt="" /> </div>
                                    <div class="caption">
                                        
                                        <h3 id="modalTitle"></h3>
                                        <p>Price : <strong id="modalPrice"></strong>  </p>
                                        <p id="modalDesc"></p>
                                        <p><button class="btn btn-success" onclick="addToCart('${cartProduct._id}')" role="button">Add To Cart</button> 
                                        
                                        </p>
                                    </div>
                                    </div>
                                
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                                
                            </div>
                            </div>
                            
                        </div>

 
                    
                    </div>
                    </div>
                </div>
                

                
                
        
            `
            });

            
           
            })
            .catch((error) => {
            console.error('Error:', error);
            });
 
        });
    
    
        
    
        

    