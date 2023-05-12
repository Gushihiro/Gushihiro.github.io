import "../../styles/globals.css";

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
      </body>
    </html>
  )
}