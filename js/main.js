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
// Email capture — overrides the basic version
(function() {
  const btn = document.querySelector('.cta-section .btn-big');
  const input = document.querySelector('.email-input');
  if (!btn || !input) return;

  // Remove old listener by replacing the element
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);

  newBtn.addEventListener('click', async () => {
    const email = input.value.trim();
    if (!email.includes('@')) {
      input.style.borderColor = '#EF4444';
      input.placeholder = 'Please enter a valid email';
      return;
    }
    newBtn.disabled = true;
    newBtn.textContent = 'Submitting...';
    try {
      const res = await fetch('https://univestree-backend.vercel.app/api/emails/capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      input.style.borderColor = '#10B981';
      input.value = '✅ You\'re on the list!';
      input.disabled = true;
      newBtn.textContent = 'Done!';
    } catch(e) {
      newBtn.disabled = false;
      newBtn.textContent = 'Try Again';
      input.style.borderColor = '#EF4444';
    }
  });
})();
