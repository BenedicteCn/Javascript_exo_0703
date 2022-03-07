//Fonctionnalité 1

//Fonctionnalité 1bis :

let footer = document.querySelector("footer");
i = 0
footer.addEventListener("click",function(){
  i++
  console.log(`Et +1 click ! Il y a eu désormais ${i} clicks au total`);
});

//Fonctionnalité 2 :

let navbarh = document.getElementById("navbarHeader");
document.getElementsByClassName("navbar-toggler")[0].addEventListener("click", function(){
  navbarh.classList.toggle("collapse");
});


//Fonctionnalité 3 :
