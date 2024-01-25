import React from "react";
import type { ComponentMeta, ComponentStory, Meta } from "@storybook/react";
import PokemonCardSkeleton from "./PokemonCardSkeleton";

const meta: Meta<typeof PokemonCardSkeleton> = {
  title: "Components/PokemonCardSkeleton",
  component: PokemonCardSkeleton,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "450px",
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
    fullscreen: true,
  },
} as ComponentMeta<typeof PokemonCardSkeleton>;

export default meta;

const Template: ComponentStory<typeof PokemonCardSkeleton> = (args) => (
  <PokemonCardSkeleton />
);

export const Main = Template.bind({});

Main.args = {};
