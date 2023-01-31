import React from 'react'
import { urlFor } from '@/sanity';
import { SkillType } from '@/typings';
import Image from 'next/image'


type Props = {
    skill: SkillType;
}

export default function Skill({ skill}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <Image
        src={urlFor(skill?.image).url()}
        alt="skill logo"
        width={14}
        height={14}
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