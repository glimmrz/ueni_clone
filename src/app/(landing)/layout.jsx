import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbars/navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
