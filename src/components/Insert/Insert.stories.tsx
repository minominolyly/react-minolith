import type { Meta, StoryObj } from "@storybook/react-vite";
import Insert from "./Insert";
import Minolith from "../../base/Minolith";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Insert",
  component: Insert,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Insert>;
export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <Minolith>
      <Insert {...props}>
        {"Insert"}
      </Insert>
    </Minolith>
  ),
};
