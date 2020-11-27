document.addEventListener("DOMContentLoaded", function() {




    const token  = localStorage.getItem('token')

    
    console.log(token)

    if(token)
    {
        
        // fetch('http://localhost:3000/api/me/', {
            fetch('https://nodetestcommerce.herokuapp.com/api/login/',{
              method: 'GET', // or 'PUT'
              headers: {
                  'Content-Type': 'application/json',
                  'token' : token
          
              },
            //   body: JSON.stringify(data),
              })
              .then(response => response.json())
              .then(data => {
              console.log('Success:', data);
              user = data.username
              var div = document.querySelector('#user')

              div.innerHTML = div.innerHTML + `
                    <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Track Order</a></li>
                    <li><a href="./login">Login</a></li>
                    <li><a href="./login">Signup</a></li>
                    <li><a href="./api/profile">${user}</a></li>
                    
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">24x7 Support <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#"><strong>Call: </strong>+09-456-567-890</a></li>
                            <li><a href="#"><strong>Mail: </strong>info@yourdomain.com</a></li>
                            <li class="divider"></li>
                            <li><a href="#"><strong>Address: </strong>
                                <div>
                                    234, New york Street,<br />
                                    Just Location, USA
                                </div>
                            </a></li>
                        </ul>
                
                 
            `
              
          
            });
        
    

    }else{
            var div = document.querySelector('#user')

              div.innerHTML = div.innerHTML + `
                    <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Track Order</a></li>
                    <li><a href="./login">Login</a></li>
                    <li><a href="./login">Signup</a></li>
                    
                    
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">24x7 Support <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#"><strong>Call: </strong>+09-456-567-890</a></li>
                            <li><a href="#"><strong>Mail: </strong>info@yourdomain.com</a></li>
                            <li class="divider"></li>
                            <li><a href="#"><strong>Address: </strong>
                                <div>
                                    234, New york Street,<br />
                                    Just Location, USA
                                </div>
                            </a></li>
                        </ul>
                `
                 

    }



    //products
    fetch('https://nodetestcommerce.herokuapp.com/api/product/',{
    // fetch('http://localhost:3000/api/product', {
    method: 'GET', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    // body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);

    //product(local storage)
    localStorage.setItem('products',JSON.stringify(data))
    
    data.forEach(product => {
    var div = document.querySelector('#product')

        div.innerHTML = div.innerHTML + `

            <div class="col-md-4 text-center col-sm-6 col-xs-6" id="product">
                <div class="thumbnail product-box">
                   <div style="height: 200px; width: auto"> <img style="height: inherit" class="img-fluid" src=${product.productImage} alt="" /> </div>
                    <div class="caption">
                        <h3><a href="#">${product.name} </a></h3>
                        <p>Price : <strong>${product.price}</strong>  </p>
                        <p>${product.description}</p>
                        <p><a href="#" class="btn btn-success" role="button">Add To Cart</a> <a href="#" class="btn btn-primary" role="button">See Details</a></p>
                    </div>
                </div>
            </div>


    `


    var div = document.querySelector('#product_section2')

        div.innerHTML = div.innerHTML + `

            <div class="col-md-4 text-center col-sm-6 col-xs-6" >
                <div class="thumbnail product-box">
                    <div style="height: 200px; width: auto"> <img style="height: inherit" class="img-fluid" src=${product.productImage} alt="" /> </div>
                    <div class="caption">
                        <h3><a href="#">${product.name} </a></h3>
                        <p>Price : <strong>${product.price}</strong>  </p>
                        <p>${product.description}</p>
                        <p><a href="#" class="btn btn-success" role="button">Add To Cart</a> <a href="#" class="btn btn-primary" role="button">See Details</a></p>
                    </div>
                </div>
            </div>


    `


    })


    })
    .catch((error) => {
    console.error('Error:', error);
    });






    //category
        

        
        // fetch('http://localhost:3000/api/category', {
        fetch('https://nodetestcommerce.herokuapp.com/api/category/',{
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        data.forEach(category => {
        var div = document.querySelector('#category')

        div.innerHTML = div.innerHTML + `
                <li class="list-group-item">${category.categoryName}
                    <span class="label label-primary pull-right">234</span>
                </li>

        `
        });



        })
        .catch((error) => {
        console.error('Error:', error);
        });


        //subcategory
        
        // fetch('http://localhost:3000/api/subcategory', {
        fetch('https://nodetestcommerce.herokuapp.com/api/subcategory/',{
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        data.forEach(subcategory => {
        var div = document.querySelector('#subcategory')

        div.innerHTML = div.innerHTML + `
                <li class="list-group-item">${subcategory.subCategoryName}
                     <span class="label label-danger pull-right">300</span>
                </li>

        `
        });



        })
        .catch((error) => {
        console.error('Error:', error);
        });







        //end of page load
});





//pagination
// const myarr = JSON.parse(localStorage.getItem('products'))
// console.log(myarr)


//     // on page load collect data to load pagination as well as table
//     const data = { "req_per_page": document.getElementById("req_per_page").value, "page_no": 1 };

//     // At a time maximum allowed pages to be shown in pagination div
//     const pagination_visible_pages = 4;


//     // hide pages from pagination from beginning if more than pagination_visible_pages
//     function hide_from_beginning(element) {
//         if (element.style.display === "" || element.style.display === "block") {
//             element.style.display = "none";
//         } else {
//             hide_from_beginning(element.nextSibling);
//         }
//     }

//     // hide pages from pagination ending if more than pagination_visible_pages
//     function hide_from_end(element) {
//         if (element.style.display === "" || element.style.display === "block") {
//             element.style.display = "none";
//         } else {
//             hide_from_beginning(element.previousSibling);
//         }
//     }

