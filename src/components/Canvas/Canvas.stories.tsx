import type { Meta, StoryObj } from "@storybook/react-vite";
import Canvas from "./Canvas";
import Minolith from "../../base/Minolith";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Canvas",
  component: Canvas,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Canvas>;
export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <Minolith>
      <Canvas {...props} />
    </Minolith>
  ),
};
