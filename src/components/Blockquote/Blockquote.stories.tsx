import type { Meta, StoryObj } from "@storybook/react";

import Blockquote from "./Blockquote";
import { MinolithStatic } from "../../base/MinolithStatic";
import { Paragraph } from "../Paragraph";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Blockquote",
  component: Blockquote,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
  },
  render: (props) => (
    <MinolithStatic>
      <Blockquote {...props}>
        <Paragraph>{"Plain"}</Paragraph>
      </Blockquote>
    </MinolithStatic>
  ),
};

export const IsItalic: Story = {
  args: {
    isItalic: true,
  },
  render: (props) => (
    <MinolithStatic>
      <Blockquote {...props}>
        <Paragraph>{"Is Italic"}</Paragraph>
      </Blockquote>
    </MinolithStatic>
  ),
};

export const HasQuote: Story = {
  args: {
    hasQuote: true,
  },
  render: (props) => (
    <MinolithStatic>
      <Blockquote {...props}>
        <Paragraph>{"Has Quote"}</Paragraph>
      </Blockquote>
    </MinolithStatic>
  ),
};

export const HasQuoteBefore: Story = {
  args: {
    hasQuote: {
      before: true,
    },
  },
  render: (props) => (
    <MinolithStatic>
      <Blockquote {...props}>
        <Paragraph>{"Has Quote Before"}</Paragraph>
      </Blockquote>
    </MinolithStatic>
  ),
};

export const HasQuoteAfter: Story = {
  args: {
    hasQuote: {
      after: true,
    },
  },
  render: (props) => (
    <MinolithStatic>
      <Blockquote {...props}>
        <Paragraph>{"Has Quote After"}</Paragraph>
      </Blockquote>
    </MinolithStatic>
  ),
};
