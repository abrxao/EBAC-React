"use client";
import useGlobalState from "@/stores/modalStore";
import { useQuery } from "react-query";
import axios from "axios";
import { User } from "@/pages/api/addFavorite";
import SkeletonCreator from "../SkeletonCreator";
import Container from "../Container";
import FavCard from "../FavCard";
import Title from "../Title";
import Paragraph from "../Paragraph";

const FavsQuery = ({ email }: { email: string }) => {
  const { data: user, isLoading } = useQuery<User | undefined>(
    "favoriteProducts",
    async () => {
      const { data } = await axios.post<User>(
        "http://localhost:3000/api/getFavorites",
        {
          email: email,
        }
      );
      console.log(data);
      return data;
    }
  );

  return (
    <Container className="flex flex-col w-full h-[80vh] gap-2 overflow-scroll shadow border-b py-4">
      {isLoading && (
        <>
          <SkeletonCreator className="w-2/3 m-auto h-10" quantity={1} />
          <SkeletonCreator className="w-full h-28" quantity={3} />
        </>
      )}
      {!isLoading && (
        <>
          <Title className="text-xl xs:text-3xl text-center">
            PRODUTOS FAVORITOS
          </Title>
          {user?.favs.length === 0 && <Paragraph className="text-gray-400 text-center">sem favoritos por enquanto</Paragraph>}
          {user?.favs.map((elem, index) => {
            return <FavCard product={elem} key={elem.name} />;
          })}
        </>
      )}
    </Container>
  );
};
export default FavsQuery;
