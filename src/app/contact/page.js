import React from 'react'
import ContactHero from '../components/Contact/ContactHero'
import ContactForm from '../components/Contact/ContactForm'
import ContactDetails from '../components/Contact/ContactDetails'
import BranchLocations from '../components/Contact/BranchLocations'

export default function Contact() {
    return (
        <div>
            <ContactHero />
            <ContactForm />
            <ContactDetails/>
            <BranchLocations/>
        </div>
    )
}
