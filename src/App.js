import React, { Component } from 'react';
import Contacts from './components/contact/Contacts';
import ContactForm from './components/contact/ContactForm';


class App extends Component {
  state = {
    contacts: [
      { id: 1, firstName: 'Sabo', phone: '801-231-1123'},
      { id: 2, firstName: 'Ace', phone: '801-265-3311'},
      { id: 3, firstName: 'Luffy', phone: '801-735-1125'}
    ]
  }

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  addContact = (contactData) => {
    let newContact = { id: this.getId(), ...contactData }
    this.setState({ contacts: [ newContact, ...this.state.contacts ] })
  }
  deleteContact = (id) => {
    const newContacts = this.state.contacts.filter( contact => {
      if (contact.id !== id) 
        return contact
    })
    this.setState({ contacts: [...newContacts] })
  }

  updateContact = (id, incomingcontact) => {
    let updatedContact = { id: id, ...incomingcontact }
    const contacts = this.state.contacts.map( contact => {
      if (contact.id === id) {
        return updatedContact
      }
      return contact
    })
    this.setState({ contacts: [ ...contacts] })
  }


  render() {
    const { contacts } = this.state
    return(
      <>
        <h1>React Contact List</h1>
        <ContactForm addContact={this.addContact} />
        <Contacts 
          contacts={contacts} 
          deleteContact={this.deleteContact} 
          updateContact={this.updateContact}
        />
      </>
    )
  }
}
export default App;