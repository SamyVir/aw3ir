function validation(){
    
    // ou faire une validation de tous les champs en une seule fois
    document.getElementById("error").innerHTML = "";
    
  for(let item of document.querySelectorAll('.inputAW')){
    if(item.value == ""){

        var label =   document.querySelector("label[for="+item.id+"]").textContent;
        document.getElementById("error").innerHTML += ` ce champ est obligatoire pour : ${label} <br/>`;
        document.getElementById("error").classList.add("display");
        document.getElementById("resultat").classList.remove("display")

    }else if(item.value.length < 5){
        var label =   document.querySelector("label[for="+item.id+"]").textContent;
        document.getElementById("error").innerHTML += `Minimum 5 caractères pour : ${label} <br/>`;
        document.getElementById("error").classList.add("display");
        document.getElementById("resultat").classList.remove("display")
    }
  }
  if(document.getElementById("error").innerHTML == ""){
    var nm = document.getElementById("nom").value
    document.getElementById("resultat").innerHTML = `Bienvenue ${nm}`;
    document.getElementById("error").classList.remove("display")
    document.getElementById("resultat").classList.add("display")
  }
  
  }