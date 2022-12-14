import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import headshotImage from '../images/headshot.jpeg'
type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, the name's Jesse Caramalis.", '<Software Engineer />', "Let's build something."],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image 
            src={headshotImage} 
            alt="jesse headshot" 
            className='relative rounded-full h-32 w-32 mx-auto object-cover' 
        />
        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Software Engineer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor="#E49B0F"></Cursor>
            </h1>
            <div>
                <button className=''>About</button>
                <button className=''></button>
                <button className=''></button>
                <button className=''></button>
            </div>
        </div>
    </div>
  )
}