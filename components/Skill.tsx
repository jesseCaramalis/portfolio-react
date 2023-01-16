import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?: boolean;
}

export default function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
        }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
        className='rounded-full border border-gray-500 object-cover w-16 h-16 xl:w-24 xl:h-24 2xl:w-32 2xl:h-32
        filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
         group-hover:bg-white h-16 w-16 xl:w-24 xl:h-24 2xl:w-32 2xl:h-32 rounded-full z-0">
            <div className='flex items-center justify-center h-full'>
                <p className='text-lg font-bold text-black opacity-100'>React</p>
            </div>
        </div>
    </div>
  )
}