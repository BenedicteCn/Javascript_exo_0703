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

let firstCard = document.getElementsByClassName("card mb-4 box-shadow")[0]

document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0].addEventListener("click", function(){
firstCard.style.color = 'red'
});

//Fonctionnalité 4 :

let secondCard = document.getElementsByClassName("card mb-4 box-shadow")[1]

document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1].addEventListener("click", function(){
  if (secondCard.style.color === 'green'){
    secondCard.style.color = '' ;
  }else{
    secondCard.style.color = 'green'
  }
});
