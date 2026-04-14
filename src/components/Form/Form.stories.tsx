import type { Meta, StoryObj } from "@storybook/react-vite";
import Form from "./Form";
import Minolith from "../../base/Minolith";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Form",
  component: Form,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Form>;
export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <Minolith>
      <Form {...props} />
    </Minolith>
  ),
};
