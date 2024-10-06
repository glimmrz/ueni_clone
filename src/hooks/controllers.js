import { create } from "zustand";

export const usePreviewModal = create((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export const useVideoModal = create((set) => ({
  isOpen: false,
  src: null,
  onOpen: (video) =>
    set(() => ({
      isOpen: true,
      src: video,
    })),
  onClose: () =>
    set(() => ({
      isOpen: false,
      src: null,
    })),
}));
