import { Card } from "../_shared/Card";
import Link from "next/link";
import { Source_Code_Pro } from '@next/font/google'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['600']
})

export default function MainHero() {

  return (
    <div className="flex flex-row justify-center">
      <figure className="w-6/12"><img  className="hero-img" src={"/portfolio-headerimg.png"} alt={"Hiroto"}/></figure>
      <div className="inline-flex flex-col w-6/12 justify-between">
        <div className="flex flex-col">
          <h1 className={`${sourceCodePro.className} text-5xl g-heading`}>Hiroto Robinson</h1>
          <div className="small-divider self-end"></div>
          <h2 className={`${sourceCodePro.className} text-3xl sub-heading self-end`}>Full-Stack Developer</h2>
          <div className="w-10/12 self-end">
            with 2 years of experience in Web Stacks involving Javascript, Typescript, 
            React, NodeJS. Experienced in AGILE team environments collaborating to deliver custom ecommerce platforms to automate online business management and transactions.
            Quick thinking, communicative, and always learning. I strive to improve myself each day and hold accountability for the code I push.
          </div>
        </div>
        <div className="link-container">
          <div className="link-box">
            <a className={`nav-link ${sourceCodePro.className}`} href="#projects">
              // Projects
            </a>
            <a className={`nav-link ${sourceCodePro.className}`} href="https://linkedin.com/in/robinsonhiroto" target="_blank">
              <span>// linkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z" clipRule="evenodd" />
              </svg>
            </a>
            <a className={`nav-link ${sourceCodePro.className}`} href="https://github.com/Gushihiro" target="_blank">
              <span>// GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a className={`nav-link ${sourceCodePro.className}`} href="/resume.pdf" target="_blank">
              <span>// Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
              </svg>
            </a>
            <Link className={`nav-link ${sourceCodePro.className}`} href="/about">
              <span>// Contact Me</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}