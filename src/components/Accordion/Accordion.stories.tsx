import type { Meta, StoryObj } from "@storybook/react-vite";
import Accordion from "./Accordion";
import MinolithStatic from "../../base/MinolithStatic";
import AccordionSummary from "../AccordionSummary";
import AccordionDetails from "../AccordionDetails";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <MinolithStatic>
      <Accordion {...props}>
        <AccordionSummary>{"AccordionSummary"}</AccordionSummary>
        <AccordionDetails>{"AccordionDetails"}</AccordionDetails>
      </Accordion>
    </MinolithStatic>
  ),
};

