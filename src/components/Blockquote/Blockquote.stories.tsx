import type { Meta, StoryObj } from "@storybook/react-vite";
import Blockquote from "./Blockquote";
import Minolith from "../../base/Minolith";
import Paragraph from "../Paragraph";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Blockquote",
  component: Blockquote,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Blockquote>;
export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <Minolith>
      <Blockquote {...props}>
        <Paragraph>{"Plain"}</Paragraph>
      </Blockquote>
    </Minolith>
  ),
};
export const IsItalic: Story = {
  args: {
    isItalic: true,
  },
  render: (props) => (
    <Minolith>
      <Blockquote {...props}>
        <Paragraph>{"Is Italic"}</Paragraph>
      </Blockquote>
    </Minolith>
  ),
};
export const HasQuote: Story = {
  args: {
    hasQuote: true,
  },
  render: (props) => (
    <Minolith>
      <Blockquote {...props}>
        <Paragraph>{"Has Quote"}</Paragraph>
      </Blockquote>
    </Minolith>
  ),
};
export const HasQuoteBefore: Story = {
  args: {
    hasQuote: {
      before: true,
    },
  },
  render: (props) => (
    <Minolith>
      <Blockquote {...props}>
        <Paragraph>{"Has Quote Before"}</Paragraph>
      </Blockquote>
    </Minolith>
  ),
};
export const HasQuoteAfter: Story = {
  args: {
    hasQuote: {
      after: true,
    },
  },
  render: (props) => (
    <Minolith>
      <Blockquote {...props}>
        <Paragraph>{"Has Quote After"}</Paragraph>
      </Blockquote>
    </Minolith>
  ),
};
