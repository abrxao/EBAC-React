import Image from "next/image";
import { FunctionComponent } from "react";
import Paragraph from "../Paragraph";

export interface Product {
  src: string;
  description: string;
  price: number;
  name: string;
  type?: string;
}

interface ProductProps {
  product: Product;
}

const FavCard: FunctionComponent<ProductProps> = ({ product }) => {
  const { src, name, description, price, type } = product;

  function formatCurrency(value: number) {
    const formattedValue = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    return formattedValue;
  }

  return (
    <div className="group cursor-pointer w-full flex border p-1">
      <div className="relative overflow-hidden h-full w-1/3 aspect-square">
        <Image
          src={src}
          alt={description}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      <div className="pl-2 w-2/3">
        <div>
          <Paragraph className="line-clamp-1 text-ellipsis text-sm xs:text-[1rem] text-blue-950">
            {name}
          </Paragraph>
        </div>

        <Paragraph className="text-xs xs:text-sm -mt-2 text-black/40">
          {type}
        </Paragraph>
        <Paragraph className=" bg-white  duration-150 end-1">
          {formatCurrency(price)}
        </Paragraph>
      </div>
    </div>
  );
};

export default FavCard;
