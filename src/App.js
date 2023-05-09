import logo from "./logo.svg";
import "./App.css";
import allContacts from "./contacts.json";
import { useState } from "react";

// const contacts = allContacts.slice(0, 5);

// console.log(contacts);

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));
  const [remainingContacts, setRemaining] = useState(allContacts.slice(5));

  const random = () => {
    const index = Math.floor(Math.random() * remainingContacts.length);
    setContacts([...contacts, remainingContacts.splice(index, 1)[0]]);
  };

  const sortName = () => {
    setContacts(
      [...contacts].sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
    );
  };

  const sortPopular = () => {
    setContacts(
      [...contacts].sort((a, b) => {
        return b.popularity - a.popularity;
      })
    );
  };

  const removeContact = (contactId) => {
    setContacts(
      contacts.filter((contact) => {
        return contact.id !== contactId;
      })
    );
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt="" width="50px" />
                </td>
                <td>
                  <p>{contact.name}</p>
                </td>
                <td>{contact.popularity}</td>
                <td> {contact.wonOscar ? "🏆" : ""} </td>
                <td> {contact.wonEmmy ? "🏆" : ""} </td>
                <button onClick={() => removeContact(contact.id)}>
                  {" "}
                  REMOVE{" "}
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button onClick={random}>CLICK ME</button>
      <button onClick={sortName}>CLICK TO SORT BY NAME</button>
      <button onClick={sortPopular}>CLICK TO SORT BY POPULARITY</button>
    </div>
  );
}

export default App;
