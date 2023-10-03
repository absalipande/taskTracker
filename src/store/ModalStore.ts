import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AddModalStore {
  isAddModelOpen: boolean;
  addModalOpen: () => void;
  addModalClose: () => void;
  modalCategoryTitle: ParentType;
  setModalCategoryTitle: (id: ParentType) => void;
}

export const useModalStore = create<AddModalStore>()(
  persist(
    (set) => ({
      isAddModelOpen: false,
      addModalOpen: () => set({ isAddModelOpen: true }),
      addModalClose: () => set({ isAddModelOpen: false }),
      modalCategoryTitle: 'To-do',
      setModalCategoryTitle: (id) => set({ modalCategoryTitle: id }),
    }),
    {
      name: 'add-modal-store',
    }
  )
);
