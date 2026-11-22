
//template_74mxy3v
//s1dy4w03WKd70QsH2
//service_rk2az7r

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');

  sidebar.style.display = "flex"
}

function closwSidbar(){
    const sidebar = document.querySelector('.sidebar');

  sidebar.style.display = "none"
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-theme");
}

function closeModal(){
  const modalclose = document.querySelector(".modal")
  modalclose.style.display = "none"
}

function showModal(){
  const showmodal = document.querySelector(".modal")
  showmodal.style.display = "flex"
}



// function showModal() {
//   const modal = document.querySelector(".modal");

//   if (modal.style.display === "flex") {
//     modal.style.display = "none";
//   } else {
//     modal.style.display = "flex";
//   }
// }

// function showModal() {
//   const modal = document.querySelector(".modal");

//   if (modal.style.display === "flex") {
//     document.body.classList.remove("modal--open");
//     setTimeout(() => {
//       modal.style.display = "none";
//     }, 300); // Waits 300ms for the slide-out transition to finish
//   } else {
//     modal.style.display = "flex";
//     setTimeout(() => {
//       document.body.classList.add("modal--open");
//     }, 1000); // Triggers the slide-in transition right after flex renders
//   }
// }

function showModal() {
  const modal = document.querySelector(".modal");

  if (modal.style.display === "flex") {
    document.body.classList.remove("modal--open");
    setTimeout(() => {
      modal.style.display = "none";
    }, 600); // Matches your 600ms CSS transition on close
  } else {
    modal.style.display = "flex";
    setTimeout(() => {
      document.body.classList.add("modal--open");
    }, 10); // 10ms triggers the animation right away without a 1-second lag
  }
}


function contact(event){
  event.preventDefault();
   const loading = document.querySelector(".modal__overlay--loading");
   const success =document.querySelector(".modal__overlay--success");
   loading.classList.add("modal__overlay--visible")
  emailjs 
  .sendForm(
    'service_rk2az7r',
    'template_74mxy3v',
    event.target,
    's1dy4w03WKd70QsH2'

  ).then(()=>{
   
    loading.classList.remove("modal__overlay--visible");
    success.classList.add("modal__overlay--visible") ;
  }).catch(()=>{
    loading.classList.remove("modal__overlay--visible")
    alert("The email service is temporarily unavailable. Please contact me directly at your.email@example.com");
  })
    
}