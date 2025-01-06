import type { Meta, StoryObj } from "@storybook/react";

import Stripe from "./Stripe";
import { MinolithStatic } from "../../base/MinolithStatic";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Backgrounds/Stripe",
  component: Stripe,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Stripe>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LightPlain: Story = {
  args: {
    colorName: undefined,
  },
  render: (props) => (
    <MinolithStatic>
      <Stripe {...props} sizing={{ aspectRatio: "16:9" }}>
        <span>{"Plain"}</span>
      </Stripe>
    </MinolithStatic>
  ),
};

export const DarkPlain: Story = {
  args: {
    colorName: undefined,
  },
  render: (props) => (
    <MinolithStatic colorScheme="dark">
      <Stripe {...props}>
        <span>{"Plain"}</span>
      </Stripe>
    </MinolithStatic>
  ),
};
