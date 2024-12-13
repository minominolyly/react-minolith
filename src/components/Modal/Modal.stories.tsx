import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./Modal";
import { MinolithStatic } from "../../base/MinolithStatic";
import ModalContent from "./ModalContent";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    isActive: true,
  },
  render: (props) => (
    <MinolithStatic>
      {"Body"}
      <Modal {...props}>
        <ModalContent>{"Modal"}</ModalContent>
      </Modal>
    </MinolithStatic>
  ),
};
