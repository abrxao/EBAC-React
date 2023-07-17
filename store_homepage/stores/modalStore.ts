import { create } from "zustand";

type GlobalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (update: boolean) => void;
  isAlertOpen: boolean;
  setIsAlertOpen: (update: boolean) => void;
};

const useGlobalState = create<GlobalProps>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (update: boolean) => {
    set((state) => ({ isModalOpen: update }));
  },
  isAlertOpen: false,
  setIsAlertOpen: (update: boolean) => {
    set((state) => ({ isAlertOpen: update }));
  },
}));

export default useGlobalState;
