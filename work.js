document.addEventListener("DOMContentLoaded", function () {

    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");

    toggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });

  });
  window.addEventListener("load", function(){
     setTimeout(function(){
         document.getElementById("loader").style.display = "none";
         document.getElementById("main-content").style.display = "block";
     }, 1000); // 5000ms = 5 seconds
 });
// const words = ["Frontend Developer", "Web Developer", "Creative Designer"];
//   let i = 0;
//   let j = 0;
//   let currentWord = "";
//   let isDeleting = false;

  function type() {
   currentWord = words[i];

  if (isDeleting) {
   document.getElementById("typing").textContent =
   currentWord.substring(0, j--);
   } else {
   document.getElementById("typing").textContent =
   currentWord.substring(0, j++);
   }

  if (!isDeleting && j === currentWord.length) {
   isDeleting = true;
   setTimeout(type, 1000);
   return;
   }

  if (isDeleting && j === 0) {
   isDeleting = false;
   i = (i + 1) % words.length;
   }
   setTimeout(type, isDeleting ? 50 : 100);
  }
  document.getElementById("year").textContent = new Date().getFullYear();


  function showMessage() {
      alert("Welcome to my digital space explore my project let's build something amazing together!");
  }

  const text = [
      "Creative Ideas. Smart Technology.",
      "Designing the Future Digitally.",
      "Where Art Meets Technology.",
      "Building Simple but Powerful Solutions."
  ];

  let index = 0;
  setInterval(() =>{
      index = (index + 1)% TextDecoderStream.length;
      document.getElementById("changingText").textContent = texts[index];
  }, 3000);
  document.getElementById("year").textContent = new Date().getFullYear();


  const btn = document.getElementById("backToTop");

  
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  
  btn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  document.addEventListener("DOMContentLoaded", function () {

  const text = ["Web Developer", "Frontend Developer", "UI Designer"];
  let i = 0;
  let j = 0;
  let currentText = "";
  let isDeleting = false;

  function type() {
    currentText = text[i];

    if (isDeleting) {
      document.getElementById("typing").textContent =
        currentText.substring(0, j--);
    } else {
      document.getElementById("typing").textContent =
        currentText.substring(0, j++);
    }

    if (!isDeleting && j === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
      setTimeout(type, 300);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  }

  type();

});
