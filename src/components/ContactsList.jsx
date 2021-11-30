import { useState } from "react";
import contactsData from "../contacts.json";
import Contact from "./Contact";

const remainingContacts = [...contactsData];
const contacts = remainingContacts.splice(0, 5);

function ContactsList() {
  const [agenda, setAgenda] = useState(contacts);

  const addActor = () => {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomActor = remainingContacts.splice(randomIndex, 1);
    setAgenda(agenda.concat(randomActor));
  };

  const sortByName = () => {
    setAgenda([...agenda].sort((a, b) => a.name > b.name));
  };

  const sortByPopularity = () => {
    setAgenda([...agenda].sort((a, b) => a.popularity < b.popularity));
  };

  const deleteActor = (id) => {
    const actorIndex = agenda.findIndex((actor) => actor.id === id);
    const agendaCopy = [...agenda];
    agendaCopy.splice(actorIndex, 1);
    setAgenda(agendaCopy);
  };

  return (
    <>
      <button onClick={addActor}>Add Actor</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {agenda.map((contact) => (
            <Contact
              key={contact.id}
              contact={contact}
              handleClick={() => deleteActor(contact.id)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ContactsList;
