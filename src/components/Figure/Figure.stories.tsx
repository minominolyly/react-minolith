import type { Meta, StoryObj } from "@storybook/react-vite";
import Figure from "./Figure";
import Minolith from "../../base/Minolith";
import FigureCaption from "../FigureCaption";
import FigureContent from "../FigureContent";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Figure",
  component: Figure,
  tags: ["autodocs"],
  argTypes: {
    colorName: {
      control: "text",
    }
  },
} satisfies Meta<typeof Figure>;
export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    colorName: undefined,
  },
  render: (props) => (
    <Minolith>
      <Figure {...props}>
        <FigureContent>{"FigureContent"}</FigureContent>
        <FigureCaption>{"FigureCaption"}</FigureCaption>
      </Figure>
    </Minolith>
  ),
};
