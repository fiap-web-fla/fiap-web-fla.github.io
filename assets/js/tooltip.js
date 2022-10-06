const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");


//alvo.addEventListener("evento", função);
//mouseover, função arrow no body
//mouseout, função arrow no body devolve sem cor
body.addEventListener("mouseover", (e) => {
    body.style.background = "gray";
});

body.addEventListener("mouseout", (e) => {
    body.style.background = "unset"; //unset desfaz
});

// tooltip.addEventListener("mouseover", (e) => {
// console.log("Altura da Página", body.clientHeight);
// console.log("Largura da Página", body.clientWidth);
// console.log("Altura do tooltip", tooltip.clientHeight);
// console.log("Largura do tooltip", tooltip.clientWidth);
// console.log("Altura do mouse", e.clientY);
// console.log("Largura do mouse", e.clientX);

//     if(document.querySelector(".tooltip")){
//         document.querySelector(".tooltip").remove();
//     }
//     const newDiv = document.createElement('div');
//     newDiv.classList.add("tooltip");
//     newDiv.innerHTML=
//     "Gelatooo para tu aaaaaah chasy wiiiii wiiiii daa hahaha me want bananaaa! Daa jiji bappleees tanque yuuu! Butt po kass gelatooo hahaha. Potatoooo poulet tikka masala bunda poopayee uuuhhh po kass. Chasy belloo! Daa baboiii ti aamoo! Daa.";
// //o texto será um parâmetro da função
//   const largura = 200;
//   newDiv.style.position = "fixed";
//   newDiv.style.width = largura + "px";
//   newDiv.style.top = e.clientY + "px";
//   newDiv.style.display = "flex";
//   newDiv.style.left =
//     (e.clientX + largura > body.clientWidth
//       ? e.clientX - largura - 20
//       : e.clientX + largura) + "px";

//   console.log(newDiv.style.width, "width");

//   header.appendChild(newDiv);
// });

tooltip.addEventListener("mouseout", (e) => {
    if(document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
    }
});

//tooltip("#tooltip", "texto do tooltip");

const fixText = (alvo, texto) => {
    const tooltip = document.querySelector(alvo)
    tooltip.addEventListener("mouseover", (e) => {      
        if(document.querySelector(".tooltip")){
            document.querySelector(".tooltip").remove();
        }
        const newDiv = document.createElement('div');
        newDiv.classList.add("tooltip");
        newDiv.innerHTML = texto;
            
        //o texto será um parâmetro da função
        const largura = 200;
        newDiv.style.position = "fixed";
        newDiv.style.width = largura + "px";
        newDiv.style.top = e.clientY + "px";
        newDiv.style.display = "flex";
        newDiv.style.left =
        (e.clientX + largura > body.clientWidth
            ? e.clientX - largura - 20
            : e.clientX + largura) + "px";

        console.log(newDiv.style.width, "width");

        header.appendChild(newDiv);
    });
}

fixText("#tooltip","Gelatooo para tu aaaaaah");