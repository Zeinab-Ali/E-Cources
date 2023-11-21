var up = document.getElementById("up"); 
 
 
 
//  button up 
window.onscroll= function(){  
     
    if(this.pageYOffset >= 600){ 
         up.style.display ="block";
    }  
    else{ 
        up.style.display ="none";
    }
    // console.log(this.pageYOffset); 
    

}; 
up.onclick = function(){ 
 
     window.scrollTo(0,0);

};