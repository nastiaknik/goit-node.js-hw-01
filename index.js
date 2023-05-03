const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "listContacts":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    case "getContactById":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);

    case "addContact":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);

    case "updateContact":
      const updateContact = await contacts.updateContact(
        id,
        name,
        email,
        phone
      );
      return console.log(updateContact);

    case "removeContact":
      const removeContact = await contacts.removeContact(id);
      return console.log(removeContact);

    default:
      return console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction({ action: "listContacts" });

// invokeAction({ action: "getContactById", contactId: "e6ywwRe4jcqxXfCZOj_1e" });

// invokeAction({
//   action: "addContact",
//   name: "Nugget",
//   email: "nugget@gmail.com",
//   phone: "(+48)73398793",
// });

// invokeAction({
//   action: "updateContact",
//   id: "e6ywwRe4jcqxXfCZOj_1e",
//   name: "Burnt Nugget",
//   email: "burnt.nugget@gmail.com",
//   phone: "+48 73398793",
// });

// invokeAction({ action: "removeContact", id: "7Fxon7QUsar22B3lBp0TL" });
