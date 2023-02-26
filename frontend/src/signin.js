
let form2 = document.getElementById("form-signin")
form2.addEventListener("submit", (e) => {
    e.preventDefault()
    const payload = {
        email: document.getElementById("email1").value,
        pass: document.getElementById("password1").value
    }
    fetch("https://worried-tweed-jacket-calf.cyclic.app/users/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then(res => {
            if (res.msg === "Login successful") {
                localStorage.setItem("token", res.token)
                localStorage.setItem("user", res.user[0]._id)
                localStorage.setItem("name", res.user[0].name)
                console.log(res)
                swal("Login Successful", "", "success")
                window.open("product.html")
            } else if (res.msg === "Wrong Creadential") {
                swal("email & password did not match");
                console.log("wrong")
            }

        })
        .catch(err => console.log(err.message))
})
