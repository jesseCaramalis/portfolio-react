import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'
import Image from 'next/image'

type Props = {
    pageInfo: PageInfo
}

export default function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, the name's Jesse Caramalis.", '<Software Engineer />', "Let's build something."],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image
            width={128}
            height={128}
            src={urlFor(pageInfo.heroPicture).url()} 
            alt="jesse headshot" 
            className='relative rounded-full h-32 w-32 mx-auto object-cover' 
            priority={true}
        />
        <div className='z-20'>
            <h2 className='text-xl uppercase text-gray-500 pb-2 tracking-[15px]'>
                Software Engineer
            </h2>
            <h1 className='flextext-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor="#E49B0F"></Cursor>
            </h1>
            <div className='pt-5'>
                <Link href="#about">
                <button className='heroButton'>About</button>
                </Link>
                <Link href="#skills">
                <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}