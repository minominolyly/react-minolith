import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";
import Minolith from "../../base/Minolith";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    colorName: {
      control: "text",
    },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {

  },
  render: (props) => (
    <Minolith>
      <Button {...props} />
    </Minolith>
  ),
};
