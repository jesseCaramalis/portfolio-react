import React from 'react'
import { useForm } from '@formspree/react'

type Props = {}

export default function Contact({}: Props) {
    const [state, handleSubmit] = useForm('mzbwjvld');
    return (
        
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
        max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-5 mt-12 uppercase tracking-[20px] text-gray-500 text-2xl'>
                    Contact Me
            </h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    Let's connect!
                </h4>
                <p className='text-lg text-center'>
                    I'm currently accepting new freelance clients and project opportunities.
                </p>

                <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit}>
                    <div className='flex space-x-2'>
                        <input name="name" className='contactInput' placeholder='Name' type="text" />
                        <input name="email" className='contactInput' placeholder='Email' type="email" />
                    </div>
                    <input name="subject" className='contactInput' placeholder='Subject' type="text" />

                    <textarea name="message" className='contactInput' placeholder="Give a brief outline of what you need, and we'll work from there."/>

                    <button type="submit" disabled={state.submitting} className='bg-[#E49B0F] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>

                {state.succeeded &&
                
                <div className='text-center px-6 py-2 bg-[#E49B0F] border border-[#E49B0F]/40 rounded-full text-lg text-black font-medium transition-all'>
                    <span>
                    Thanks for your message, I'll get back to you as soon as possible!
                    </span>
                </div>
                }
            </div>
        </div>
        
     )
}