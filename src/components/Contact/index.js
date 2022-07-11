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
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formState);
    }

    return (
        <section className='row'>
            <h2 className='col-12 d-sm-flex py-1'>
                Contact
            </h2>
            <form onSubmit={handleSubmit} className='col-12 col-sm-7 col-lg-6 row mx-1'>
                <div className='col-12'>
                    <div className='col-12'>
                        <label htmlFor='name'>Name:</label>
                        <input 
                            onBlur={handleChange}
                            defaultValue={formState.name} 
                            type='text' name='name'
                            className='col-12' 
                        />
                    </div>
                    <div className='col-12'>
                        <label htmlFor='email'>Email address:</label>
                        <input 
                            onBlur={handleChange} 
                            defaultValue={formState.email} 
                            type='email' name='email' 
                            className='col-12' 
                        />
                    </div>
                    <div className='col-12'>
                        <label htmlFor='message'>Message:</label>
                        <textarea 
                            onBlur={handleChange} 
                            defaultValue={formState.message} 
                            name='message'
                            className='col-12' 
                            rows='5'
                        ></textarea>
                    </div>
                    {errMsg && (
                        <p className='text-danger col-12'>{errMsg}</p>
                    )}
                    <button type='submit' className='m-3'>
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}

export default Contact;
