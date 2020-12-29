document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });

//scrollanimation para la pag
ScrollReveal().reveal('.anuncio');

ScrollReveal().reveal('.nueva-carta-1', { delay: 400 });
ScrollReveal().reveal('.nueva-carta-2', { delay: 500 });
ScrollReveal().reveal('.nueva-carta-3', { delay: 400 });
ScrollReveal().reveal('.nueva-carta-4', { delay: 500 });
ScrollReveal().reveal('.nueva-carta-5', { delay: 500 });
ScrollReveal().reveal('.nueva-carta-6', { delay: 400 });
ScrollReveal().reveal('.nueva-carta-7', { delay: 500 });
ScrollReveal().reveal('.nueva-carta-8', { delay: 400 });

ScrollReveal().reveal('.carta-banner-uno', { delay: 400 });
ScrollReveal().reveal('.carta-banner-dos', { delay: 400 });


//scrollanimation para las web social icon
ScrollReveal().reveal('.fa-facebook-f', { delay: 350});
ScrollReveal().reveal('.fa-twitter', { delay: 420});
ScrollReveal().reveal('.fa-linkedin', { delay: 490});

//animate.css js
//const element = document.querySelector('.my-element');
//element.classList.add('animate__animated', 'animate__swing');
