"use client";
import { useAboutModal } from "@/hooks/controllers";
import { Modal } from "./modal";

export function AboutModal() {
  const { isOpen, onClose } = useAboutModal();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tg9j8Zk-h4Y?si=iYCvRDYzDVhcGgd0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </Modal>
  );
}
