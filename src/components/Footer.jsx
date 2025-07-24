import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='py-8' id='contact'>
     <div className='max-w-[1200px] mx-auto px-4'>
       <div className='flex items-center justify-between flex-col md:flex-row'>
        <div>
          <h2 className='md:text-7xl text-4xl font-bold mb-10 text-white/50'>
          Get in <span className='text-gray-400'>touch</span>
          </h2>
          <a 
          className='md:text-7xl text-4xl font-semibold text-white underline
                    decoration-gray-400 decoration-2 underline-offset-4 hover:decoration-gray-200
                    transition duration-300'
          href="mailto:dani@gmail.com">
            satti@gmail.com
          </a>
        </div>

        <div className='text-white/50 mt-12'>
          <div className='mb-8'>
            <p className='text-lg mb-1'>Phone</p>
            <a href="+923562562485"
            className='text-2xl font-semibold underline decoration-gray-400
                       decoration-2 underline-offset-4 hover:decoration-gray-400
                       transition duration-300'>
                      +923562562485
            </a>
          </div>

           <div className='text-lg mb-8'>
            <p className='font-bold'>Office</p>
            <p>Rawalpindi</p>
            <p>Punjab</p>
            <p>Pakistan</p>
           </div>
        </div>
       </div>

       <div className='relative z-10 text-center mt-2 py-12'>
         <h1 className='hidden md:block text-[10rem] md:text-[12rem] lg:text-[15rem] font-bold text-white opacity-10'>
          Ijtaba
         </h1>
       </div>

<div className='relative mt-12 container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
  <p className='text-gray-200 text-sm text-center sm:text-left'>
    © 2025 Ijtaba Hasan | All Rights Reserved. <br className='sm:hidden' />
    <span className='text-white/30'>
      Developed by 
      <a 
        href="https://your-portfolio-link.com" 
        target="_blank" 
        className='ml-1 text-emerald-400 font-semibold underline hover:text-emerald-300 glow'
      >
        DANI
      </a>
    </span>
  </p>

  <ul className='flex gap-5 flex-wrap'>
    <a 
      href="https://github.com/Ij-taba"
      aria-label="GitHub"
      target="_blank"
      className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-emerald-400 transition-colors'
    >
      <AiFillGithub size={30}/>
    </a>
    <a 
      href="https://www.linkedin.com/in/ijtaba-hasan-509b58308"
      aria-label="LinkedIn"
      target="_blank"
      className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-emerald-400 transition-colors'
    >
      <AiFillLinkedin size={30}/>
    </a>
    <a 
      href="https://www.instagram.com/ijtabahassan6?igsh=aXZnY3Y2bmJ1Mngw"
      aria-label="Instagram"
      target="_blank"
      className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full hover:text-emerald-400 transition-colors'
    >
      <AiFillInstagram size={30}/>
    </a>
  </ul>
</div>


     </div>
    </footer>
  )
}

export default Footer
