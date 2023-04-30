'use client';
import Link from "next/link";
import MainHero from "./components/MainHero/mainHero"
import { Source_Code_Pro, Source_Sans_Pro } from '@next/font/google'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['600']
})

const sourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['400']
})

export default function Page() {

  return (
    <div className="container mx-auto main-container">
      <section id="home" className="flex flex-col items-center justify-center">
        <MainHero />
      </section>
      <section className="flex flex-col project-section">
        <h2 className={`${sourceCodePro.className} text-3xl sub-heading mb-7 nav-heading`}>// Projects</h2>
        <div className="flex flex-col">
          <div className="flex justify-evenly">
            <div className="project-block" id="projects">
              <Link href="/vedomy">
                <img className="project-img" src="/vedomyView.png" alt="project"/>
                <h4>Vedomy</h4>
              </Link>
            </div>
            {/* <div className="project-block">
              <Link href="/pong">
                <img className="project-img" src="/gushi_logo.png" alt="project"/>
                <h4>Pong</h4>
              </Link>
            </div> */}
            <div className="project-block">
              <Link href="/contactsCrud">
                <img className="project-img" src="/contactCrudSS.png" alt="project"/>
                <h4>Contacts-CRUD</h4>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <a className="link-img" href="#home">
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 6L6 1L1 6M11 13L6 8L1 13" stroke="#EDE490" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  )
}