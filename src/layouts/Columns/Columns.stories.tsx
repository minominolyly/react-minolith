import type { Meta, StoryObj } from "@storybook/react";

import Columns from "./Columns";
import { MinolithStatic } from "../../base/MinolithStatic";
import { Column } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Layouts/Columns",
  component: Columns,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof Columns>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AllAuto: Story = {
  args: {
  },
  render: (props) => (
    <MinolithStatic>
      <Columns {...props}>
        <Column>
          {"Column1"}
        </Column>
        <Column>
          {"Column2"}
        </Column>
        <Column>
          {"Column3"}
        </Column>
        <Column>
          {"Column4"}
        </Column>
        <Column>
          {"Column5"}
        </Column>
        <Column>
          {"Column6"}
        </Column>
        <Column>
          {"Column7"}
        </Column>
        <Column>
          {"Column8"}
        </Column>
        <Column>
          {"Column9"}
        </Column>
        <Column>
          {"Column10"}
        </Column>
        <Column>
          {"Column11"}
        </Column>
        <Column>
          {"Column12"}
        </Column>
      </Columns>
    </MinolithStatic>
  ),
};

export const SmallOrLess: Story = {
  args: {
  },
  render: (props) => (
    <MinolithStatic>
      <Columns {...props}>
        <Column sizeSmallOrLess={12}>
          {"Column1"}
        </Column>
        <Column sizeSmallOrLess={12}>
          {"Column2"}
        </Column>
        <Column sizeSmallOrLess={12}>
          {"Column3"}
        </Column>
        <Column sizeSmallOrLess={12}>
          {"Column4"}
        </Column>
        <Column sizeSmallOrLess={12}>
          {"Column5"}
        </Column>
        <Column sizeSmallOrLess={12}>
          {"Column6"}
        </Column>
        <Column sizeSmallOrLess={12}>
          {"Column7"}
        </Column>
        <Column sizeSmallOrLess={12}>
          {"Column8"}
        </Column>
        <Column sizeSmallOrLess={12}>
          {"Column9"}
        </Column>
        <Column sizeSmallOrLess={12}>
          {"Column10"}
        </Column>
        <Column sizeSmallOrLess={12}>
          {"Column11"}
        </Column>
        <Column sizeSmallOrLess={12}>
          {"Column12"}
        </Column>
      </Columns>
    </MinolithStatic>
  ),
};

export const Small6XSmall12: Story = {
  args: {
  },
  render: (props) => (
    <MinolithStatic>
      <Columns {...props}>
        <Column sizeSmall={6} sizeXSmall={12}>
          {"Column1"}
        </Column>
        <Column sizeSmall={6} sizeXSmall={12}>
          {"Column2"}
        </Column>
        <Column sizeSmall={6} sizeXSmall={12}>
          {"Column3"}
        </Column>
        <Column sizeSmall={6} sizeXSmall={12}>
          {"Column4"}
        </Column>
        <Column sizeSmall={6} sizeXSmall={12}>
          {"Column5"}
        </Column>
        <Column sizeSmall={6} sizeXSmall={12}>
          {"Column6"}
        </Column>
        <Column sizeSmall={6} sizeXSmall={12}>
          {"Column7"}
        </Column>
        <Column  sizeSmall={6}sizeXSmall={12}>
          {"Column8"}
        </Column>
        <Column sizeSmall={6} sizeXSmall={12}>
          {"Column9"}
        </Column>
        <Column sizeSmall={6} sizeXSmall={12}>
          {"Column10"}
        </Column>
        <Column sizeSmall={6} sizeXSmall={12}>
          {"Column11"}
        </Column>
        <Column sizeSmall={6} sizeXSmall={12}>
          {"Column12"}
        </Column>
      </Columns>
    </MinolithStatic>
  ),
};
