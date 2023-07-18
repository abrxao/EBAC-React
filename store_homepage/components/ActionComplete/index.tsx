"use client";
import useGlobalState from "@/stores/modalStore";
import Paragraph from "../Paragraph";
import { useEffect, useMemo, useState } from "react";

const ActionComplete = () => {
  const { isActionMessageOpen, setIsActionMessageOpen, actionMessage } =
    useGlobalState();
  const animation = useMemo(() => {
    if (isActionMessageOpen) {
      return "translate-x-0";
    } else {
      return "-translate-x-full";
    }
  }, [isActionMessageOpen]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsActionMessageOpen(false);
    }, 1700);

    return () => {
      clearTimeout(timeout);
    };
  }, [isActionMessageOpen]);

  return (
    <div className={`fixed top-2 z-50 duration-300 ease-out ${animation}`}>
      <div className=" bg-white p-2 border border-black ">
        <div>
          <Paragraph className="text-sm">{actionMessage}</Paragraph>
        </div>
      </div>
    </div>
  );
};

export default ActionComplete;
