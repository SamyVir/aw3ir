

window.onload = function () {
    
    document.querySelector("#Submit").addEventListener("click", function(e) {
        e.preventDefault();
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        var myList = document.forms["inscription"];
        console.log(myList["name"].value);

        
        if(myList["email"].value == "" || myList["email"].value.length < 5 || validateEmail(myList["email"].value) == false ){
            document.querySelector(".modal-title").textContent = "Attention erreur";
            document.querySelector(".modal-body").textContent = "Veuillez saisir un email valide ";
            document.querySelector("#map").src = "#";
            myModal.show();
        }

        if(checkname(myList["name"].value) == false || checkname(myList["prenom"].value) == false || checkname(myList["adrs"].value) == false ){
            document.querySelector(".modal-title").textContent = "Attention erreur";
            document.querySelector(".modal-body").textContent = "Veuillez Respecter les régles pour le nom et le prénom ";
            document.querySelector("#map").src = "#";
            myModal.show();
        }
        
        var dateNaissance = new Date(myList["date"].value);
        if (dateNaissance.getTime() > Date.now()){
            document.querySelector(".modal-title").textContent = "Attention ";
            document.querySelector(".modal-body").textContent = "la date ne doit pas etre dans le futur";
            document.querySelector("#map").src = "#";
            myModal.show();
        }

        else{
            document.querySelector(".modal-title").textContent = `Bienvenue ${document.querySelector("#prenom").value} !` ;
            var month = dateNaissance.getUTCMonth() + 1;
            var day = dateNaissance.getUTCDate();
            var year = dateNaissance.getUTCFullYear();
            newdate = day + "/" + month + "/" + year;
            document.querySelector("#first").textContent = "Vous êtes né le "+ newdate +" et vous habitez ici: ";
    
            document.querySelector("#map").src = `https://maps.googleapis.com/maps/api/staticmap?markers=${document.querySelector("#adrs").value}&zoom=7&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`;
            document.querySelector("#lien").href= `http://maps.google.com/maps?q=${document.querySelector("#adrs").value}`;
            
    
            myModal.show();
        }


        for (var i = 0; i <myList.length; i++) {
            if (!myList[i].value) {
                document.querySelector(".modal-title").textContent = "Attention erreur";
                document.querySelector(".modal-body").textContent = "Veuillez rensegnier tout les champs.";
                document.querySelector("#map").src = "#";
                myModal.show();
                
            }

        }

        


    
    });


}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkname(name) {
    const reg_username = /^\w{5,20}$/;
    return reg_username.test(name);

}
