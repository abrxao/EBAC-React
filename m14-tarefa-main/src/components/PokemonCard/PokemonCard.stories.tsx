import React from "react";
import type {
  ComponentMeta,
  ComponentStory,
  Meta,
  StoryObj,
} from "@storybook/react";
import { PokemonCard } from ".";

const meta: Meta<typeof PokemonCard> = {
  title: "Components/PokemonCard",
  component: PokemonCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1em",
          backgroundColor: "var(--bg-color)",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof PokemonCard>;

export default meta;

const pokemonCardData = {
  name: "Pichu",
  image:
    "https://vignette1.wikia.nocookie.net/centro-de-ayuda-pokemon/images/9/9d/Pichu.png/revision/latest/scale-to-width-down/2000?cb=20130120163056&path-prefix=es",
  evolution: 1,
  id: "7b49",
  createPokemon: false,
  setCreatePokemon: (update: boolean) => {},
};

type Story = StoryObj<typeof PokemonCard>;

const Template: ComponentStory<typeof PokemonCard> = (args) => (
  <PokemonCard {...args} />
);

export const Main = Template.bind({});

Main.args = {
  ...pokemonCardData,
};
