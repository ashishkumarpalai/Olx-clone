//===================================product fetch start======================
const datafetch = () => {
    fetch("https://worried-tweed-jacket-calf.cyclic.app/products", {
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem("token")
        }
    })
        .then(res => res.json())
        .then((res) => {
            displaydata(res)
            console.log(res)
        })
        .catch((err) => console.log(err))
}

datafetch()
const dataafetch = () => {
    fetch("https://worried-tweed-jacket-calf.cyclic.app/products/p", {
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem("token")
        }
    })
        .then(res => res.json())
        .then((res) => {
            displaydata(res)
            // console.log(res)
        })
        .catch((err) => console.log(err))
}

dataafetch()
function displaydata(data) {
    let main = document.getElementById("product-details")
    main.innerHTML = null;
    data.forEach(element => {
        main.innerHTML += `
            <div class="addtocart">
                <img src=${element.image} alt="">
                <h3 id="amodel">Model:${element.model}</h3>
                <h4 id="aprice">${element.price}</h4>
                <p id="aadress">Address:${element.adress}</p>
                <p id="akm">KM:${element.km}</p>
                <div>
                <button class="pbtn">Add to Cart</button>
                <button id="chat">Chat with Seller</button>
                </div>
            </div>
            `
    });
}
// ===========================product fetch end==================================
// product added add to cart start
let main=document.getElementById("productcontainer")
main.addEventListener("click", (event) => {
    if(event.target.classList.contains("pbtn")){
        let cardElement=event.target.closest(".addtocart")
    
    let payload={
        image:cardElement.querySelector("img").src,
        model:cardElement.querySelector("#amodel").textContent,
        price:cardElement.querySelector("#aprice").textContent,
        adress:cardElement.querySelector("#aadress").textContent,
        km:cardElement.querySelector("#akm").textContent,
        quantity:"1"
    }
    fetch("https://worried-tweed-jacket-calf.cyclic.app/addtocarts/create", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Authorization:localStorage.getItem("token")
        },
        body: JSON.stringify(payload)
    }).then(res => res.json())
        .then((res) => {
            if (res.msg === "Product is already in cart") {
                alert("product already in cart");
            } else {
                console.log(res)

                alert("Product successfully added")
            }

        })
        .catch(err => console.log(err))
    }
})
// product data add ti cart end
// ====================delete add=========================

// =========search start=============
const search = () => {
    const searchBtn = document.getElementById("searchbtn");
    const searchInput = document.getElementById("searchid");

    searchBtn.addEventListener("click", () => {
        const key = searchInput.value;
        if (key.trim() === "") {
            return;
        }
        fetch(`https://worried-tweed-jacket-calf.cyclic.app/products/search/${key}`)
            .then(response => response.json())
            .then(data => {
                // Display the search results in the UI
                displaydata(data)

                // console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    });
}
search()
//==========search end=================
//=================logout start=========================
const account = document.getElementById("account")
account.innerText = localStorage.getItem("name")
document.getElementById("logout").addEventListener("click", () => {
    localStorage.clear();
    window.open("index.html")
})
//=============logout end=========================

// ===================add to cart page redirect start
document.getElementById("addtocartpage").addEventListener("click", () => {
    window.open("addtocart.html")
})
// ===============================add to cart page redirect end

// ==========================sorting price start=================================
document.getElementById("sortdata").addEventListener("change", (e) => {
    let sortby = e.target.value;
    if (sortby == "lth") {
        data = "https://worried-tweed-jacket-calf.cyclic.app/products/lth"
    } else if (sortby == "htl") {
        data = "https://worried-tweed-jacket-calf.cyclic.app/products/htl"
    }
    else {
        data = "https://worried-tweed-jacket-calf.cyclic.app/products/"
    }
    fetch(data, {
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem("token")
        }
    })
        .then(res => res.json())
        .then((res) => {
            displaydata(res)
            console.log(res)
        })
        .catch((err) => console.log(err))

})
// =========================sorting price end===================================
// =========================model filter start=================================
document.getElementById("model").addEventListener("change", (e) => {
    let sortby = e.target.value;

    if (sortby == "") {
        fetch(`https://worried-tweed-jacket-calf.cyclic.app/products`, {
            headers: {
                "Content-type": "application/json",
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then((res) => {
                displaydata(res)
                console.log(res)
            })
            .catch((err) => console.log(err))
    } else {
        fetch(`https://worried-tweed-jacket-calf.cyclic.app/products/?category=${sortby}`, {
            headers: {
                "Content-type": "application/json",
                Authorization: localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then((res) => {
                displaydata(res)
                console.log(res)
            })
            .catch((err) => console.log(err))
    }

})
// =========================model filter start==================================
// =========================custumer filter start==============================
document.getElementById("verify").addEventListener("change", (e) => {
    let sortby = e.target.value;

    fetch(`https://worried-tweed-jacket-calf.cyclic.app/products/?verified=${sortby}`, {
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem("token")
        }
    })
        .then(res => res.json())
        .then((res) => {
            displaydata(res)
            console.log(res)
        })
        .catch((err) => console.log(err))

})
// =============================custumer filter end==========================

let contry = document.getElementById('contry');
let moving = document.getElementById('moving');
let text = document.getElementById('text');
let list = document.getElementById('list');

contry.addEventListener('click', () => {
    list.classList.toggle('hidden');
    moving.classList.toggle('roted')
});
function myfunction(omkar) {
    text.innerHTML = omkar;
}

// hindi eng
let eng_tag = document.getElementById('eng_tag');
let hin_eng = document.querySelector('.hin_eng');
let language = document.querySelector('.language');

language.addEventListener('click', () => {
    hin_eng.classList.toggle('display_div');
});
function languageolx(anyone) {
    eng_tag.innerHTML = anyone;
}
// profile
let girl_img_id = document.getElementById('girl_img_id');
let gropdwonid = document.getElementById('gropdwonid');

girl_img_id.addEventListener('click', () => {
    gropdwonid.classList.toggle('block_div')
});
// ==========================navbar 2======================

const menuIcon = document.querySelector('.menu-icon');
const nav2 = document.querySelector('#nav2');

menuIcon.addEventListener('click', () => {
    nav2.classList.toggle('collapsed');
});
