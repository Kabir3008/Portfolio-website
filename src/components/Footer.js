import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (


    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
        
      
    <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>

        <div>
        Build By <Link href="https://www.facebook.com/messages/t/100004399361535" className='underline underline-offset-2'>Joy</Link>
        </div>
        
        <Link href="https://www.facebook.com/messages/t/100004399361535" target={'_blank'} className='underline underline-offset-2'>Say Hello</Link>
        
    </Layout>

  

    </footer>
  )
}

export default Footer