import type { Meta, StoryObj } from "@storybook/react";

import Ruby from "./Ruby";
import { MinolithStatic } from "../../base/MinolithStatic";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Ruby",
  component: Ruby,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Ruby>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    rubyText: "テスト"
  },
  render: (props) => (
    <MinolithStatic>
      <Ruby {...props}>
        {"試験"}
      </Ruby>
    </MinolithStatic>
  ),
};
