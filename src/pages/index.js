import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import { LinkArrow } from '@/components/icon'
import HireMe from '@/components/HireMe'
import lightbulb from "../../public/images/svgs/miscellaneous_icons_1.svg"



export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
      <Layout className='pt-0'>
      <div className="flex items-center justify-between w-full">
        <div className='w-1/2'>
          <Image src={profilePic} alt="" className='w-full h-auto' />
        </div>
        <div className='w-1/2 flex flex-col items-center self-center'>
     
          <AnimatedText text="Without requirements or design, programming is the art of adding bugs to an empty text file" className= '!text-5xl !text-left'/>
          <p className='my-4 text-base font-medium'>
          As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.

          </p>
          <div className='flex items-center self-start mt-2'>
            <Link href="/dummy.pdf" target={"_blank"} className='flex items-center bg-dark text-light hover:text-dark rounded-lg text-lg font-semibold hover:bg-light border-2 border-solid-transparent hover:border-dark p-2 px-6'
            download={true}
            >
              Resume <LinkArrow className={"w-6 ml-1"}/>
            </Link>

            <Link href="mailto:baktiar.kabir.joy3008@gmail.com" target={"_blank"} className='ml-4 text-lg font-medium capitalize underline'>
              Contact
            </Link>
          </div>
        </div>
      </div>
      </Layout>
      <HireMe />
      <div className='absolute right-8 bottom-8 inline-block w-24'>
        <Image src={lightbulb} alt="" className='w-full h-auto' />
      </div>
      </main>
    </>
  )
}
