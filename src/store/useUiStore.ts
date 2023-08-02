import { create } from 'zustand'; 


interface UiStore {
    isModalOpen : boolean;
    toggleModal : () => void;
}



export const useUiStore = create<UiStore>((set) => ({
    isModalOpen : false,
    toggleModal : () => set((state) => ({ isModalOpen : !state.isModalOpen })),
})); 