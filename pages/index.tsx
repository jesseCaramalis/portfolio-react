import Head from 'next/head'
import type { GetStaticProps, NextPage } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Link from 'next/link'
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import { PageInfo, SkillType, Project } from '@/typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'

type Props = {
  pageInfo: PageInfo;
  skills: SkillType[];
  projects: Project[];
}

export default function Home({ pageInfo, projects, skills}: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar-thin sm:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#E49B0F] '>
      <Head>
        <title>Jesse Caramalis</title>
      </Head>
     
      <Header />

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id="projects" className='snap-start'>
        <Projects projects={projects} />  
      </section>

      <section id="contact" className='snap-start'>
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="static">
          <div>
            <ArrowUpCircleIcon className="absolute bottom-1 left-1 cursor-pointer h-10 w-10 rounded-full opacity-50 hover:opacity-100" />
          </div>
        </footer>
      </Link>
      </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const skills: SkillType[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();

    return {
      props: {
        pageInfo,
        projects,
        skills,
      },
      revalidate: 500,
    }
}
