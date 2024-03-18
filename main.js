let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .flex .navbar");

menuBtn.onclick = ()=>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle("active");
}


// Swiper


var swiper = new Swiper(".course-slider", {
    spaceBetween:20,
    grabCursor:true,
    loop:true,
    // clickable:true,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
 
  });


  var swiper = new Swiper(".teacher-slider", {
    spaceBetween:20,
    grabCursor:true,
    loop:true,
    // clickable:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
 
  });

