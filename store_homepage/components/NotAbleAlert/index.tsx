"use client";
import useGlobalState from "@/stores/modalStore";
import Paragraph from "../Paragraph";
import Title from "../Title";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { useEffect, useMemo, useState } from "react";

const NotAbleAlert = () => {
  const { isAlertOpen, setIsAlertOpen } = useGlobalState();
  const animation = useMemo(() => {
    if (isAlertOpen) {
      return "translate-x-0";
    } else {
      return "-translate-x-full";
    }
  }, [isAlertOpen]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAlertOpen(false);
    }, 2200);

    return () => {
      clearTimeout(timeout);
    };
  }, [isAlertOpen]);

  return (
    <div className={`fixed top-0 z-50 duration-300 ease-out ${animation}`}>
      <div className=" bg-black p-2 gap-6 flex justify-between items-center ">
        <div>
          <Title className="text-white text-xl">
            Ação ainda não disponivel
          </Title>
          <Paragraph className="text-white/70 text-sm">
            Estamos trabalhando nisso
          </Paragraph>
        </div>

        <div className="text-white">
          <HiMiniWrenchScrewdriver size={36} />
        </div>
      </div>
    </div>
  );
};

export default NotAbleAlert;
