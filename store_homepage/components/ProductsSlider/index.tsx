"use client";
import React, { FunctionComponent } from "react";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import tenis from "../../public/images/white_shoe.avif";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import LinkButton from "../LinkButton";
import Image from "next/image";
import ProductCard from "../ProductCard";
import SkeletonCreator from "../SkeletonCreator";

interface ProductsSliderProps {
  url: string;
}

const ProductsSlider: FunctionComponent<ProductsSliderProps> = ({url}) => {
  const { data: products, isLoading } = useQuery("products", async () => {
    const { data } = await axios.get(url);
    return data;
  });
  return (
    <>
      <Swiper slidesPerView={2.6} spaceBetween={8} className="mySwiper">
        {isLoading ? (
          <div className="flex gap-2 mb-12">
            <SkeletonCreator
              className="aspect-square w-2/5 shrink-0"
              quantity={5}
            />
          </div>
        ) : (
          products.map((product, index) => {
            return (
              <SwiperSlide key={product.name}>
                <ProductCard
                  name={product.name}
                  description={product.description}
                  src={product.src}
                  price={product.price}
                  type={product.type}
                />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </>
  );
};

export default ProductsSlider;
