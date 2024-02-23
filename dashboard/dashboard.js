let men = document.getElementById("men")
let women = document.getElementById("women")
let jewelery = document.getElementById("jewelery")
let elect = document.getElementById("elect")
let cart = document.getElementById("cart")
let home = document.getElementById("home")
let logout = document.getElementById("logout")

let displayItems = ()=>{
    fetch(`https://fakestoreapi.com/products/`)
    .then((res)=>{
        return res.json()
    })
    .then((json)=>{
        console.log(json);
        let con1 = document.getElementById("productsContainer")
        con1.innerHTML = ""
        json.map((each)=>{
            let con = document.getElementById("productsContainer")
            let item = `<div id="${each.id}" class = "itemContainerEle" style="background-color:white;">
            <h1 id="categoryEle">${each.category}</h1>
            <div style="display: flex; align-items: center; justify-content: center;">
                <img id="" src="${each.image}" height="150px" width="250px" alt="">
            </div>
            <h3 class="priceEle">price : $ ${each.price}</h3>
            <div style="height: 70px;  font:45px" class = "para">    
                <p><span id = "span1">title: </span>  ${each.title}
                </p>
            </div>
            <button style="margin : 0px 60px;" onclick="cartitem(${each.id})" class="buttonEle" >Add To Cart</button>


        </div>`
        con.innerHTML += item
        })
    })
}
displayItems()

men.onclick = ()=>{
    fetch(`https://fakestoreapi.com/products/category/men's clothing   `)
    .then((res)=>{
        return res.json()
    })
    .then((json)=>{
        let con1 = document.getElementById("productsContainer")
        con1.innerHTML = ""
        json.map((each)=>{
            let con = document.getElementById("productsContainer")
            let item = `<div id="${each.id}" class = "itemContainerEle"">
            <h1 id="categoryEle">${each.category}</h1>
            <div style="display: flex; align-items: center; justify-content: center;">
                <img id="" src="${each.image}" height="150px" width="250px" alt="">
            </div>
            <h3 class="priceEle">price : $ ${each.price}</h3>
            <div style="height: 70px;  font:45px" class = "para">    
                <p><span id = "span1">title: </span>  ${each.title}
                </p>
            </div>
            <button style="margin : 0px 60px;"  onclick="cartitem(${each.id})" class="buttonEle" >Add To Cart</button>


        </div>`
        con.innerHTML += item
        })
    })
}

women.onclick = ()=>{
    fetch(`https://fakestoreapi.com/products/category/women's clothing`)
    .then((res)=>{
        return res.json()
    })
    .then((json)=>{
        let con1 = document.getElementById("productsContainer")
        con1.innerHTML = " "
        json.map((each)=>{
            let con = document.getElementById("productsContainer")
            let item = `<div id="${each.id}" class = "itemContainerEle"">
            <h1 id="categoryEle">${each.category}</h1>
            <div style="display: flex; align-items: center; justify-content: center;">
                <img id="" src="${each.image}" height="150px" width="250px" alt="">
            </div>
            <h3 class="priceEle">price : $ ${each.price}</h3>
            <div style="height: 70px;  font:45px" class = "para">    
                <p><span id = "span1">title: </span>  ${each.title}
                </p>
            </div>
            <button style="margin : 0px 60px;"   onclick="cartitem(${each.id})" class="buttonEle" >Add To Cart</button>


        </div>`
        con.innerHTML += item
        })
    })
}

jewelery.onclick = ()=>{
    fetch(`https://fakestoreapi.com/products/category/jewelery`)
    .then((res)=>{
        return res.json()
    })
    .then((json)=>{
        let con1 = document.getElementById("productsContainer")
        con1.innerHTML = " "
        json.map((each)=>{
            let con = document.getElementById("productsContainer")
            let item = `<div id="${each.id}" class = "itemContainerEle"">
            <h1 id="categoryEle">${each.category}</h1>
            <div style="display: flex; align-items: center; justify-content: center;">
                <img id="" src="${each.image}" height="150px" width="250px" alt="">
            </div>
            <h3 class="priceEle">price : $ ${each.price}</h3>
            <div style="height: 70px;  font:45px" class = "para">    
                <p><span id = "span1">title: </span>  ${each.title}
                </p>
            </div>
            <button style="margin : 0px 60px;"  onclick="cartitem(${each.id})" class="buttonEle" >Add To Cart</button>


        </div>`
        con.innerHTML += item
        })
    })
}


elect.onclick = ()=>{
    fetch(`https://fakestoreapi.com/products/category/electronics`)
    .then((res)=>{
        return res.json()
    })
    .then((json)=>{
        let con1 = document.getElementById("productsContainer")
        con1.innerHTML = " "
        json.map((each)=>{
            let con = document.getElementById("productsContainer")
            let item = `<div id="${each.id}" class = "itemContainerEle"">
            <h1 id="categoryEle">${each.category}</h1>
            <div style="display: flex; align-items: center; justify-content: center;">
                <img id="" src="${each.image}" height="150px" width="250px" alt="">
            </div>
            <h3 class="priceEle">price : $ ${each.price}</h3>
            <div style="height: 70px;  font:45px" class = "para">    
                <p><span id = "span1">title: </span>  ${each.title}
                </p>
            </div>
            <button style="margin : 0px 60px;"  onclick="cartitem(${each.id})" class="buttonEle" >Add To Cart</button>


        </div>`
        con.innerHTML += item
        })
    })
}

let orders = [

]

function cartitem(id){
    let obj = {
        itemId : id
    }
    alert("item added to cart")
    orders.push(obj)
}

cart.onclick = ()=>{
    localStorage.setItem("items",JSON.stringify(orders))
    location.href = "http://127.0.0.1:5500/cart/cart.html"
}
home.onclick = ()=>{
    location.href = "http://127.0.0.1:5500/dashboard/dashboard.html"
}
logout.onclick = ()=>{
    location.href = "http://127.0.0.1:5500/home/home.html"
}



