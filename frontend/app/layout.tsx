import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";


export const metadata = {
  title: "Prueba Tecnica",
  descripcion: "Mi Portafolio Personal en Next.js 16"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="black">

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}