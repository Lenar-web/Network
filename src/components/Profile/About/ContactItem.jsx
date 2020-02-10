import React from 'react'


const ContactItem = ({ContactLink, ContactTitle}) => {
    if(!ContactLink){
        return null
    }
    return <a className="category-social-item" href={ContactLink}><span>{ContactTitle}</span> <i className="fas fa-globe"></i>{ContactLink}</a>
};

export default ContactItem;