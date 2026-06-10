var nav = document.getElementById('nav');
var div = document.querySelector('.scroll');
var button = document.querySelector('.boton_subi_riba');

var faq = document.getElementsByClassName('faq_pirgunta');
var muda = document.querySelectorAll('#muda');

const toggleBtn = document.querySelector('.hamburger');
const toggleBtnIcon = document.querySelector('.hamburger i');
const dropDownMenu = document.querySelector('.dropdown-menu');


window.onscroll = function () {

   if(window.scrollY > 50){

     
      nav.style.position = "fixed";
      nav.style.top = 0;
      nav.style.zIndex = 1;

      div.style.display = "flex";
      div.style.zIndex = 5;
     

   }else{
      // nav.style.position = "absolute";
      nav.style.position = 'relative'; //fixed
      nav.style.top = 100;
      
   }

}

button.addEventListener('click', function () {
   window.scrollTo(0,0);
});

for (let index = 0; index < faq.length; index++) {
   faq[index].addEventListener('click', function() {

      var panel = this.nextElementSibling;
      //mudaKlasi.replace("fa-circle-plus", "fa-circle-minus");

      if(panel.style.display === 'block') {
         panel.style.display = 'none';
         muda.forEach(element => {
            element.className = 'fa fa-circle-plus';
         });
         
      }else {
         panel.style.display = 'block';
         muda.forEach(index => {
            index.className = 'fa fa-circle-minus';
         });
      }
   })
   
}

//kodigu di menu 

toggleBtn.onclick = function () {
   dropDownMenu.classList.toggle('open');
   const isOpen = dropDownMenu.classList.contains('open');

   toggleBtnIcon.classList = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
}
