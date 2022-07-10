import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errMsg, setErrMsg] = useState('');

    const handleChange = event => {
        // if the email field is changed,
        if (event.target.name === 'email') {
            const valid = validateEmail(event.target.value);

            // if the valid is false, show err message
            if (!valid) {
                setErrMsg('Your email is invalid. Try again.');
            }
        // if the name or message field is changed,
        } else {
            // if the field's value is empty, show err message, or else set empty string
            if (!event.target.value.length) {
                setErrMsg('Please enter your name and message to submit.');
            } else {
                setErrMsg('');
            }
        }
        
        // if there was no error, set form's state to its value (and remain other fields as is)
        if (!errMsg) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
            console.log(formState);
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input 
                    onBlur={handleChange}
                    defaultValue={formState.name} 
                    type='text' name='name' 
                />
                <label htmlFor='email'>Email address:</label>
                <input 
                    onBlur={handleChange} 
                    defaultValue={formState.email} 
                    type='email' name='email' 
                />
                <label htmlFor='message'>Message:</label>
                <textarea 
                    onBlur={handleChange} 
                    defaultValue={formState.message} 
                    name='message'
                ></textarea>
                {errMsg && (
                    <p>{errMsg}</p>
                )}
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default Contact;
