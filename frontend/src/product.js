
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
            console.log(res)
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
