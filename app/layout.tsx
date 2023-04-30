import "../styles/globals.css";
import { Navbar, Footer } from "./components/components";

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className="h-full">
        <div className="flex flex-row">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}