//DOM
//let input = document.getElementById("nombre del id");
//let unDiv = document.querySelector("div");
// ES ARRAY
//let allDiv = array.from(document.querySelectorAll("div"));
// NO ES ARRAY
//let todosDiv = document.querySelectorAll("div");
//AGREGAR TEXTO
// let tiTulo2 = document.querySelector(".titulo2") . innerText += " ITZY";
// console.log(h1_2);
//CAMBIAR TEXTO O AGREGAR TEXTO AGREGAR TEXTO += CAMBIAR TEXTO =
//let titulo2 = document.querySelector(".titulo2") . innerText = " ITZY FOR EVER!!!";
// AGREGAR HTML
//let titulo_2 = document.querySelector(".titulo2") . innerHTML += "<br> <h2> K-POP <h2/>";
// titulo2 = document.querySelector (".titulo2")
// titulo2.classList.add("text-danger");
// titulo2.classList.remove("text-center");
// titulo2.classList.replace("text-danger", "text-primary");
// let chae = document.querySelector(".aca");
// chae.classList.remove ("text-danger");

//  let weAre = document.querySelector("#first_title");
//  let fontSize = 120;
//  let increment = 1;
//  let interval = setInterval(function(){
//     if(fontSize >= 120){
//          increment = -1;
//     }else if(fontSize <= 1){
//         increment = 1;
//     }
//      fontSize += increment;
//      weAre.style.fontSize = fontSize + "px"; 
//  }, 50);


// TITULO ANIMADO

let first_title = document.querySelector("#first_title");
let Font_original = parseInt(window.getComputedStyle(first_title).getPropertyValue("font-size"));

window.addEventListener("scroll", function() {
    if (window.scrollY > 0){
       first_title.style.fontSize = (Font_original + 10) + "px";
    } else {
        first_title.style.fontSize = Font_original + "px";
    }
});