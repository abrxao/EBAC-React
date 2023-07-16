import { create } from "zustand";

type GlobalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (update: boolean) => void;
};

const useGlobalState = create<GlobalProps>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (update: boolean) => {
    set((state) => ({ isModalOpen: update }));
  },
}));

export default useGlobalState;
