$(document).ready(function () {

    //nombre de caractères
    $('.form-control').keyup(function () {
        var nombreCaractere = $(this).val().length;
        $(this).parent().parent().find(".compteur").text(nombreCaractere + " car.");
    })

    $("#button").click(function (event) {

        event.preventDefault();

        if (($("#nom").val() && $("#prenom").val() && $("#date").val() && $("#adresse").val() && $("#email").val()) != "") {

            contactStore.add($('#nom').val(), $('#prenom').val(), $('#date').val(), $('#adresse').val(), $('#email').val());
            //affichage de tableau
            $("#table_contact tbody").html("");
            for (var i in contactStore.getList()) {
                $("#table_contact tbody").append(
                    '<tr>' +
                    '<td>' + contactStore.getList()[i].nom + '</td>' +
                    '<td>' + contactStore.getList()[i].prenom + '</td>' +
                    '<td>' + contactStore.getList()[i].date + '</td>' +
                    '<td>' + contactStore.getList()[i].adresse + '</td>' +
                    '<td>' + contactStore.getList()[i].email + '</td>' +
                    '</tr>'
                );
            }


        } else {

            $('#myModal').modal({ show: true })
            $(".modal-body").html('Veuillez remplire tout les champs obligatoires');

        }
    });





});