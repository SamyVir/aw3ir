

window.onload = function () {
    
    document.querySelector("#button").addEventListener("click", function(e) {
        e.preventDefault();
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        var myList = document.forms["inscription"];
        var dateNaissance = new Date(myList["date"].value);
        var nom = myList["nom"].value; 
        var prenom = myList["prenom"].value; 
        var adresse = myList["adresse"].value; 
        var email = myList["email"].value; 
        /* console.log(myList); */

        
        if(email == "" || email.length < 5 || validateEmail(email) == false ){
            document.querySelector(".modal-title").textContent = "Attention erreur";
            document.querySelector(".modal-body").textContent = "Veuillez saisir un email valide ";
            document.querySelector("#map").src = "#";
            myModal.show();
        }

        else if(checkname(nom) == false || checkname(prenom) == false || adresse == false ){
            document.querySelector(".modal-title").textContent = "Attention erreur";
            document.querySelector(".modal-body").textContent = "Veuillez Respecter les régles pour le nom, le prénom ou l'adresse";
            document.querySelector("#map").src = "#";
            myModal.show();
        }
        
        

        else if(dateNaissance.getTime() > Date.now()){
            document.querySelector(".modal-title").textContent = "Attention ";
            document.querySelector(".modal-body").textContent = "la date ne doit pas etre dans le futur";
            document.querySelector("#map").src = "#";
            myModal.show();
        }

        else { 
            console.log("IT'S OK");

        var month = dateNaissance.getUTCMonth() + 1;
        var day = dateNaissance.getUTCDate();
        var year = dateNaissance.getUTCFullYear();
        newdate = day + "/" + month + "/" + year;

        contactStore.add(nom, prenom, newdate, adresse, email);
        document.querySelector("tbody").innerHTML = "";
        var listecontact = contactStore.getList();
        console.log(listecontact);
        for (var index in listecontact) {
                console.log(index);
            document.querySelector("tbody").innerHTML =
                document.querySelector("tbody").innerHTML +
                                "<tr><td>" +
                                listecontact[index].name +
                                "</td><td>" +
                                listecontact[index].firstname +
                                "</td><td>" +
                                listecontact[index].date +
                                "</td><td> <a href= 'https://maps.googleapis.com/maps/api/staticmap?markers=${document.querySelector(" + listecontact[index].adress + ").value}&zoom=7&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' target='_blank'>" +
                                listecontact[index].adress +
                                " </a> </td><td> <a href='mailto:'>"+
                                listecontact[index].mail +
                                "</a></td></tr>" ;
        }

    
            
            
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

function calcNbChar(id) {
    document.querySelector(`#${id} + span`).innerHTML = document.querySelector(`#${id}`).value.length;

}

