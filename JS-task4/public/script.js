function login() {
    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;

    document.getElementById("User-Error").innerHTML = "";
    document.getElementById("Pass-Error").innerHTML = "";
    let valid = true;
    if (username === "") {
        document.getElementById("User-Error").innerHTML = "*required";
        valid = false;
    }
    if (password === "") {
        document.getElementById("Pass-Error").innerHTML = "*required";
        valid = false;
    }

    if (valid && username === "ebrain" && password === "Ji#993te") {
        var person = {
            userName: username,
            password: password,
        };


        fetch("https://hastin-container.com/staging/app/auth/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(person),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Responsive data:", data);
                if(data.data){
                    const Access = data.data.accessCode;
                    const opaq = data.data.opaque;
                    const jwt = data.data.jwt;
                    const obj = {
                        accessCode:Access,
                        opaque:opaq,
                        jwt:jwt
                    }
                    console.log(obj);
                    localStorage.setItem("token",JSON.stringify(obj));
                    if(Access){
                        document.getElementById("otp").value = Access;
                    }
                    if(opaq){
                        document.getElementById("op").innerHTML = opaq;
                    }

                
                }
                

            
                const datas = new bootstrap.Modal(document.getElementById("myModal"));
                datas.show();
            })
            .catch(error => console.log(error));
    }
    else if (valid) {
        alert("Invalid Username and Password")
    }
}
function submit(){
    let access = document.getElementById("otp").value;
    let Opaque = document.getElementById("op").innerHTML;
    var payload = {
        accessCode:access,
        opaque:Opaque
    }
    var acget = JSON.parse(localStorage.getItem("token"));
    console.log(payload);
    fetch("https://hastin-container.com/staging/app/auth/access-code/validate",{
        method: "POST",
        headers: {
            "content-type": "application/json",
            "Authorization": "BslogiKey " + acget.jwt
        },
        body: JSON.stringify(payload),
    })
    
}






