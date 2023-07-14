import Image from "next/image";
import { FunctionComponent } from "react";
import Paragraph from "../Paragraph";
import { PiHeartStraightBold } from "react-icons/pi";

interface ImageProps {
  src: string;
  description: string;
  price: number;
  name: string;
  type?: string;
}

const ProductCard: FunctionComponent<ImageProps> = ({
  src,
  price,
  name,
  description,
  type,
}) => {
  function formatCurrency(value: number) {
    const formattedValue = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return formattedValue;
  }

  return (
    <div className="group cursor-pointer">
      <div className="relative ">
        <Image src={src} alt={description} width={260} height={260} />
        <div className="absolute top-4 right-4">
          <PiHeartStraightBold size={20} />
        </div>

        <Paragraph className="absolute -bottom-4 left-1 text-[12px] bg-white p-1 group-hover:-bottom-2 duration-150 text-">
          {formatCurrency(price)}
        </Paragraph>
      </div>

      <Paragraph className="text-sm text-blue-950 mt-2">{name}</Paragraph>
      <Paragraph className="text-sm -mt-2 text-black/40">{type}</Paragraph>
    </div>
  );
};

export default ProductCard;
