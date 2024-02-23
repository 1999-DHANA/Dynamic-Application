let buttonElement = document.getElementById("submit")

let user = [

]
buttonElement.addEventListener("click",(event)=>{
    event.preventDefault();
    let username  = document.getElementById("userName").value
    let password= document.getElementById("password").value
    let confirm = document.getElementById("confirmPassword").value
    if(password === confirm){

        let obj = {
            userName : username,
            password : password
        }
        user.push(obj);
        console.log(user);
        localStorage.setItem("userData",JSON.stringify(user));
        alert("registerd sucessful")
        location.href = "http://127.0.0.1:5500/login/login.html"

    }else{
        alert("incorrect comfirm password")
    }
    
})
