//===================================product fetch start======================
const datafetch = () => {
    fetch("http://localhost:1111/products", {
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

datafetch()
function displaydata(data) {
    let main = document.getElementById("product-details")
    main.innerHTML = null;
    data.forEach(element => {
        main.innerHTML += `
            <div >
                <img src=${element.image} alt="">
                <h3>Model:${element.model}</h3>
                <h4>$:${element.price}</h4>
                <p>Address:${element.adress}</p>
                <p>KM:${element.km}</p>
        <div>
          <button>Add to Cart</button>
          <button>Chat with Seller</button>
        </div>
      </div>
            `

    });
}
// const search=()=>{
//     let searchbox=document.querySelector(".searchtext");
//     let payload={
//         key:searchbox.value
//     }
//     let url=new URL("http://localhost:1111/products/search");
//     url.search=new URLSearchParams(payload).toString()
//     fetch(url,{
//         headers:{
//             "Content-type":"application/json",
//             Authorization:localStorage.getItem("token")
//         }
//     })
//     .then((res)=>res.json())
//     .then((res)=>{
//         console.log(res)
//         displaydata(res)
//     })
//     .catch((err)=>console.log(err))
// }
// search()
// document.querySelector(".se")
// ===========================product fetch end==================================
// ==========================sorting price start=================================
document.getElementById("sortdata").addEventListener("change", (e) => {
    let sortby = e.target.value;
    if (sortby == "lth") {
        data = "http://localhost:1111/products/lth"
    } else if (sortby == "htl") {
        data = "http://localhost:1111/products/htl"
    }
    else {
        data = "http://localhost:1111/products/"
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
        fetch(`http://localhost:1111/products`, {
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
        fetch(`http://localhost:1111/products/?category=${sortby}`, {
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

    fetch(`http://localhost:1111/products/?verified=${sortby}`, {
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
