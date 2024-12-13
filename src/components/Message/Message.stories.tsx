import type { Meta, StoryObj } from "@storybook/react";

import Message from "./Message";
import { MinolithStatic } from "../../base/MinolithStatic";
import MessageHeader from "./MessageHeader";
import MessageBody from "./MessageBody";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Message",
  component: Message,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    colorName: undefined,
  },
  render: (props) => (
    <MinolithStatic>
      <Message {...props}>
        <MessageHeader>
          {"Header"}
        </MessageHeader>
        <MessageBody>
          {"Body"}
        </MessageBody>
      </Message>
    </MinolithStatic>
  ),
};

export const BodyOnly: Story = {
  args: {
    colorName: undefined,
  },
  render: (props) => (
    <MinolithStatic>
      <Message {...props}>
        <MessageBody>
          {"Body"}
        </MessageBody>
      </Message>
    </MinolithStatic>
  ),
};
