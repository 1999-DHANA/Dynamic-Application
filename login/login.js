let buttonElement = document.getElementById("submit")



buttonElement.addEventListener("click",(event)=>{
    event.preventDefault();
    let userData  = document.getElementById("userName").value
    let userPassword= document.getElementById("password").value
    let data = localStorage.getItem("userData")
    let parsedData = JSON.parse(data)
    console.log(parsedData);


    if(parsedData[0].userName ===  userData && parsedData[0].password === userPassword){
        alert("loginn successful")
        location.href = "http://127.0.0.1:5500/dashboard/dashboard.html"
    }
    else{
        alert("try again")
    }
    
})
