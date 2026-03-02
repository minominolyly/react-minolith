import type { Meta, StoryObj } from "@storybook/react-vite";
import Footer from "./Footer";
import Minolith from "../../base/Minolith";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Footer>;
export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <Minolith>
      <Footer {...props}>{"Footer"}</Footer>
    </Minolith>
  ),
};
