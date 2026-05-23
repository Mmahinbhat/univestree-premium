console.log("Univestree Loaded");


// CARD HOVER ANIMATION

const cards = document.querySelectorAll(".card");

cards.forEach((card)=>{

card.addEventListener("mouseenter",()=>{

card.style.transform = "translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform = "translateY(0px)";

});

});


// BUTTON CLICK EFFECT

const buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{

button.addEventListener("click",()=>{

button.style.transform = "scale(0.96)";

setTimeout(()=>{

button.style.transform = "";

},150);

});

});


// PAGE LOAD ANIMATION

window.addEventListener("load",()=>{

document.body.style.opacity = "1";

});

document.body.style.opacity = "0";
document.body.style.transition = "0.5s";


// ACTIVE NAVIGATION

const links = document.querySelectorAll("nav ul li a");

links.forEach((link)=>{

if(link.href === window.location.href){

link.style.color = "#2563EB";

}

});