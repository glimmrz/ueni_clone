import { Footer } from "@/components/footer";
import { AboutModal } from "@/components/modals/about-modal";
import { FeaturesModal } from "@/components/modals/features-modal";
import { PreviewModal } from "@/components/modals/preview-modal";
import { Navbar } from "@/components/navbars/navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <PreviewModal />
      <AboutModal />
      <FeaturesModal />
    </>
  );
}
