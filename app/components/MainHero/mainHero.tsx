import { Card } from "../_shared/Card";
import Link from "next/link";
import { motion, useScroll, useInView } from "framer-motion";
import { Source_Code_Pro, Montserrat, IBM_Plex_Sans } from 'next/font/google'
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
      <motion.div className={'flex flex-col items-center w-10/12 mt-8'}>
        <motion.div className={'flex flex-col text-start w-full'}>
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
        <div className="inline-flex flex-col sm:w-full lg:w-8/12 justify-between">
          <motion.div className="hero-text-box self-end">
            <div className="md:w-10/12 self-center text-left md:self-end mt-9 md:text-right">
              Over 3 years of experience in Web Stacks involving Javascript, Typescript,
              React, & NodeJS. Experienced in AGILE team environments collaborating to deliver custom ecommerce platforms to automate online business management and transactions.
              Quick thinking, communicative, and always learning. I strive to improve myself each day and hold accountability for the code I push.
            </div>
          </motion.div>
          <div className={'flex flex-row items-end'}>
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
            <div className={'bg-gray-700 w-fit h-fit rounded-3xl'}>
              <svg width="155" height="169" viewBox="0 0 155 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="155" height="169" fill="none"/>
                <path
                    d="M80.512 71.6H81.388V80H80.512V71.6ZM75.256 80H74.368V71.6H75.256V80ZM80.596 76.124H75.16V75.344H80.596V76.124Z"
                    fill="black"/>
                <path
                    d="M74.368 95V86.6H77.512C78.224 86.6 78.836 86.716 79.348 86.948C79.86 87.172 80.252 87.5 80.524 87.932C80.804 88.356 80.944 88.872 80.944 89.48C80.944 90.072 80.804 90.584 80.524 91.016C80.252 91.44 79.86 91.768 79.348 92C78.836 92.224 78.224 92.336 77.512 92.336H74.86L75.256 91.928V95H74.368ZM80.104 95L77.944 91.952H78.904L81.076 95H80.104ZM75.256 92L74.86 91.58H77.488C78.328 91.58 78.964 91.396 79.396 91.028C79.836 90.66 80.056 90.144 80.056 89.48C80.056 88.808 79.836 88.288 79.396 87.92C78.964 87.552 78.328 87.368 77.488 87.368H74.86L75.256 86.948V92Z"
                    fill="black"/>
                <path
                    d="M92.7035 113.5L121.993 113.079M122.5 112.579V142.579M122.5 61L78.5 17L9 87L79 157.5L122.5 113.5"
                    stroke="black"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}