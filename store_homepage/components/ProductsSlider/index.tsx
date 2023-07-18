"use client";
import React, { FunctionComponent } from "react";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "swiper/css";
import ProductCard from "../ProductCard";
import SkeletonCreator from "../SkeletonCreator";

interface ProductsSliderProps {
  url: string;
  id: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  src: string;
  type: string;
}

const ProductsSlider: FunctionComponent<ProductsSliderProps> = ({
  url,
  id,
}) => {
  const { data: products, isLoading } = useQuery<[Product]>(id, async () => {
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
              quantity={3}
            />
          </div>
        ) : (
          products?.map((product, index) => {
            return (
              <SwiperSlide key={product.name}>
                <ProductCard
                  product={product}
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
