import React from 'react';
import "./contact.css";
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from "emailjs-com";

const Contact =()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_8jccr4q', 'template_emyuhyx', form.current, {
            publicKey: 'BOGR6XMVWMqlWStli',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    

    return(
       <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
            <div className='contact__options'>
                <article className='contact__option'>
                    <MdOutlineEmail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h6 className='h6'>mudassaryounas362@gmail.com</h6>
                    <a href="mailto:mudassaryounas362@gmail.com" target="_blank" >Send a message</a>
                </article>
                <article className='contact__option'>
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Messenger</h4>
                    <h6>Muhammad Mudassar</h6>
                    <a href="https://m.me/15oxPsVGKo/" target="_blank" >Send a message</a>
                </article>
                <article className='contact__option'>
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    <h6>+92-3174268086</h6>
                    <a href="https://wa.me/923174268086" target="_blank" >Send a message</a>
                </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your Full Name' required />
                        <input type="email" name='email' placeholder='Your Email' required />
                        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
        </div>
       </section>
    )
}
export default Contact;