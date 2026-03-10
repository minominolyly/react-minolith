import type { Meta, StoryObj } from "@storybook/react-vite";

import Rhombus from "./Rhombus";
import Minolith from "../../base/Minolith";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Backgrounds/Rhombus",
  component: Rhombus,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Rhombus>;

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
      <Rhombus {...props} sizing={{ aspectRatio: "16:9" }}>
        <span>{"Plain"}</span>
      </Rhombus>
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
      <Rhombus {...props} sizing={{ aspectRatio: "16:9" }}>
        <span>{"Plain"}</span>
      </Rhombus>
    </Minolith>
  ),
};
