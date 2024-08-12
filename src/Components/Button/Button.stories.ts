import React from "react";
import Button from "./Button";
import { Meta,StoryObj } from "@storybook/react/*";
import { fn } from "@storybook/test";

const meta = {
    title: "Test/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: { onClick: fn() },
    } as Meta<typeof Button>;


 export default meta;
type Story = StoryObj<typeof meta>;   

export const Primary: Story = {
    args: {
      label: 'Button',
    },
  };
  export const BottomButton: Story = {
    args: {
      label: 'Bottom Button',
      position: "Bottom",
    },
  };  