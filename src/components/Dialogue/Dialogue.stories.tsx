import type { Meta, StoryObj } from "@storybook/react";

import Dialogue from "./Dialogue";
import { MinolithStatic } from "../../base/MinolithStatic";
import DialogueAvatarContainer from "./DialogueAvatarContainer";
import DialogueContentContainer from "./DialogueContentContainer";
import DialogueMessage from "./DialogueMessage";
import DialogueName from "./DialogueName";
import DialogueAvatar from "./DialogueAvatar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Dialogue",
  component: Dialogue,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Dialogue>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
  },
  render: (props) => (
    <MinolithStatic>
      <Dialogue {...props}>
        <DialogueAvatarContainer>
          <DialogueAvatar src="https://minominolyly.github.io/minolith/images/avatar.png" alt="avatar" />
        </DialogueAvatarContainer>
        <DialogueContentContainer>
          <DialogueName>
            {"Name"}
          </DialogueName>
          <DialogueMessage>
            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          </DialogueMessage>
        </DialogueContentContainer>
      </Dialogue>
    </MinolithStatic>
  ),
};

export const IsAvatarRight: Story = {
  args: {
    isAvatarRight: true,
  },
  render: (props) => (
    <MinolithStatic>
      <Dialogue {...props}>
        <DialogueContentContainer>
          <DialogueName>
            {"Name"}
          </DialogueName>
          <DialogueMessage>
            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          </DialogueMessage>
        </DialogueContentContainer>
        <DialogueAvatarContainer>
          <DialogueAvatar src="https://minominolyly.github.io/minolith/images/avatar.png" alt="avatar" />
        </DialogueAvatarContainer>
      </Dialogue>
    </MinolithStatic>
  ),
};

export const AvatarCircle: Story = {
  args: {
    isAvatarRight: true,
  },
  render: (props) => (
    <MinolithStatic>
      <Dialogue {...props}>
        <DialogueContentContainer>
          <DialogueName>
            {"Name"}
          </DialogueName>
          <DialogueMessage>
            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          </DialogueMessage>
        </DialogueContentContainer>
        <DialogueAvatarContainer>
          <DialogueAvatar src="https://minominolyly.github.io/minolith/images/avatar.png" alt="avatar" isCircle={true} />
        </DialogueAvatarContainer>
      </Dialogue>
    </MinolithStatic>
  ),
};
