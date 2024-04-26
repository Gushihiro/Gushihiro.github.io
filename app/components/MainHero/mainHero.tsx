import { Card } from "../_shared/Card";
import Link from "next/link";
import { motion, useScroll, useInView } from "framer-motion";
import { Source_Code_Pro, Montserrat, IBM_Plex_Sans } from '@next/font/google'
import { useRef } from "react";
import Image from 'next/image';
import Hamburger from "../Hamburger/hamburger";

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400']
})

const montserrat = Montserrat({
  weight: ['500'],
  subsets: ['latin']
})

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400'],
  subsets: ['latin']
})

export default function MainHero() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  return (
    <div className="flex flex-col justify-center items-center main-hero">
      <Hamburger />
      <motion.div className={'flex flex-col items-center w-10/12 mt-4'}>
        <motion.div className={'flex flex-col text-start md:flex-row w-full'}>
          <motion.h1
              className={`${montserrat.className} text-6xl g-sub-heading`}
              initial={{opacity: 0}}
              style={{x: 100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 1.25}}
          >Hello, I'm
          </motion.h1>
          <motion.h1
              className={`${montserrat.className} text-6xl g-heading`}
              initial={{opacity: 0}}
              style={{x: 100}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 1.25}}
          >Hiroto Robinson
          </motion.h1>
        </motion.div>
        <div className="custom-divider small-divider"></div>
        <motion.h2
            className={`${montserrat.className} text-3xl sub-heading self-end`}
            initial={{opacity: 0}}
            style={{y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: .5, duration: 1}}
        >Software Engineer
        </motion.h2>
      </motion.div>
      <div className={'flex flex-col sm:items-center w-10/12 md:flex-row'}>
        {/* <div className="hero-circle"></div> */}
        <Image
            className="relative rounded-md md:rounded-none"
            src={"/portfolio-headerimg.png"}
            width={500} height={550}
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 50vw, 33vw"
            alt={"Hiroto"}
        />
        <div className="inline-flex flex-col sm:w-full lg:w-6/12 justify-between">
          <motion.div className="hero-text-box">
            <div className="md:w-10/12 self-center text-left md:self-end mt-9 md:text-right">
              Over 3 years of experience in Web Stacks involving Javascript, Typescript,
              React, & NodeJS. Experienced in AGILE team environments collaborating to deliver custom ecommerce platforms to automate online business management and transactions.
              Quick thinking, communicative, and always learning. I strive to improve myself each day and hold accountability for the code I push.
            </div>
          </motion.div>
          <div className="link-container mt-6 w-7/12">
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
    </div>
  )
}