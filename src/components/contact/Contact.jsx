import React, {useState} from 'react';
import axios from 'axios';
import './contact.css';
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa';

const Contact = () => {

    const [form, setForm] = useState({name:'', email:'', subject:'', message:''});

    const handdleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]:value});
    };

    const handdleSubmit = (e) =>{
        e.preventDefault();

        axios.post('https://sheet.best/api/sheets/79e260df-6498-4ea6-b073-ed77f2aa12a4', form)
        .then((response)=>{
            console.log(response);
            //clearing form
            setForm({name:'', email:'', subject:'', message:''})
        })
    };

  return (
    <section className='contact section' id='contact' onSubmit={handdleSubmit}>
        <h2 className='section__title text-cs'>Contact Me</h2>
        <p className='section__subtitle'>
            My <span>Talk about ideas</span>
        </p>
        <div className='contact__container container grid'>
            <div className='contact__content'>
                <div className='contact__card'>
                    <span className='contact__card-icon'>
                        <FaRegMap />
                    </span>

                    <h3 className='contact__card-title'>Location</h3>
                    <p className='contact__card-data'>San Francisco, Córdoba, Arg.</p>
                </div>

                <div className='contact__card'>
                    <span className='contact__card-icon'>
                        <FaRegUser />
                    </span>

                    <h3 className='contact__card-title'>GitHub</h3>
                    <p className='contact__card-data'><a href='https://github.com/NicolasOriglia'>GitHub Perfil</a></p>
                </div>

                <div className='contact__card'>
                    <span className='contact__card-icon'>
                        <FaRegEnvelope />
                    </span>

                    <h3 className='contact__card-title'>Email</h3>
                    <p className='contact__card-data'>noriglia@gmail.com</p>
                </div>

                <div className='contact__card'>
                    <span className='contact__card-icon'>
                        <FaRegAddressBook />
                    </span>

                    <h3 className='contact__card-title'>Phone</h3>
                    <p className='contact__card-data'> 3564-205830</p>
                </div>
            </div>

            <form action='' className='contact__form' autocomplete="off">
                <div className='contact__form-group grid'>
                    <div className='contact__form-div'>
                        <label htmlFor="" className='contact__form-tag text-cs'>
                        Your full name <b>*</b>
                        </label>
                        <input type='text' 
                        name='name' 
                        value={form.name}
                        onChange={handdleChange} 
                        className='contact__form-input'></input>
                    </div>

                    <div className='contact__form-div'>
                        <label htmlFor="" className='contact__form-tag text-cs'>
                        Your email adress <b>*</b>
                        </label>
                        <input type='email'
                        name='email' 
                        value={form.email}
                        onChange={handdleChange} 
                        className='contact__form-input'></input>
                    </div>
                </div>

                <div className='contact__form-div'>
                    <label htmlFor="" className='contact__form-tag text-cs'>
                    Your subject <b>*</b>
                    </label>
                    <input type='text'
                    name='subject' 
                    value={form.subject}
                    onChange={handdleChange} 
                    className='contact__form-input'></input>
                </div>

                <div className='contact__form-div contact__form-area'>
                    <label htmlFor="" className='contact__form-tag text-cs'>
                    Your Message <b>*</b>
                    </label>
                    <textarea
                    name='message' 
                    value={form.message}
                    onChange={handdleChange} 
                    className='contact__form-input'></textarea>
                </div>

                <div className='contact__submit'>
                    <button type='submit' className='btn text-cs'>Send Message</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
