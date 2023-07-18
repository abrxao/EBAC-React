"use client";
import Image from "next/image";
import adiLogo from "@/public/adi_simbol.png";
import { MdClose } from "react-icons/md";
import { useEffect, useMemo } from "react";
import useGlobalState from "@/stores/modalStore";
import Paragraph from "../Paragraph";
import { useQuery } from "react-query";
import axios from "axios";
import { User } from "@/pages/api/addFavorite";
import SkeletonCreator from "../SkeletonCreator";
import Container from "../Container";
import FavCard from "../FavCard";
import Title from "../Title";
import FloatButton from "../FloatButton";
import FavsQuery from "../FavQuery";

const FavsSideBar = () => {
  const { isFavsBarOpen, setIsFavsBarOpen, loggedEmail, setIsModalOpen } =
    useGlobalState();
  const animation = useMemo(() => {
    if (isFavsBarOpen) {
      return "-translate-x-0";
    } else {
      return "-translate-x-full";
    }
  }, [isFavsBarOpen]);

  return (
    <div
      className={`bg-white fixed w-full min-h-full overflow-y-scroll duration-300 ease-out left-0 top-0 z-40 ${animation}`}
    >
      <div className="p-2 xs:p-4 relative border-b">
        <div className="w-12 m-auto">
          <Image src={adiLogo} alt="logo adidas" />
        </div>
        <button
          className="absolute top-2 right-2 xs:top-4 xs:right=4"
          onClick={(e) => {
            setIsFavsBarOpen(false);
            
          }}
        >
          <MdClose size={32} />
        </button>
      </div>

      {!loggedEmail && (
        <div className="my-4">
          <Title className="text-xl text-center">
            Voçê precisa colocar um e-mail
          </Title>
          <FloatButton
            className="m-auto"
            onClick={(e) => {
              setIsFavsBarOpen(false);
              setIsModalOpen(true);
            }}
          >
            FAÇA O LOGIN COM EMAIL
          </FloatButton>
        </div>
      )}

      {loggedEmail && <FavsQuery email={loggedEmail} />}
    </div>
  );
};
export default FavsSideBar;
