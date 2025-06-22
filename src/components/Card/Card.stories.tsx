import type { Meta, StoryObj } from "@storybook/react-vite";
import MinolithStatic from "../../base/MinolithStatic";
import Card from "./Card";
import CardBody from "../CardBody";
import CardFooter from "../CardFooter";
import CardHeader from "../CardHeader";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    colorName: undefined,
  },
  render: (props) => (
    <MinolithStatic>
      <Card {...props}>
        <CardHeader>{"Title"}</CardHeader>
        <CardBody>{"Body"}</CardBody>
        <CardFooter>{"Footer"}</CardFooter>
      </Card>
    </MinolithStatic>
  ),
};
