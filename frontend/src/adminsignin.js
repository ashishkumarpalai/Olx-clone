
let form2 = document.getElementById("form")
form2.addEventListener("submit", (e) => {
    e.preventDefault()
    const payload = {
        email: document.getElementById("username").value,
        pass: document.getElementById("password").value
    }
    fetch("http://localhost:1111/users/adminlogin", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res => {
            if (res.msg === "Login successful") {
                localStorage.setItem("token", res.token)
                console.log(res)
                swal("Login Successful", "", "success")
                window.open("admin.html")
            } else if (res.msg === "Wrong Creadential") {
                swal("email & password did not match");
                console.log("wrong")
            }

        })
        .catch(err => console.log(err.message))
})
