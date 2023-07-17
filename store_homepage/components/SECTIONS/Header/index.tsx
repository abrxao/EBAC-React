"use client";
import { FunctionComponent } from "react";
import MenuIcon from "../../MenuIcon";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import { LuUser } from "react-icons/lu";
import { PiHeartStraightBold } from "react-icons/pi";
import { VscMenu } from "react-icons/vsc";
import Image from "next/image";
import adi_logo from "@/public/adi_simbol.png";
import Container from "../../Container";
import Badge from "../../Badge";
import useScrollDirection from "@/Hooks/useScrollDirection";
import useGlobalState from "@/stores/modalStore";

const Header: FunctionComponent = () => {
  const isOpen = useScrollDirection();
  const { setIsAlertOpen } = useGlobalState();
  return (
    <header
      className={`bg-white fixed z-10 w-full pt-1 -translate-y-1 duration-300 ${
        !isOpen && "-translate-y-full"
      }`}
    >
      <Container className="flex justify-between">
        <div className="flex -space-x-2 xs:space-x-1 w-2/5">
          <MenuIcon>
            <VscMenu size={22} fill="#000" />
          </MenuIcon>
          <MenuIcon className="py-4">
            <PiHeartStraightBold size={22} fill="#000" className="py-2px" />
          </MenuIcon>
        </div>

        <div className="aspect-square flex items-center">
          <Image src={adi_logo} alt="logo da adidas" width={52} />
        </div>

        <div className="flex -space-x-2 justify-end xs:space-x-1 w-2/5">
          <MenuIcon onClick={(e) => setIsAlertOpen(true)}>
            <Badge value={1}>
              <LuUser size={22} color="#000" />
            </Badge>
          </MenuIcon>

          <MenuIcon onClick={(e) => setIsAlertOpen(true)}>
            <AiOutlineSearch size={22} fill="#000" />
          </MenuIcon>

          <MenuIcon onClick={(e) => setIsAlertOpen(true)}>
            <AiOutlineShopping size={22} fill="#000" />
          </MenuIcon>
        </div>
      </Container>
    </header>
  );
};

export default Header;
