import type { Meta, StoryObj } from "@storybook/react-vite";
import Hamburger from "./Hamburger";
import MinolithStatic  from "../../base/MinolithStatic";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Hamburger",
  component: Hamburger,
  tags: ["autodocs"],
  argTypes: {
    isActive: {
      type: "boolean",
    }
  },
} satisfies Meta<typeof Hamburger>;
export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    isActive: undefined,
  },
  render: (props) => (
    <MinolithStatic>
      <Hamburger {...props} />
    </MinolithStatic>
  ),
};

