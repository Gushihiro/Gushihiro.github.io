import { Card } from "../_shared/Card";
import Link from "next/link";
import { motion } from "framer-motion";
import { Source_Code_Pro } from '@next/font/google'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['600']
})

export default function MainHero() {

  return (
    <div className="flex flex-row justify-center main-hero">
      <figure className="w-6/12 hero-img-box">
        {/* <div className="hero-circle"></div> */}
        <img className="hero-img" src={"/portfolio-headerimg.png"} alt={"Hiroto"}/>
      </figure>
      <div className="inline-flex flex-col w-6/12 justify-between">
        <div className="hero-text-box">
          <motion.h1
            className={`${sourceCodePro.className} text-6xl g-heading`}
            initial={{opacity: 0}}
            style={{x: 100}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1.25}}
          >Hello, I'm Hiroto Robinson</motion.h1>
          <div className="custom-divider small-divider self-end"></div>
          <motion.h2
            className={`${sourceCodePro.className} text-3xl sub-heading self-end`}
            initial={{opacity: 0}}
            style={{y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: .5, duration: 1}}
          >Software Engineer</motion.h2>
          <div className="w-10/12 self-end mt-9 text-right">
            Over 2 years of experience in Web Stacks involving Javascript, Typescript, 
            React, & NodeJS. Experienced in AGILE team environments collaborating to deliver custom ecommerce platforms to automate online business management and transactions.
            Quick thinking, communicative, and always learning. I strive to improve myself each day and hold accountability for the code I push.
          </div>
        </div>
        <div className="link-container mt-6">
          <div className="link-box">
            <a className={`nav-link ${sourceCodePro.className}`} href="#projects">
              // Projects
            </a>
            <a className={`nav-link ${sourceCodePro.className}`} href="https://linkedin.com/in/robinsonhiroto" target="_blank">
              <span>// LinkedIn</span>
            </a>
            <a className={`nav-link ${sourceCodePro.className}`} href="https://github.com/Gushihiro" target="_blank">
              <span>// GitHub</span>
            </a>
            <a className={`nav-link ${sourceCodePro.className}`} href="/resume.pdf" target="_blank">
              <span>// Resume</span>
            </a>
            {/* <Link className={`nav-link ${sourceCodePro.className}`} href="/about">
              <span>// Contact Me</span>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}