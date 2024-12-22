import type { Meta, StoryObj } from "@storybook/react";

import Gingham from "./Gingham";
import { MinolithStatic } from "../../base/MinolithStatic";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Backgrounds/Gingham",
  component: Gingham,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Gingham>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    colorName: undefined,
  },
  render: (props) => (
    <MinolithStatic>
      <Gingham {...props}>
        <span>{"Plain"}</span>
      </Gingham>
    </MinolithStatic>
  ),
};
