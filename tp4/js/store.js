$( document ).ready(function() {
  
  console.log( "DOM ready!" );

var contactStore = (function () {
  

var contactList = [];



return {
  add: function(_name, _firstname, _date, _adress, _mail) {
    var contact = { name: _name,
                    firstname: _firstname,
                    date: _date,
                    adress: _adress,
                    mail: _mail
    };
    // ajout du contact à la liste
    contactList.push(contact);
    
  
    return contactList;
  },

  getList: function() {
      
    return contactList;
    
  }
}
});
$("#button").on("click",function store(event) { 
  event.preventDefault();
  
  var inputNom= document.getElementById("nom");
  var inputPrenom= document.getElementById("prenom");
  var inputDn= document.getElementById("date");
  var inputAdresse= document.getElementById("adresse");
  var inputEmail= document.getElementById("email");
      
  if($("#nom").val() !== "" && $("#prenom").val() !== "" && $("#date").val() !== "" && $("#adresse").val() !== "" && $("#email").val() !== "" ){
      
    localStorage.setItem("name", inputNom.value);
    localStorage.setItem("firstname", inputPrenom.value);
    localStorage.setItem("birth", inputDn.value);
    localStorage.setItem("adresse", inputAdresse.value);
    localStorage.setItem("mail", inputEmail.value);

    $('#success').addClass("alert alert-success").text(" Le formulaire a été sauvegardé!");

    $("#table").show();
    $("#liste_des_contacts").show()
    
    document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
    .innerHTML +'<tr><td>'+localStorage.getItem("name")+'</td><td>'+localStorage.getItem("firstname") +'</td><td>'+localStorage.getItem("birth")+'</td><td><a href="https://maps.google.com/maps?q=' +localStorage.getItem("adresse")+'">'+localStorage.getItem("adresse") +'</a></td><td><a href=mailto:>'+localStorage.getItem("mail")+'</a></td>';
    }
    

    
  
});


});