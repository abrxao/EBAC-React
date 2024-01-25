import React, { useEffect, useState } from "react";
import { PokemonCard } from "./components/PokemonCard";
import PokemonCardSkeleton from "./components/PokemonCard/PokemonCardSkeleton";
import axios from "axios";
import "./style.css";
import Button from "./components/button";
import { useQuery } from "@tanstack/react-query";

const IndexPage = () => {
  const {
    data: pokemonList,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: "pokemons",
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:4000/pokemons");
      return data;
    },
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });
  const [createPokemon, setCreatePokemon] = useState(false);
  const [updateList, setUpdateList] = useState(0);

  useEffect(() => {
    refetch();
  }, [updateList]);

  return (
    <main>
      <h1 className="text-2xl font-bold my-2 dark:text-zinc-100">
        Coleção pessoal de POKÉMONS
      </h1>
      <Button onClick={() => setCreatePokemon(true)} className="my-2">
        Adicionar Pokémon à sua coleção
      </Button>
      {createPokemon && (
        <div className="py-4">
          <p>Novo pokemon</p>
          <PokemonCard
            createPokemon={createPokemon}
            setCreatePokemon={setCreatePokemon}
            updateList={updateList}
            setUpdateList={setUpdateList}
          />
        </div>
      )}
      <div className="flex flex-wrap gap-4">
        {!isLoading
          ? pokemonList.map(({ id, name, imageUrl, evolution }) => (
              <PokemonCard
                key={id}
                id={id}
                name={name}
                image={imageUrl}
                evolution={evolution}
                updateList={updateList}
                setUpdateList={setUpdateList}
              />
            ))
          : Array.from({ length: 8 }).map((_, index) => (
              <PokemonCardSkeleton key={`skeleton-${index}`} />
            ))}
      </div>
    </main>
  );
};

export default IndexPage;
