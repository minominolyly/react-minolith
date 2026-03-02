import type { Meta, StoryObj } from "@storybook/react-vite";
import Textarea from "./Textarea";
import Minolith from "../../base/Minolith";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      type: "boolean",
    },
  },
} satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    colorName: undefined,
  },
  render: (props) => (
    <Minolith>
      <Textarea {...props} />
    </Minolith>
  ),
};
