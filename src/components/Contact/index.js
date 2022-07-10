import React from 'react';
import { useState } from 'react';

function Contact(props) {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    return (
        <section>
            <h2>Contact</h2>
            <form>
                <label htmlFor='name'>Name:</label>
                <input value={formState.name} type='text' name='name' />
                <label htmlFor='email'>Email address:</label>
                <input value={formState.email} type='email' name='email' />
                <label htmlFor='message'>Message:</label>
                <textarea value={formState.message} name='message'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default Contact;
