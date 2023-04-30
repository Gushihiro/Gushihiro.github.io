import { Header } from "../components/Header/header";
import { Footer } from "../components/Footer/footer";

export default function MainLayout({ children } : {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
}
