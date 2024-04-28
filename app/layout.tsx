import "../styles/globals.css";
import { Navbar, Footer } from "./components/components";
import Head from 'next/head';

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
    <Head>
        <title>
            Hiroto Robinson
        </title>
        <link rel="icon" href="/icon?<generated>" type="image/svg" sizes="32x32"/>
        <meta name={'title'} property={'og:title'} content={"Hiroto's Portfolio Site"}/>
        <meta name={'type'} property={'og:type'} content={'website'}/>
        <meta name={'image'} property={'og:image'} content={'/hiro_logo.svg'}/>
        <meta name={'url'} property={'og:url'} content={'https://gushihiro.vercel.app'}/>
        <meta name={'description'} property={'og:description'}
              content={'Hiroto is a full stack developer with a specialization in front-end development utilizing React, Nextjs, and various other front-end frameworks.'}/>
    </Head>
    <body className="h-full">
    <div className="flex flex-row">
    {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}