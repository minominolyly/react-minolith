import type { Meta, StoryObj } from "@storybook/react-vite";
import Badge from "./Badge";
import MinolithStatic from "../../base/MinolithStatic";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    isSmall: {
      type: "boolean",
    },
  },
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    isSmall: undefined,
    colorName: undefined,
  },
  render: (props) => (
    <MinolithStatic>
      <Badge {...props}>
        <span>{"Plain"}</span>
      </Badge>
    </MinolithStatic>
  ),
};
