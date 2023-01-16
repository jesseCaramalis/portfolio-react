import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    className='flex flex-col relative h-screen text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img
            initial={{
                x:-200,
                opacity: 0,
            }}
            transition={{
                duration: 1.5,
            }}
            whileInView={{ 
                opacity: 1, 
                x: 0 
            }}
            viewport={{ once: true }}
            src='./static/headshotColor.jpeg'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
            md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                I love solving problems
            </h4>
            <p className='text-base'>
                Previously a long time manager in the retail industry, I became frustrated with the tools we had to work with. 
                Poorly designed software and a lack of automation made mine and many others' lives more difficult.
                My passion for solving problems and all things tech led me to pursue a career in software engineering.
            </p>
            <p className='text-base'>
                Now, as a freelance developer, I am able to help both individuals and businesses not only solve problems but bring their ideas to the world.
                With a background in business, I understand what it takes to deliver exceptional value to any client. Whether it's a website, an application, or custom software; any problem you have, I can help.
            </p>
            
        </div>
    </motion.div>
  )
}