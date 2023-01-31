import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/typings'
import { urlFor } from '@/sanity'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'
type Props = {
    projects: Project[];
}

export default function Projects({projects}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1.5}}
        className='h-screen relative flex overflow-hidden flex-col text-left 
        md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
        >

        <h3 className='absolute top-5 mt-12 uppercase tracking-[20px] text-gray-500 text-2xl z-30'>
            Projects
        </h3>
        
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#E49B0F]'>

            {projects?.map((project, i) => (

                <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center
                p-20 md:p-44 h-screen'>
                    <motion.div  
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2}}
                        whileInView={{ opacity: 1, y: 0}}
                        viewport={{once: true}}>
                    <a href={project?.linkToBuild}>
                        <Image
                        width={1000}
                        height={1000}
                        src={urlFor(project?.image).url()}
                        alt="project previews" 
                        className='w-screen px-10 rounded-sm max-w-[1000px] object-cover z-0'
                        />
                    </a>
                </motion.div>
                <div className='space-y-6 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-2xl md:text-4xl font-semibold text-center underline decoration-[#E49B0F]/50'>
                        <SocialIcon 
                        url={project?.linkToRepo}
                        fgColor='#E49B0F'
                        bgColor='transparent'
                        />
                        <span>
                            Project {i+1} of {projects.length}: {" "}
                        </span>
                        {project?.title}
                    </h4>
                    <div className='flex items-center space-x-2 justify-center'>
                        {project.technologies.map(technology => (
                            <Image className='h-5 w-5'
                                width={20}
                                height={20}
                                src={urlFor(technology.image).url()}
                                alt="logo for tech used in project"
                                />
                        ))}
                    </div>
                    <p className='text-sm md:text-lg text-center md:text-left'>
                        {project?.summary}
                    </p>
                </div>
                </div>
            ))}
        </div>
        
        
        <div className='w-full absolute top-[%30] bg-[#E49B0F]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}