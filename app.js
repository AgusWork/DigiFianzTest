/*------------------------------------------------------------   Html Callbacks    ---------------------------------------------------------------*/
const navToggleAbr = document.querySelector(".nav-toggle_abrir");
const navToggleCerr = document.querySelector(".nav-toggle_cerrar");
const empBtn1 = document.querySelector(".Empty-button-white_1");
const empBtn2 = document.querySelector(".Empty-button-white_2");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");
const fade = document.querySelector('#fade');
const closePopUp = document.querySelector(".nav-toggle_cerrar_pop");
let container = document.querySelector('.cards-container');
let slider = document.querySelector('.slider');
let formPopup = document.querySelector("#form_popup");
/*--------------------------------------------------------------   Variables    -----------------------------------------------------------------*/

let pressed = false;
let startx;
let x;
/*--------------------------------------------------------   Funcionalidad Slider    ------------------------------------------------------------*/

container.addEventListener('touchdown', (e)=> {
  pressed = true;
  startx = e.offsetX - slider.offsetLeft;
  if (innerWidth < 770 ) {
      container.style.cursor = 'grabbing';
  } else{
    container.style.cursor = 'default';
  }
})
container.addEventListener('touchenter', (e)=> {
  if (innerWidth < 770 ) {
  container.style.cursor = 'grab';
    } else{
      container.style.cursor = 'default';
  }
})

container.addEventListener('touchup', (e)=> {
  if (innerWidth < 770 ) {
  container.style.cursor = 'grab';
} else{
  container.style.cursor = 'default';
}
})
window.addEventListener('touchup', (e)=> {
  pressed = false;
})
container.addEventListener('touchmove', (e)=> {
    if (!pressed) return;
    e.preventDefault();
      
    x = e.offsetX

    slider.style.left = `${x - startx}px`;
    checkboundary()

})

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
  window.addEventListener("DOMContentLoaded", () => {
    if(formPopup.style.display !== "none") (function (){
      window.addEventListener("click", () => { closePopUp.style.border = "none";
    });
    })();
  });


  function cancelarform() {
  document.getElementById("form_popup").style.display = "none",
  body.classList.toggle("body_modif"),
  document.getElementById('fade').style.display='none'
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
    document.getElementById('fade').style.display='none'

});

