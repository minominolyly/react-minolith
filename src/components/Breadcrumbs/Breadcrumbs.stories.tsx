import type { Meta, StoryObj } from "@storybook/react";

import { MinolithStatic } from "../../base/MinolithStatic";
import Breadcrumbs from "./Breadcrumbs";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbsNav from "./BreadcrumbsNav";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {
    colorName: undefined,
  },
  render: (props) => (
    <MinolithStatic>
      <BreadcrumbsNav>
        <Breadcrumbs {...props}>
          <Breadcrumb>{"Item 1"}</Breadcrumb>
          <Breadcrumb>{"Item 2"}</Breadcrumb>
          <Breadcrumb>{"Item 3"}</Breadcrumb>
        </Breadcrumbs>
      </BreadcrumbsNav>
    </MinolithStatic>
  ),
};
