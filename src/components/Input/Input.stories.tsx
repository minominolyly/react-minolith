import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "./Input";
import MinolithStatic from "../../base/MinolithStatic";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      type: "boolean",
    },
  },
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PlainText: Story = {
  args: {
    colorName: undefined,
    type: "text",
  },
  render: (props) => (
    <MinolithStatic>
      <Input {...props} />
    </MinolithStatic>
  ),
};
export const PlainCheckbox: Story = {
  args: {
    colorName: undefined,
    type: "checkbox",
  },
  render: (props) => (
    <MinolithStatic>
      <Input {...props} />
    </MinolithStatic>
  ),
};
export const PlainRadio: Story = {
  args: {
    colorName: undefined,
    type: "radio",
  },
  render: (props) => (
    <MinolithStatic>
      <Input {...props} />
    </MinolithStatic>
  ),
};
export const PlainColor: Story = {
  args: {
    colorName: undefined,
    type: "color",
  },
  render: (props) => (
    <MinolithStatic>
      <Input {...props} />
    </MinolithStatic>
  ),
};
