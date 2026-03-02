import type { Meta, StoryObj } from "@storybook/react-vite";
import Span from "./Span";
import Minolith from "../../base/Minolith";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Span",
  component: Span,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Span>;
export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <Minolith>
      <Span {...props}>
        <span>{"Plain"}</span>
      </Span>
    </Minolith>
  ),
};
