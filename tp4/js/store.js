/*
Pour ajouter un contact:  contactStore.add(_name, _firsname, _date, _adress, _mail);
Pour récuper la liste:    contactStore.getList();
*/
var contactStore = (function () {
  // variable privée
  var contactList = [];

  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block

  return {
    add: function (_name, _firstname, _date, _adress, _mail) {
      var contact = {
        name: _name,
        firstname: _firstname,
        date: _date,
        adress: _adress,
        mail: _mail,
      };
      // ajout du contact à la liste
      contactList.push(contact);

      return contactList;
    },

    getList: function () {
      return contactList;
    },
  };
})();