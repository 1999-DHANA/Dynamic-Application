let totalAmount = 0
let priceTag = document.getElementById("price")
let cart = document.getElementById("cart")
let home = document.getElementById("home")
let logout = document.getElementById("logout")
let prod = document.getElementById("prod")
let shopNow = document.getElementById("shopNow")
let pay = document.getElementById("pay")


function fetchData(){
    let items = localStorage.getItem("items")
    let data = JSON.parse(items)
    if(data.length === 0){
        prod.style.display = "Block"
    }else{
        prod.style.display = "none"
        for (let each of data) {
            fetch(`https://fakestoreapi.com/products/${each.itemId}`)
            .then((res)=>{
                return res.json()
            })
            .then((json)=>{

                let con = document.getElementById("cartProducts")
                let item = `
                <div style=" width: 650px; margin: 30px;" id = "item${json.id}" class = "cartPro">
                    <h1  style="border-bottom: 2px solid; text-align: center; ">${json.category} <span onclick = "del(${json.id},${json.price})"><i class="del fa-solid fa-trash"></i></span></h1>
                    <div style="display: flex;">
                        <div>
                            <img src="${json.image}" alt="" style="height: 200px; width: 300px; padding:0px 20px;">
                        </div>
                        <div style="display: flex; justify-content : space-evenly; flex-direction: column;">
                            <h1>${json.title}</h1>
                            <span>price : $ ${json.price} </span>
                            <div><span>quantity : </span><button onclick="minus(${json.id},${json.price})">-</button><span id = "qua${json.id}"> 1</span> <button onclick="plus(${json.id},${json.price})">+</button></div>
                            
                        </div>
                    </div>
                </div>
                `
                con.innerHTML += item
                totalAmount += json.price
                priceTag.textContent = Math.floor(totalAmount)
            })  
        }

    }
}

fetchData()

function plus(id,price){
    let qua = document.getElementById(`qua${id}`)
    let val = qua.textContent
    val++;
    totalAmount+= price
    priceTag.textContent = Math.floor(totalAmount)
    qua.textContent = val
}

function minus(id,price){
    let qua = document.getElementById(`qua${id}`)
    let val = qua.textContent
    val--;
    if(val>0){
        totalAmount-= price
        qua.textContent = val
        priceTag.textContent = Math.floor(totalAmount)

    }
    // qua.textContent = val
}

function del (id,price){
    let delItem  = document.getElementById(`item${id}`)
    let con1 = document.getElementById("cartProducts")
    let qua = document.getElementById(`qua${id}`)
    let val = qua.textContent
    totalAmount-= (val*price)
    priceTag.textContent = Math.floor(totalAmount)
    con1.removeChild(delItem) 
}


cart.onclick = ()=>{
    // localStorage.setItem("items",JSON.stringify(orders))
    location.href = "http://127.0.0.1:5500/cart/cart.html"
}
home.onclick = ()=>{
    location.href = "http://127.0.0.1:5501/dashboard/dashboard.html"
}
logout.onclick = ()=>{
    location.href = "http://127.0.0.1:5500/home/home.html"
}
shopNow.onclick = ()=>{
    location.href = "http://127.0.0.1:5500/dashboard/dashboard.html"
}
pay.onclick = ()=>{
    alert("payment option done")
}