//     // load data and style for active page
//     function active_page(element, rows, req_per_page) {
//         var current_page = document.getElementsByClassName('active');
//         var next_link = document.getElementById('next_link');
//         var prev_link = document.getElementById('prev_link');
//         var next_tab = current_page[0].nextSibling; 
//         var prev_tab = current_page[0].previousSibling;
//         current_page[0].className = current_page[0].className.replace("active", "");
//         if (element === "next") {
//             if (parseInt(next_tab.text).toString() === 'NaN') {
//                 next_tab.previousSibling.className += " active";
//                 next_tab.setAttribute("onclick", "return false");
//             } else {
//                 next_tab.className += " active"
//                 render_table_rows(rows, parseInt(req_per_page), parseInt(next_tab.text));
//                 if (prev_link.getAttribute("onclick") === "return false") {
//                     prev_link.setAttribute("onclick", `active_page('prev',\"${rows}\",${req_per_page})`);
//                 }
//                 if (next_tab.style.display === "none") {
//                     next_tab.style.display = "block";
//                     hide_from_beginning(prev_link.nextSibling)
//                 }
//             }
//         } else if (element === "prev") {
//             if (parseInt(prev_tab.text).toString() === 'NaN') {
//                 prev_tab.nextSibling.className += " active";
//                 prev_tab.setAttribute("onclick", "return false");
//             } else {
//                 prev_tab.className += " active";
//                 render_table_rows(rows, parseInt(req_per_page), parseInt(prev_tab.text));
//                 if (next_link.getAttribute("onclick") === "return false") {
//                     next_link.setAttribute("onclick", `active_page('next',\"${rows}\",${req_per_page})`);
//                 }
//                 if (prev_tab.style.display === "none") {
//                     prev_tab.style.display = "block";
//                     hide_from_end(next_link.previousSibling)
//                 }
//             }
//         } else {
//             element.className += "active";
//             render_table_rows(rows, parseInt(req_per_page), parseInt(element.text));
//             if (prev_link.getAttribute("onclick") === "return false") {
//                 prev_link.setAttribute("onclick", `active_page('prev',\"${rows}\",${req_per_page})`);
//             }
//             if (next_link.getAttribute("onclick") === "return false") {
//                 next_link.setAttribute("onclick", `active_page('next',\"${rows}\",${req_per_page})`);
//             }
//         }
//     }

//     // Render the table's row in table request-table
//     function render_table_rows(rows, req_per_page, page_no) {
//         const response = JSON.parse(window.atob(rows));
//         const resp = response.slice(req_per_page * (page_no - 1), req_per_page * page_no)
//         $('#request-table').empty()
//         $('#request-table').append('<tr><th>Index</th><th>Request No</th><th>Title</th></tr>');

//         var Div = document.querySelector('#product_section2')

//         resp.forEach(function (_id, productImage, name, description, price) {

//         console.log(_id.name)
//                 Div.innerHTML = Div.innerHTML + `

//                     <div class="col-md-4 text-center col-sm-6 col-xs-6">
//                         <div class="thumbnail product-box">
//                             <div style="height: 200px; width: auto"> <img style="height: inherit" class="img-fluid" src=${_id.productImage} alt="" /> </div>
//                             <div class="caption">
//                                 <h3><a href="#">${_id.name} </a></h3>
//                                 <p>Price : <strong>${_id.price}</strong>  </p>
//                                 <p>${_id.description}</p>
//                                 <p><a href="#" class="btn btn-success" role="button">Add To Cart</a> <a href="#" class="btn btn-primary" role="button">See Details</a></p>
//                             </div>
//                         </div>
//                     </div>


//          `
//             // if (Object.keys(element).length > 0) {
//             //     const { req_no, title } = element;
//             //     const td = `<tr><td>${++index}</td><td>${req_no}</td><td>${title}</td></tr>`;
//             //     $('#request-table').append(td)
//             // }
//         });
//     }

//     // Pagination logic implementation
//     function pagination(data, myarr) {
//         const all_data = window.btoa(JSON.stringify(myarr));
//         $(".pagination").empty();
//         if (data.req_per_page !== 'ALL') {
//             let pager = `<a href="#" id="prev_link" onclick=active_page('prev',\"${all_data}\",${data.req_per_page})>&laquo;</a>` +
//                 `<a href="#" class="active" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>1</a>`;
//             const total_page = Math.ceil(parseInt(myarr.length) / parseInt(data.req_per_page));
//             if (total_page < pagination_visible_pages) {
//                 render_table_rows(all_data, data.req_per_page, data.page_no);
//                 for (let num = 2; num <= total_page; num++) {
//                     pager += `<a href="#" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>${num}</a>`;
//                 }
//             } else {
//                 render_table_rows(all_data, data.req_per_page, data.page_no);
//                 for (let num = 2; num <= pagination_visible_pages; num++) {
//                     pager += `<a href="#" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>${num}</a>`;
//                 }
//                 for (let num = pagination_visible_pages + 1; num <= total_page; num++) {
//                     pager += `<a href="#" style="display:none;" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>${num}</a>`;
//                 }
//             }
//             pager += `<a href="#" id="next_link" onclick=active_page('next',\"${all_data}\",${data.req_per_page})>&raquo;</a>`;
//             $(".pagination").append(pager);
//         } else {
//             render_table_rows(all_data, myarr.length, 1);
//         }
//     }

//     //calling pagination function
//     pagination(data, myarr);


//     // trigger when requests per page dropdown changes
//     function filter_requests() {
//         const data = { "req_per_page": document.getElementById("req_per_page").value, "page_no": 1 };
//         pagination(data, myarr);
//     }
