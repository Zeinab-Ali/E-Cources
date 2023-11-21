

$(document).ready(function () {
    //Owl
    $('.background-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 3000,
    })
});
 
 
// section-2 
 
 
//    var graphy = document.getElementById("graphy"); 
//    var img = document.getElementById("img"); 
    
//    graphy.onclick = function(){ 
       
//     img.setAttribute("src","images/project2.jpg")
//    }; 
 

 
//  button up  
 var up = document.getElementById("up");
 window.onscroll= function(){  
     
    if(this.pageYOffset >= 900){ 
         up.style.display ="block";
    }  
    else{ 
        up.style.display ="none";
    }
   
 }; 
  up.onclick = function(){ 
 
      window.scrollTo(0,0);

 }; 
  
  
//  whatsab button 
 
// login and register 
 
const wrapper= document.querySelector('.wrapper'); 
const loginLink= document.querySelector('.login-link') ;
const registerLink= document.querySelector('.register-link') ;  
const btnContact= document.querySelector('.btn-contact') ; 

 
 
registerLink.addEventListener('click', ()=>{ 
    wrapper.classList.add('active');
}); 

loginLink.addEventListener('click', ()=>{ 
    wrapper.classList.remove('active');
});  
btnContact.addEventListener('click', ()=>{ 
    wrapper.classList.add('active-modal');
});  
 
 
 
// Start Whatsapp Chating  
 
var Whatsapp_Icon = document.getElementById("Whatsapp_Icon");
var All_inf_whatsapp = document.getElementById("All_inf_whatsapp");

Whatsapp_Icon.onclick = function(){
  this.classList.toggle("found");

  if(this.getAttribute("class") == "Whatsapp_Icon found"){
    All_inf_whatsapp.style.transform = "translateY(0)";
    All_inf_whatsapp.style.transition = ".5s";
  }
  else{
    All_inf_whatsapp.style.transform = "translateY(130%)";
    All_inf_whatsapp.style.transition = ".5s";
  }
  
}
 
 
// interval image  
 
var counter = document.getElementById("counter"); 
var advertisement = document.getElementById("advertisement"); 
var close = document.getElementById("close"); 
 
var set = setInterval(function(){ 
 
    counter.textContent++; 
     
    if(counter.textContent==50){ 
        advertisement.style.right ="50px" ;
        advertisement.style.transition = "1s"; 
          clearInterval(set);
    }
},500); 
 
close.onclick =function(){ 
    advertisement.style.right ="-100%" ;
    advertisement.style.transition = "1.5s"; 
};