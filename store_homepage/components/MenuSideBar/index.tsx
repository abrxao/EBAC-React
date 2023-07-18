import Image from "next/image";
import adiLogo from "@/public/adi_simbol.png";
import { MdClose } from "react-icons/md";
import { useEffect, useMemo } from "react";
import useGlobalState from "@/stores/modalStore";
import Paragraph from "../Paragraph";

const MenuSideBar = () => {
  const { isMenuOpen, setIsMenuOpen, setIsAlertOpen } = useGlobalState();
  const animation = useMemo(() => {
    if (isMenuOpen) {
      return "-translate-x-0";
    } else {
      return "-translate-x-full";
    }
  }, [isMenuOpen]);

  return (
    <div
      className={`bg-white w-full h-full fixed duration-300 ease-out left-0 top-0 z-40 ${animation}`}
    >
      <div className="p-2 xs:p-4 relative border-b">
        <div className="w-12 m-auto">
          <Image src={adiLogo} alt="logo adidas" />
        </div>
        <button
          className="absolute top-2 right-2 xs:top-4 xs:right=4"
          onClick={(e) => setIsMenuOpen(false)}
        >
          <MdClose size={32} />
        </button>
      </div>

      <div className="p-2 xs:p-6 gap-3 flex flex-col">
        <button
          className="w-full text-left text-lg"
          onClick={(e) => setIsAlertOpen(true)}
        >
          Minha Conta
        </button>
        <button
          className="w-full text-left text-lg"
          onClick={(e) => setIsAlertOpen(true)}
        >
          Localizador de Lojas
        </button>
        <button
          className="w-full text-left text-lg"
          onClick={(e) => setIsAlertOpen(true)}
        >
          Ajuda
        </button>
        <button
          className="w-full text-left text-lg"
          onClick={(e) => setIsAlertOpen(true)}
        >
          Status do Pedido
        </button>
        <button
          className="w-full text-left text-lg"
          onClick={(e) => setIsAlertOpen(true)}
        >
          adidas APP
        </button>
        <button
          className="w-full text-left text-lg"
          onClick={(e) => setIsAlertOpen(true)}
        >
          COMENTARIOS
        </button>
      </div>
    </div>
  );
};
export default MenuSideBar;
