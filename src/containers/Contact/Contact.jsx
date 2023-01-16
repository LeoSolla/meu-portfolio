import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css";

const Contact = () => {
    const [sucess, setSucess] = useState(false);
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then((result) => {
                setSucess(true)
            }, (error) => {
                console.log('something not working')
            });
            
        e.target.reset()
    };

    return (
        <section id="Contact">
            <div className="flex-1 flex flex-col justify-start items-center p-20">
                <h1 className="text-center font-extrabold text-transparent text-4xl lg:text-9xl tracking-tight py-2 bg-clip-text bg-gradient-to-r from-red-500 to-yellow-300">
                    Contact
                </h1>
                <p className="text-2xl xl:text-2xl xl:leading-10 font-thin max-w-7xl p-6 text-center">
                    I will be honored to have a contact with you.
                </p>
            </div>
            <div className="flex md:flex-col lg:flex-row flex-col items-center justify-between sm:p-20 md:p-20 py-12 sm:pb-12 md:-py-12 md:py-12 px-4">
                <div className="w-full flex flex-1 flex-col md:px-28">
                    <aside className="p-8">
                        <h2>Feedback helps people to improve them each time when it is received.</h2>
                        <h3>I'll really appreciate if you send me any suggestions, doubts, congratulations or even critics.</h3>
                    </aside>
                </div>
                <div className="w-full flex flex-1 flex-col md:pr-28">
                    <form ref={form} onSubmit={sendEmail} className="bg-white shadow-md rounded p-8 dark:bg-[#2a3942]">
                        <h2 className="text-gray-900 font-semibold dark:text-white">Send me a message</h2>
                        <input className="p-4 border border-gray-400 rounded shadow dark:bg-[#2a3942]" type='name' name='name' placeholder='Name or company' required />
                        <input className="p-4 border border-gray-400 rounded shadow dark:bg-[#2a3942]" type='email' name='email' placeholder='Email' required />
                        <textarea className="p-4 border border-gray-400 rounded shadow dark:bg-[#2a3942] resize-none" name='message' rows="7" placeholder="Hi, Leo!" required></textarea>
                        {!sucess ? 
                            <button className="w-48 py-3 bg-blue hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow dark:text-white dark:md:hover:text-gray-900" type="submit">Send Message</button>
                        : 
                            <span>Thank you!</span>
                        }
                    </form>
                </div>                
            </div>
        </section>
    );  
}

export default Contact;