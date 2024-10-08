import { PreviewModal } from "@/components/modals/preview-modal";
import { VideoModal } from "@/components/modals/video-modal";
import { Navbar } from "@/components/navbars/navbar";
import { LanguageSidebar } from "@/components/sidebars/language-sidebar";
import { MenuSidebar } from "@/components/sidebars/menu-sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <PreviewModal />
      <VideoModal />
      <MenuSidebar />
      <LanguageSidebar />
    </>
  );
}
