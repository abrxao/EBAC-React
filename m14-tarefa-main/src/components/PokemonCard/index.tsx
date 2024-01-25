import axios from "axios";
import React, { useState } from "react";
import Button from "../button";
import Input from "../input";

interface PokemonCardProps {
  id: string;
  name: string;
  image: string;
  evolution: number;
  createPokemon: boolean;
  setCreatePokemon: (update: boolean) => void;
  updateList: number;
  setUpdateList: (update: number) => void;
}

export const PokemonCard = ({
  id,
  name,
  image,
  evolution,
  createPokemon,
  setCreatePokemon,
  updateList,
  setUpdateList,
}: PokemonCardProps) => {
  const [editPokemon, setEditPokemon] = useState(createPokemon ?? false);
  const [nameInput, setNameInput] = useState(name ?? "");
  const [imageIsLoading, setImageIsLoading] = useState<boolean>(true);
  const [imageUrlInput, setImageUrlInput] = useState(image ?? "");
  const [evolutionInput, setEvolutionInput] = useState<number>(evolution);

  const handleChangePokemon = async () => {
    if (nameInput && imageUrlInput && evolutionInput) {
      try {
        if (createPokemon) {
          axios.post("http://localhost:4000/pokemons", {
            name: nameInput,
            imageUrl: imageUrlInput,
            evolution: Number(evolutionInput),
          });
          setCreatePokemon(false);
        } else {
          axios.put(`http://localhost:4000/pokemons/${id}`, {
            name: nameInput,
            imageUrl: imageUrlInput,
            evolution: Number(evolutionInput),
          });
          setEditPokemon(false);
        }
        setUpdateList(updateList + 1);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleDeletePokemon = () => {
    if (setUpdateList && updateList) {
      axios.delete(`http://localhost:4000/pokemons/${id}`);
      setUpdateList(updateList + 1);
    }
  };

  return (
    <div className="p-4 w-full md:max-w-72 flex flex-wrap flex-col gap-1 border rounded-lg hover:bg-zinc-50 dark:bg-slate-950 dark:hover:bg-slate-900">
      {editPokemon ? (
        <>
          <div>
            <label className="dark:text-zinc-100" htmlFor="name">
              Nome:
            </label>
            <Input
              id="name"
              type="text"
              onChange={(e) => setNameInput(e.target.value)}
              value={nameInput}
            />
          </div>
          <label className="dark:text-zinc-100" htmlFor="url-image">
            Url da imagem:
            <Input
              id="url-image"
              type="text"
              onChange={(e) => setImageUrlInput(e.target.value)}
              value={imageUrlInput}
            />
          </label>
          <label className="dark:text-zinc-100" htmlFor="evolution">
            Estágio de evolução:
            <Input
              id="evolution"
              type="number"
              onChange={(e) => setEvolutionInput(parseInt(e.target.value))}
              value={evolutionInput}
            />
          </label>
          <div className="flex gap-1">
            <Button
              onClick={() =>
                createPokemon ? setCreatePokemon(false) : setEditPokemon(false)
              }
              variant="destructive"
            >
              Cancelar
            </Button>
            <Button onClick={handleChangePokemon} className="w-full">
              Confirmar
            </Button>
          </div>
        </>
      ) : (
        <div>
          <h2 className="text-zinc-100 text-xl">{name}</h2>
          {imageIsLoading && (
            <div className="animate-pulse max-w-68 h-60 bg-slate-700 rounded-lg w-full"></div>
          )}
          <img
            data-isloading={imageIsLoading}
            src={image}
            alt={name}
            onLoad={() => setImageIsLoading(false)}
            className="aspect-square object-contain data-[isloading=true]:h-0"
          />
          <h3 className="dark:text-zinc-300 my-2 ">
            Estágio de evolução: {evolution}
          </h3>
          <div className="flex gap-1">
            <Button onClick={handleDeletePokemon} variant="destructive">
              Remover
            </Button>
            <Button onClick={() => setEditPokemon(true)} className="w-full">
              Alterar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
