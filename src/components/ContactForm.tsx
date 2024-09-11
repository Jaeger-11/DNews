"use client";
import { contact } from "@/interface";
import { useState } from "react";

const ContactForm = () => {
    const [contactMessage, setContactMessage] = useState<contact>({firstName:'', lastName:'', email:'', message:''});
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { firstName, lastName, email, message } = contactMessage
        if(firstName && lastName && email && message){
            setErrorMessage('')
            alert('recieved')
            setContactMessage({firstName:'', lastName:'', email:'', message:''});
        } else {
            setErrorMessage('All fields are required')
            setTimeout(() => {
                setErrorMessage('')
            }, 5000);
        }
    }

    const handleInput = ({target}:React.ChangeEvent<HTMLInputElement>) => {
        let newData = {[target.name]:target.value}
        setContactMessage({...contactMessage, ...newData})
    }

    const handleTextArea = ({target}:React.ChangeEvent<HTMLTextAreaElement>) => {
        let newData = {[target.name]:target.value}
        setContactMessage({...contactMessage, ...newData})
    }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
        <h3 className="font-bold text-2xl text-primary mt-4 font-primary">Other Inquries</h3>
        <div>
        <label className='font-bold text-sm capitalize mb-2' htmlFor="firstName">First Name</label> <br />
        <input onChange={handleInput} required type="text" value={contactMessage.firstName} name="firstName" id="firstName" className='border border-gray-300 w-full md:w-3/4 rounded-sm p-2'/>
        </div>
        <div>
        <label className='font-bold text-sm capitalize mb-2' htmlFor="lastName">Last Name</label> <br />
        <input onChange={handleInput} required type="text" value={contactMessage.lastName} name="lastName" id="lastName" className='border border-gray-300 w-full md:w-3/4 rounded-sm p-2'/>
        </div>
        <div>
        <label className='font-bold text-sm capitalize mb-2' htmlFor="email">Email</label> <br />
        <input onChange={handleInput} required type="email" value={contactMessage.email} name="email" id="email" className='border border-gray-300 w-full md:w-3/4 rounded-sm p-2'/>
        </div>
        <div>
        <label className='font-bold text-sm capitalize mb-2' htmlFor="message">Message</label> <br />
        <textarea onChange={handleTextArea} required name="message" value={contactMessage.message} id="message" rows={5} className='border border-gray-300 w-full md:w-3/4 rounded-sm p-2'></textarea>
        </div>
        {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p> }
        <button className="py-2 px-6 font-semibold text-lg w-max bg-primary text-secondary rounded-sm font-primary hover:bg-accent transition"> Send Message </button>
    </form>
  )
}

export default ContactForm