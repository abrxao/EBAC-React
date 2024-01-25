import React from "react";
import Button from "./button";
import type {
  Meta,
  StoryObj,
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
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
} as ComponentMeta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "button",
};

export const Secondary_large = Template.bind({});

Secondary_large.args = {
  children: "secondary",
  variant: "secondary",
  size: "lg",
};
export const Icon_Button = Template.bind({});

Icon_Button.args = {
  children: "X",
  variant: "outline",
  size: "icon",
};

export const Icon_X_Small = Template.bind({});

Icon_X_Small.args = {
  children: "X",
  variant: "outline",
  size: "icon_xs",
};

export const X_small = Template.bind({});

X_small.args = {
  children: "outline",
  variant: "outline",
  size: "xs",
};
export const Outline_small = Template.bind({});

Outline_small.args = {
  children: "outline",
  variant: "outline",
  size: "sm",
};
