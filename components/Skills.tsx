import React from 'react'
import Skill from './Skill'
import { Skill as SkillType } from '@/typings'
import { motion } from 'framer-motion'
type Props = {
  skills: SkillType[]
}

export default function Skills({skills}: Props) {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row
    xl:px-10 justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-5 mt-12 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Here are some languages and frameworks I work with
        </h3>

        <div className='mt-40 grid grid-cols-4 gap-2'>
          {skills?.slice(0, skills.length/2).map(skill => (
            <Skill key={skill._id} skill={skill}/>
          ))}

          {skills?.slice(skills.length/2, skills.length).map(skill => (
            <Skill key={skill._id} skill={skill} directionLeft/>
          ))}
        </div>
    </motion.div>
  )
}