"use client";
import { usePreviewModal } from "@/hooks/controllers";
import { Modal } from "./modal";

export function PreviewModal() {
  const { isOpen, onClose } = usePreviewModal();

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-full">
      <iframe
        src="https://ilham.com.bd"
        frameborder="0"
        className="w-full h-[90vh]"
      ></iframe>
    </Modal>
  );
}
