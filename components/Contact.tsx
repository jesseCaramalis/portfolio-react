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

            <div className='flex flex-col w-screen space-y-7'>
                <h4 className='text-xl font-semibold text-center'>
                    Let's connect!
                </h4>
                <p className='text-lg px-5 text-center'>
                    I'm currently accepting new freelance clients and project opportunities.
                </p>

                <form className='flex flex-col space-y-2 mx-8' onSubmit={handleSubmit}>
                    <div className='flex flex-col space-y-2'>
                        <input name="name" className='contactInput' placeholder='Name' type="text" />
                        <input name="email" className='contactInput' placeholder='Email' type="email" />
                    </div>
                    <input name="subject" className='contactInput' placeholder='Subject' type="text" />

                    <textarea name="message" className='contactInput h-32' placeholder="Give a brief outline of what you need, and we'll work from there."/>

                    <button type="submit" disabled={state.submitting} className='bg-[#E49B0F] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>

                {state.succeeded &&
                
                <div className='w-3/4 mx-auto px-6 py-2 bg-[#E49B0F] border border-[#E49B0F]/40 rounded-full text-md text-black font-medium'>
                    <span>
                    Thanks for your message, I'll get back to you as soon as possible!
                    </span>
                </div>
                }
            </div>
        </div>
        
     )
}