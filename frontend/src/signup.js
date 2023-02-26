
let form1 = document.getElementById("signup-form")
form1.addEventListener("submit", (e) => {
    e.preventDefault()
    const payload = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        gender: document.getElementById("gender").value,
        mobile: document.getElementById("mobile").value,
        city: document.getElementById("city").value,
        pass: document.getElementById("password").value
    }
    fetch("https://worried-tweed-jacket-calf.cyclic.app/users/register", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then((res) => {
            if (res.msg === "email is already presented in data base") {
                swal("email already register");
            } else {
                console.log(res)
                window.open("signin.html")
            }

        })
        .catch(err => console.log(err))
})
