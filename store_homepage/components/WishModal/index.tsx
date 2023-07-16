"use client";
import { MouseEvent, useRef, useState } from "react";
import Input from "../Input";
import Paragraph from "../Paragraph";
import Title from "../Title";
import FloatButton from "../FloatButton";
import { BsArrowRight } from "react-icons/bs";
import { MdCheck, MdClose } from "react-icons/md";
import LinkButton from "../LinkButton";
import useGlobalState from "@/stores/modalStore";
import validEmail from "@/utils/validEmail";

const WishModal = () => {
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean | undefined>(
    undefined
  );
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { isModalOpen, setIsModalOpen } = useGlobalState();
  const formRef = useRef<HTMLInputElement | null>(null);

  function clickOutside(e: MouseEvent) {
    const target = e.target;
    if (target == formRef.current) {
      setIsModalOpen(false);
    }
  }

  return (
    <div
      ref={formRef}
      className={`fixed flex items-end top-0 left-0 w-full h-full bg-black/50 z-20  ${
        !isModalOpen && "hidden"
      }`}
      onClick={(e) => clickOutside(e)}
    >
      <div className="w-full bg-white relative px-4 py-8">
        <button
          className="p-2 border border-black absolute bg-white top-0 right-4 -translate-y-1/2"
          onClick={(e) => setIsModalOpen(false)}
        >
          <MdClose size={32} />
        </button>
        <Title className="text-2xl mb-4 tracking-wide">
          SALVE SUA LISTA DE DESEJOS E APROVEITE OS BENEFÍCIOS DO ADICLUB
        </Title>
        <Paragraph className="text-sm mb-8">
          Você tem direito a cupons de desconto, produtos exclusivos e ao
          participar do adiClub
        </Paragraph>
        <Title className="text-xl mb-2">FAÇA O LOGIN</Title>
        <Paragraph className="text-sm mb-4">
          Vamos verificar se você já tem uma conta
        </Paragraph>
        <Input
          valid={isValidEmail}
          onChange={(e) => {
            setEmail(e.target.value);
            if (validEmail(email)) {
              setIsValidEmail(true);
            }
          }}
          onBlur={(e) => setIsValidEmail(validEmail(email))}
        />
        <div className="mt-8 flex items-start gap-2">
          <label className="relative w-8 aspect-square border-2 border-black cursor-pointer inline-block">
            <input
              type="checkbox"
              className="peer absolute opacity-0 cursor-pointer"
              onChange={(e) => setIsChecked(!isChecked)}
            />
            <span className="hidden peer-checked:block bg-black w-full h-full absolute z-10 text-white">
              <MdCheck size={20} />
            </span>
          </label>
          <Paragraph className="text-sm">
            Mantenha-me conectado - válido para todos os métodos de log-in
            abaixo.{" "}
            <LinkButton href="#" className="tracking-normal font-normal">
              Mais informações
            </LinkButton>
          </Paragraph>
        </div>
        <div className="mt-4">
          <FloatButton
            className="w-full"
            onClick={(e) => console.log(email)}
            disabled={!isValidEmail}
          >
            CONTINUAR <BsArrowRight size={22} />
          </FloatButton>
        </div>
      </div>
    </div>
  );
};

export default WishModal;
