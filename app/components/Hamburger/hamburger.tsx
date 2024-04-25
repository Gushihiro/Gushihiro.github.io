import { useState } from "react";
import { Source_Code_Pro } from '@next/font/google'

const sourceCodePro = Source_Code_Pro({
    subsets: ['latin'],
    weight: ['500']
})
export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const isOpen = (bool: boolean) => {
        setIsNavOpen(bool);
        !isNavOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
    }

    return (
        <div className="flex items-center justify-start self-center py-8 px-8 md:hidden w-10/12">
            <nav>
                <section className="MOBILE-MENU flex lg:hidden ">
                    <div
                        className="HAMBURGER-ICON space-y-2 fixed"
                        onClick={() => isOpen(!isNavOpen)}
                    >
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>

                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div
                            className="absolute top-0 right-0 px-8 py-8"
                            onClick={() => isOpen(false)}
                        >
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="flex flex-col items-center justify-between min-h-[250px]">
                            <a className={`nav-link ${sourceCodePro.className}`} onClick={() => isOpen(false)} href="#projects">
                                // Projects
                            </a>
                            <a className={`nav-link ${sourceCodePro.className}`}
                               href="https://linkedin.com/in/robinsonhiroto" target="_blank">
                                <span>// LinkedIn</span>
                            </a>
                            <a className={`nav-link ${sourceCodePro.className}`} href="https://github.com/Gushihiro"
                               target="_blank">
                                <span>// GitHub</span>
                            </a>
                            <a className={`nav-link ${sourceCodePro.className}`} href="/resume.pdf" target="_blank">
                                <span>// Resume</span>
                            </a>
                        </ul>
                    </div>
                </section>
            </nav>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: black;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
    );
}
