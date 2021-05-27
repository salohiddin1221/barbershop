let openN = document.querySelector('.open'),
     closeN = document.querySelectorAll('.closeN'),
     navbar = document.querySelector('.mobile_navbar');


openN.addEventListener('click' , function(){
    navbar.style.clipPath = 'circle( 150% at 100% 0'
})

for (let i =0 ; i < closeN.length ; i ++){
closeN[i].addEventListener('click' , function(i ){
    navbar.style.clipPath = 'circle( 0 at 100% 0'
})}