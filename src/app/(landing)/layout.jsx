import { PreviewModal } from "@/components/modals/preview-modal";
import { VideoModal } from "@/components/modals/video-modal";
import { Navbar } from "@/components/navbars/navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <PreviewModal />
      <VideoModal />
    </>
  );
}
