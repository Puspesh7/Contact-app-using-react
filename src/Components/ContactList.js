import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) =>{
    
    const deleteContactHandler = (id) =>{
        props.getContactId(id);
    }
    const rendercontactlist = props.contacts.map((contact) =>{
        return(
            <ContactCard contact = {contact} clickHandler = {deleteContactHandler} key = {contact.id}/>
        );
    })
    return(
        <div className="ui called list">{rendercontactlist}</div>
    );
}

export default ContactList;