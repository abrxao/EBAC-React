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

const Header: FunctionComponent = () => {
  return (
    <header className="bg-white">
      <Container className="flex justify-between">
        <div className="flex -space-x-2 xs:space-x-1 w-2/5">
          <MenuIcon>
            <VscMenu size={24} fill="#000" />
          </MenuIcon>
          <MenuIcon>
            <PiHeartStraightBold size={24} fill="#000" />
          </MenuIcon>
        </div>

        <div className="aspect-square flex items-center">
          <Image src={adi_logo} alt="logo da adidas" width={52} />
        </div>

        <div className="flex -space-x-2 justify-end xs:space-x-1 w-2/5">
          <MenuIcon>
            <Badge value={1}>
              <LuUser size={24} color="#000" />
            </Badge>
          </MenuIcon>

          <MenuIcon>
            <AiOutlineSearch size={24} fill="#000" />
          </MenuIcon>

          <MenuIcon>
            <AiOutlineShopping size={24} fill="#000" />
          </MenuIcon>
        </div>
      </Container>
    </header>
  );
};

export default Header;
