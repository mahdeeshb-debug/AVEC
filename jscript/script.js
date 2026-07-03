
// DARK MODE
const btn = document.getElementById("toggle");
if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark");
}
btn.onclick =()=>{
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    localStorage.setItem("theme","dark");
  }else{
    localStorage.setItem("theme","light");
  }
}
// support button
const supportBtn = document.getElementById("supportBtn");
if (supportBtn) {
  supportBtn.textContent = d.support;
}
// fade hero
hero.classList.add("fade");
setTimeout(()=>{ 
  heroTitle.textContent=d.heroT;
  heroText.textContent=d.heroD;
  hero.classList.remove("fade");
},300);

// CARDS
c1t.textContent=d.cards[0][0]; c1d.textContent=d.cards[0][1];
c2t.textContent=d.cards[1][0]; c2d.textContent=d.cards[1][1];
c3t.textContent=d.cards[2][0]; c3d.textContent=d.cards[2][1];

// DONATE
updateMappedElements(l);

// Get footer elements
const footerContactTitle = document.getElementById("footerContactTitle");
const footerAddress = document.getElementById("footerAddress");
const footerEmail = document.getElementById("footerEmail");
const footerPhone = document.getElementById("footerPhone");

// Initialize EmailJS
emailjs.init("nxkp4aPmtJOOqae__");

function sendEmail() {
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("senButton");
  const originalText = submitBtn.innerText;

  // Feedback
  submitBtn.innerText = "Sending...";
  submitBtn.disabled = true; // prevent multiple clicks

  emailjs.sendForm("service_bfwtjhe", "template_kw9136u", contactForm, "nxkp4aPmtJOOqae__")
    .then(() => {
      alert("Message sent successfully!");
      contactForm.reset();       // clear fields
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
    })
    .catch((error) => {
      alert("Failed to send message, please try again.");
      console.error("EmailJS error:", error);
      submitBtn.innerText = originalText;
      submitBtn.disabled = false;
    });
}
function toggleDropdown(button) {
    const menu = button.nextElementSibling;
    const isOpen = menu.classList.toggle("show");

    button.setAttribute("aria-expanded", isOpen);
  }

  // Close when clicking outside
  document.addEventListener("click", function (e) {
    const dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(e.target)) {
      const menu = dropdown.querySelector(".dropdown-menu");
      const button = dropdown.querySelector(".dropdown-toggle");

      menu.classList.remove("show");
      button.setAttribute("aria-expanded", "false");
    }
  });
  
