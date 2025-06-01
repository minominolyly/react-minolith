import type { Meta, StoryObj } from "@storybook/react-vite";

import MinolithStatic  from "../../base/MinolithStatic";
import Loader from "./Loader";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    colorName: undefined,
  },
  render: (props) => (
    <MinolithStatic>
      <Loader {...props} />
    </MinolithStatic>
  ),
};
