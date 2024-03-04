'use client'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import { useState } from "react"
import emailjs from '@emailjs/browser'
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // your emailjs serivce id templete id and public key

    const serviceId = "service_91sqniw";
    const templateId = "template_qdwo85e";
    const publicKey = 'mX8QzsYbsigQ-n0QX';

    // create a new object that container dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: name,
      message: message,
    };
    // send the email using Emailjs
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((Response) => {
        console.log('email sent sucessfully', Response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('error sending faild', error)
      })
  }

  return (
  <motion.div onSubmit={handleSubmit} className='emailForm' variants={fadeIn('up', 1)} initial="hidden" animate='show' exit='hidden'>
    <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
      {/* text form */}
      <div className='flex flex-col w-full max-w-[700px]'>
        {/* text */}
        <motion.h2 variants={fadeIn('right', 0.6)} initial="hidden" animate='show' exit='hidden' className='h2 text-center mb-12'>Lets <span className='text-accent'>Connect.</span></motion.h2>
        {/* from */}
        <motion.from variants={fadeIn('left', 0.4)} initial="hidden" animate='show' exit='hidden' className="flex-1 flex flex-col gap-6">
          {/* input group */}
          <div className='flex gap-x-6 w-full gap-6 mx-auto'>
            <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Name' className='input'></input>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' className='input'></input>
          </div>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' className='textarea'></textarea>
      
          <motion.button onClick={handleSubmit} variants={fadeIn('down', 0.2)} initial="hidden" animate='show' exit='hidden'
            className="w-28 h-12 text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-600 to-purple-800 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#8b13ed] hover:cursor-pointer">
            Lets Talk
          </motion.button>
         
        </motion.from>
      </div>
    </div>
  </motion.div>
  )
};

export default Contact;
