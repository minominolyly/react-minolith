import type { Meta, StoryObj } from "@storybook/react";

import Zigzag from "./Zigzag";
import { MinolithStatic } from "../../base/MinolithStatic";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Backgrounds/Zigzag",
  component: Zigzag,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Zigzag>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LightPlain: Story = {
  args: {
    colorName: undefined,
  },
  render: (props) => (
    <MinolithStatic colorScheme="light">
      <Zigzag {...props} sizing={{ aspectRatio: "16:9" }}>
        <span>{"Plain"}</span>
      </Zigzag>
    </MinolithStatic>
  ),
};

export const DarkPlain: Story = {
  args: {
    colorName: undefined,
  },
  render: (props) => (
    <MinolithStatic colorScheme="dark">
      <Zigzag {...props} sizing={{ aspectRatio: "16:9" }}>
        <span>{"Plain"}</span>
      </Zigzag>
    </MinolithStatic>
  ),
};
