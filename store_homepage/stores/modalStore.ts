import { Product } from "@/components/ProductCard";
import { create } from "zustand";

type GlobalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (update: boolean) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (update: boolean) => void;
  isFavsBarOpen: boolean;
  setIsFavsBarOpen: (update: boolean) => void;
  isAlertOpen: boolean;
  setIsAlertOpen: (update: boolean) => void;
  isActionMessageOpen: boolean;
  setIsActionMessageOpen: (update: boolean) => void;
  favProdSelect: Product | null;
  setFavProdSelect: (update: Product) => void;
  loggedEmail: string;
  setLoggedEmail: (update: string) => void;
  actionMessage: string;
  setActionMessage: (update: string) => void;
};

const useGlobalState = create<GlobalProps>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (update: boolean) => {
    set((state) => ({ isModalOpen: update }));
  },
  isMenuOpen: false,
  setIsMenuOpen: (update: boolean) => {
    set((state) => ({ isMenuOpen: update }));
  },
  isFavsBarOpen: false,
  setIsFavsBarOpen: (update: boolean) => {
    set((state) => ({ isFavsBarOpen: update }));
  },
  isAlertOpen: false,
  setIsAlertOpen: (update: boolean) => {
    set((state) => ({ isAlertOpen: update }));
  },
  favProdSelect: null,
  setFavProdSelect: (update: Product) => {
    set((state) => ({ favProdSelect: update }));
  },
  loggedEmail: "",
  setLoggedEmail: (update: string) => {
    set((state) => ({ loggedEmail: update }));
  },
  actionMessage: "",
  setActionMessage: (update: string) => {
    set((state) => ({ actionMessage: update }));
  },
  isActionMessageOpen: false,
  setIsActionMessageOpen: (update: boolean) => {
    set((state) => ({ isActionMessageOpen: update }));
  },
}));

export default useGlobalState;
