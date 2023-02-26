// ===============navbar============
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

//=============================== add 1=============

let ad_img = document.querySelector('.ad_img');
let ad_icon = document.getElementById('ad_icon');


ad_icon.addEventListener('click', () => {
    ad_img.style = `display: none`;
});
///////data hoe
const datafetch = () => {
    fetch("http://localhost:1111/products/homepage", {
        headers: {
            "Content-type": "application/json",
            // Authorization: localStorage.getItem("token")
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
    let main = document.getElementById("rightcontainer")
    main.innerHTML = null;
    data.forEach(element => {
        main.innerHTML += `
        <a href="../html/signin.html">
        <div >
        <img src=${element.image} alt="">
        <h3>${element.model}</h3>
        <h4>${element.price}</h4>
        <p>${element.adress}</p>
        <p>${element.km}</p>
    </div>
    </a>
        `
       
    });
}
// ==========search start
const search=()=>{
    const searchBtn = document.getElementById("searchbtn");
    const searchInput = document.getElementById("searchid");

    searchBtn.addEventListener("click",() => {
        const key = searchInput.value;
        if (key.trim() === "") {
            return;
        }
        fetch(`http://localhost:1111/products/search/${key}`)
            .then(response => response.json())
            .then(res => {
                // Display the search results in the UI
                displaydata(res)
                
                // console.log(res);
            })
            .catch(error => {
                console.log(error);
            });
    });
}
search()
// =============search end
