import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'
import Image from 'next/image'

type Props = {
    pageInfo: PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    className='flex flex-shrink flex-col relative h-screen text-center overflow-auto
    md:text-left md:flex-row px-5 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-5 mt-12 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.div
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
            className='image h-1/4 md:h-1/2 align-center w-auto mt-20 md:mb-0 xl:w-[400px] xl:h-[500px]'>
                <Image
                src={urlFor(pageInfo?.aboutPicture).url()}
                alt="picture of me"
                height={200}
                width={200}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                className='rounded-full md:w-auto object-cover md:rounded-lg lg:w-[400px] lg:h-[500px]'
                />    
        </motion.div>

        <div className='space-y-5 lg:space-y-10 md:w-1/2 h-[50%] md:h-fill px-0 md:px-20'>
            <h4 className='text-2xl lg:text-4xl font-semibold'>
                I love solving problems
            </h4>
            <p className='text-base lg:text-2xl'>
                Previously a long time manager in the retail industry, I became frustrated with the tools we had to work with. 
                Poorly designed software and a lack of automation made mine and many others' lives more difficult.
                My passion for solving problems and all things tech led me to pursue a career in software engineering.
            </p>
            <p className='text-base lg:text-2xl'>
                Now, as a freelance developer, I am able to help both individuals and businesses not only solve problems but bring their ideas to the world.
                With a background in business, I understand what it takes to deliver exceptional value to any client. Whether it's a website, an application, or custom software; any problem you have, I can help.
            </p>
            
        </div>
    </motion.div>
  )
}