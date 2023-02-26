const showdata = () => {
    fetch("https://worried-tweed-jacket-calf.cyclic.app/addtocarts", {
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem("token")
        }
    })
        .then(res => res.json())
        .then((res) => {
            displaycartdata(res)
            console.log(res)
        })
        .catch((err) => console.log(err))
}
showdata()
function displaycartdata(data) {
    let main = document.querySelector(".left")
    main.innerHTML = null;
    data.forEach(element => {
        main.innerHTML += `
                <div class="singleDiv">
                    <img src="${element.image}" alt="">
                    <h3>Model:${element.model}</h3>
                    <h4>${element.price}</h4>
                    <p>Address:${element.adress}</p>
                    <p>KM:${element.km}</p>
                    <button class="deletee">Delete</button>
                </div>
        `

    });
}

// ======================delete======

let main = document.querySelector(".left")
main.addEventListener("click", (event) => {
    if(event.target.classList.contains("deletee")){
    const cardElement = event.target.closest(".singleDiv")
    const payload = {
        image: cardElement.querySelector("img").src,
    };
    fetch("https://worried-tweed-jacket-calf.cyclic.app/addtocarts/delete", {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            Authorization: localStorage.getItem("token")
        },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then((res) => {
            // console.log(res)
            displaycartdata(res)
            // alert("product deleted")

        })
        .catch(err => console.log(err))

    }
})


document.getElementById("buttonn").addEventListener("click",()=>{
    window.open("payment.html")
})


//=================logout start=========================
const account = document.getElementById("account")
account.innerText = localStorage.getItem("name")
document.getElementById("logout").addEventListener("click", () => {
    localStorage.clear();
    window.open("index.html")
})
//=============logout end=========================

// extra logic in nav bar
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
