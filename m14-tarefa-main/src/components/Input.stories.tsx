import React from "react";
import Input from "./input";
import type {
  Meta,
  StoryObj,
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "1rem 2rem",
        }}
        onChange={(e) => {
          console.log(e.target);
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
} as ComponentMeta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputMain = Template.bind({});

InputMain.args = {};

export const InputDisable = Template.bind({});

InputDisable.args = { disabled: true };

export const InputFile = Template.bind({});

InputFile.args = { type: "file" };
