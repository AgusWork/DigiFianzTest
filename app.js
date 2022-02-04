/*------------------------------------------------------------   Html Callbacks    ---------------------------------------------------------------*/
const navToggleAbr = document.querySelector(".nav-toggle_abrir");
const navToggleCerr = document.querySelector(".nav-toggle_cerrar");
const empBtn1 = document.querySelector(".Empty-button-white_1");
const empBtn2 = document.querySelector(".Empty-button-white_2");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");
const fade = document.querySelector('#fade');
const closePopUp = document.querySelector(".cerrar_img");
let container = document.querySelector('.cards-container');
let slider = document.querySelector('.slider');
let formPopup = document.querySelector("#form_popup");
/*--------------------------------------------------------------   Variables    -----------------------------------------------------------------*/

let pressed = false;
let startx;
let x;
/*--------------------------------------------------------   Funcionalidad Slider    ------------------------------------------------------------*/

container.addEventListener('mousedown', (e)=> {
  pressed = true;
  startx = e.offsetX - slider.offsetLeft;
  if (innerWidth < 770 ) {
      container.style.cursor = 'grabbing';
  } else{
    container.style.cursor = 'default';
  }
})
container.addEventListener('mouseenter', (e)=> {
  if (innerWidth < 770 ) {
  container.style.cursor = 'grab';
    } else{
      container.style.cursor = 'default';
  }
})

container.addEventListener('mouseup', (e)=> {
  if (innerWidth < 770 ) {
  container.style.cursor = 'grab';
} else{
  container.style.cursor = 'default';
}
})
window.addEventListener('mouseup', (e)=> {
  pressed = false;
})
container.addEventListener('mousemove', (e)=> {
    if (!pressed) return;
    e.preventDefault();
      
    x = e.offsetX

    slider.style.left = `${x - startx}px`;
    checkboundary()

})
container.addEventListener('touchstart', (e) => {
  pressed = true;
  startx = e.targetTouches[0].clientX - slider.offsetLeft;
}, {passive: true});



container.addEventListener('touchmove', (e) => {
  if(!pressed) return;
  x = e.targetTouches[0].clientX;

  slider.style.left = `${x - startx}px`;  
  checkboundary();
}, {passive: true});

function checkboundary(){
  let outer = container.getBoundingClientRect();
  let inner = slider.getBoundingClientRect();

  if (parseInt(slider.style.left) > 0) {
    slider.style.left = '0px';
  } else if (inner.right < outer.right){
    slider.style.left = `-${inner.width - outer.width}px`;
  }

}
  /*--------------------------------------------------------   Funcionalidad PopUp    ------------------------------------------------------------*/

function abrirform() {
  formPopup.style.display = "block",
  fade.style.display='block',
  body.classList.toggle("body_modif")

  }


  function cancelHover() {
    MotorFadeInFadeOut(closePopUp);

}
  function MotorFadeInFadeOut(){
    FadeIn();  
    window.setTimeout(function(){  
    FadeOut();             
    },320); 
    }

  function FadeIn(){
      window.setTimeout(function(){
        closePopUp.style.background = "rgba(71, 181, 255, 0.4)",
        closePopUp.style.border = "4px solid rgba(71, 181, 255, 0.6)" }, 3)
  }

  
  function FadeOut(){
    window.setTimeout(function(){
      closePopUp.style.background = "none",
        closePopUp.style.border = "#FFF" }, 3)
  }

  function cancelarform() {
  formPopup.style.display = "none",
  body.classList.toggle("body_modif"),
  fade.style.display='none'
  }

  /*------------------------------------------------------   Funcionalidad NavMobile    ---------------------------------------------------------*/

navToggleAbr.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible"),
    body.classList.toggle("body_modif"),
    fade.style.display='block',
    empBtn2.style.display='block',
    empBtn1.style.display='none'

});

navToggleCerr.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible"),
    body.classList.toggle("body_modif"),
    fade.style.display='none'

});

