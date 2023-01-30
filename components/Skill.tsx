import React from 'react'
import { urlFor } from '@/sanity';
import { Skill as SkillType } from '@/typings';
import { motion } from 'framer-motion'


type Props = {
    skill: SkillType;
    directionLeft?: boolean;
}

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
        }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className='rounded-full border border-gray-500 object-cover w-14 h-14 xl:w-24 xl:h-24 2xl:w-32 2xl:h-32
        filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
         group-hover:bg-white h-14 w-14 xl:w-24 xl:h-24 2xl:w-32 2xl:h-32 rounded-full z-0">
            <div className='flex items-center text-center justify-center h-full'>
                <span className='text-lg font-bold text-black opacity-100'>{skill.name}</span>
            </div>
        </div>
    </div>
  )
}