//******************************navigation******************************
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
     }

//******************************Inclure le contenu de header.html dans la balise div#header******************************
fetch('header.html')
.then(response => response.text())
.then(html => {
    document.getElementById('header').innerHTML = html;
})
.catch(error => console.error('Erreur lors du chargement du fichier :', error));
    
//******************************Inclure le contenu de footer.html dans la balise div#header******************************
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    document.getElementById("footer").innerHTML = this.responseText;
  }
};
xhttp.open("GET", "footer.html", true);
xhttp.send();

//******************************specifier le type pour autre type d'annonce******************************
     function showOther() {
      var select = document.getElementById("announcementType");
      var otherType = document.getElementById("otherType");
      var otherAnnouncement = document.getElementById("otherAnnouncement");
      
      if (select.value === "autre") {
          otherType.style.display = "block";
          otherAnnouncement.required = true; // Rendre le champ requis si l'option "Autre" est sélectionnée
      } else {
          otherType.style.display = "none";
          otherAnnouncement.required = false; // Rendre le champ non requis si une autre option est sélectionnée
      }
      }


//******************************Les bouton des filiere******************************
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

var btns = document.getElementsByClassName("btn2");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


//******************************Les slides******************************
document.addEventListener("DOMContentLoaded", function() {

      let slideIndex = 0;
      showSlides();
      
      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 2000); // Change image chaque 2 seconds
      }
});


