import type { Meta, StoryObj } from "@storybook/react";

import Section from "./Section";
import { MinolithStatic } from "../../base/MinolithStatic";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Section",
  component: Section,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
  },
  render: (props) => (
    <MinolithStatic>
      <Section {...props}>
        <Section>{"Plain"}</Section>
      </Section>
    </MinolithStatic>
  ),
};
