import type { Meta, StoryObj } from "@storybook/react-vite";
import Dialogue from "./Dialogue";
import Minolith from "../../base/Minolith";
import DialogueAvatarContainer from "../DialogueAvatarContainer";
import DialogueContentContainer from "../DialogueContentContainer";
import DialogueMessage from "../DialogueMessage";
import DialogueName from "../DialogueName/DialogueName";
import DialogueAvatar from "../DialogueAvatar";
import DialogueMessageInner from "../DialogueMessageInner";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Dialogue",
  component: Dialogue,
  tags: ["autodocs"],
  argTypes: {
    colorName: {
      control: "text",
    },
  },
} satisfies Meta<typeof Dialogue>;
export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <Minolith>
      <Dialogue {...props}>
        <DialogueAvatarContainer>
          <DialogueAvatar
            src="https://minominolyly.github.io/minolith/images/avatar.png"
            alt="avatar"
          />
        </DialogueAvatarContainer>
        <DialogueContentContainer>
          <DialogueName>{"Name"}</DialogueName>
          <DialogueMessage>
            <DialogueMessageInner>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </DialogueMessageInner>
          </DialogueMessage>
        </DialogueContentContainer>
      </Dialogue>
    </Minolith>
  ),
};

export const IsRight: Story = {
  args: {
    isRight: true,
  },
  render: (props) => (
    <Minolith>
      <Dialogue {...props}>
        <DialogueContentContainer>
          <DialogueName>{"Name"}</DialogueName>
          <DialogueMessage>
            <DialogueMessageInner>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </DialogueMessageInner>
          </DialogueMessage>
        </DialogueContentContainer>
        <DialogueAvatarContainer>
          <DialogueAvatar
            src="https://minominolyly.github.io/minolith/images/avatar.png"
            alt="avatar"
          />
        </DialogueAvatarContainer>
      </Dialogue>
    </Minolith>
  ),
};

export const AvatarHasBorder: Story = {
  args: {},
  render: (props) => (
    <Minolith>
      <Dialogue {...props}>
        <DialogueAvatarContainer>
          <DialogueAvatar
            src="https://minominolyly.github.io/minolith/images/avatar.png"
            alt="avatar"
            hasBorder={true}
          />
        </DialogueAvatarContainer>
        <DialogueContentContainer>
          <DialogueName>{"Name"}</DialogueName>
          <DialogueMessage>
            <DialogueMessageInner>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </DialogueMessageInner>
          </DialogueMessage>
        </DialogueContentContainer>
      </Dialogue>
    </Minolith>
  ),
};

export const IsAvatarCircleAndHasBorder: Story = {
  args: {
    isAvatarCircle: true,
  },
  render: (props) => (
    <Minolith>
      <Dialogue {...props}>
        <DialogueAvatarContainer>
          <DialogueAvatar
            src="https://minominolyly.github.io/minolith/images/avatar.png"
            alt="avatar"
            hasBorder={true}
          />
        </DialogueAvatarContainer>
        <DialogueContentContainer>
          <DialogueName>{"Name"}</DialogueName>
          <DialogueMessage>
            <DialogueMessageInner>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </DialogueMessageInner>
          </DialogueMessage>
        </DialogueContentContainer>
      </Dialogue>
    </Minolith>
  ),
};

export const IsRightAndIsAvatarCircleAndHasBorder: Story = {
  args: {
    isRight: true,
    isAvatarCircle: true,
  },
  render: (props) => (
    <Minolith>
      <Dialogue {...props}>
        <DialogueContentContainer>
          <DialogueName>{"Name"}</DialogueName>
          <DialogueMessage>
            <DialogueMessageInner>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            </DialogueMessageInner>
          </DialogueMessage>
        </DialogueContentContainer>
        <DialogueAvatarContainer>
          <DialogueAvatar
            src="https://minominolyly.github.io/minolith/images/avatar.png"
            alt="avatar"
            hasBorder={true}
          />
        </DialogueAvatarContainer>
      </Dialogue>
    </Minolith>
  ),
};
