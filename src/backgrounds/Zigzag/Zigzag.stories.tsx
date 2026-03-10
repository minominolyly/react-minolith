import type { Meta, StoryObj } from "@storybook/react-vite";

import Zigzag from "./Zigzag";
import Minolith from "../../base/Minolith";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Backgrounds/Zigzag",
  component: Zigzag,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Zigzag>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LightPlain: Story = {
  args: {
    colorName: undefined,
    size: undefined,
  },
  render: (props) => (
    <Minolith colorScheme="light">
      <Zigzag {...props} sizing={{ aspectRatio: "16:9" }}>
        <span>{"Plain"}</span>
      </Zigzag>
    </Minolith>
  ),
};

export const DarkPlain: Story = {
  args: {
    colorName: undefined,
    size: undefined,
  },
  render: (props) => (
    <Minolith colorScheme="dark">
      <Zigzag {...props} sizing={{ aspectRatio: "16:9" }}>
        <span>{"Plain"}</span>
      </Zigzag>
    </Minolith>
  ),
};
