import type { Meta, StoryObj } from "@storybook/react-vite";
import Paragraph from "./Paragraph";
import MinolithStatic  from "../../base/MinolithStatic";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Paragraph>;
export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <MinolithStatic>
      <Paragraph {...props}>{"Plain"}</Paragraph>
    </MinolithStatic>
  ),
};

