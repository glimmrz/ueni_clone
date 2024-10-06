"use client";
import { useVideoModal } from "@/hooks/controllers";
import { Modal } from "./modal";

export function VideoModal() {
  const { isOpen, src, onClose } = useVideoModal();

  return (
    <Modal
      className="w-full md:w-[600px] h-[300px] md:h-[400px]"
      isOpen={isOpen}
      onClose={onClose}
    >
      <iframe className="w-full h-full" src={src} frameborder="0"></iframe>
    </Modal>
  );
}
