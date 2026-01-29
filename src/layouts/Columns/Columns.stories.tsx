import type { Meta, StoryObj } from "@storybook/react-vite";

import Columns from "./Columns";
import Minolith from "../../base/Minolith";
import Column from "../Column";
import Div from "../../components/Div";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Layouts/Columns",
  component: Columns,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Columns>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const AllAuto: Story = {
  args: {},
  render: (props) => (
    <Minolith>
      <Columns {...props}>
        <Column>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column1"}
          </Div>
        </Column>
        <Column>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column2"}
          </Div>
        </Column>
        <Column>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column3"}
          </Div>
        </Column>
        <Column>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column4"}
          </Div>
        </Column>
        <Column>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column5"}
          </Div>
        </Column>
        <Column>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column6"}
          </Div>
        </Column>
        <Column>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column7"}
          </Div>
        </Column>
        <Column>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column8"}
          </Div>
        </Column>
        <Column>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column9"}
          </Div>
        </Column>
        <Column>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column10"}
          </Div>
        </Column>
        <Column>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column11"}
          </Div>
        </Column>
        <Column>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column12"}
          </Div>
        </Column>
      </Columns>
    </Minolith>
  ),
};

export const HasGutter: Story = {
  args: {
    gutter: 1,
  },
  render: (props) => (
    <Minolith>
      <Columns {...props}>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column1"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column2"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column3"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column4"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column5"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column6"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column7"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column8"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column9"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column10"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column11"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column12"}
          </Div>
        </Column>
      </Columns>
    </Minolith>
  ),
};

export const HasGutterX: Story = {
  args: {
    gutter: {
      x: 1,
    },
  },
  render: (props) => (
    <Minolith>
      <Columns {...props}>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column1"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column2"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column3"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column4"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column5"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column6"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column7"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column8"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column9"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column10"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column11"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column12"}
          </Div>
        </Column>
      </Columns>
    </Minolith>
  ),
};

export const HasGutterY: Story = {
  args: {
    gutter: {
      y: 1,
    },
  },
  render: (props) => (
    <Minolith>
      <Columns {...props}>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column1"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column2"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column3"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column4"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column5"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column6"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column7"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column8"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column9"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column10"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column11"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column12"}
          </Div>
        </Column>
      </Columns>
    </Minolith>
  ),
};

export const HasGutterXMediumOrLess: Story = {
  args: {
    gutter: {
      mediumOrLess: {
        x: 1,
      },
    },
  },
  render: (props) => (
    <Minolith>
      <Columns {...props}>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column1"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column2"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column3"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column4"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column5"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column6"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column7"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column8"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column9"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column10"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column11"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column12"}
          </Div>
        </Column>
      </Columns>
    </Minolith>
  ),
};

export const HasGutterYMediumOrLess: Story = {
  args: {
    gutter: {
      mediumOrLess: {
        y: 1,
      },
    },
  },
  render: (props) => (
    <Minolith>
      <Columns {...props}>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column1"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column2"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column3"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column4"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column5"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column6"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column7"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column8"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column9"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column10"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column11"}
          </Div>
        </Column>
        <Column
          size={1}
          sizeXSmall={12}
          sizeSmall={6}
          sizeMedium={4}
          sizeLarge={3}
        >
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column12"}
          </Div>
        </Column>
      </Columns>
    </Minolith>
  ),
};

export const SmallOrLess: Story = {
  args: {},
  render: (props) => (
    <Minolith>
      <Columns {...props}>
        <Column sizeSmallOrLess={12}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column1"}
          </Div>
        </Column>
        <Column sizeSmallOrLess={12}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column2"}
          </Div>
        </Column>
        <Column sizeSmallOrLess={12}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column3"}
          </Div>
        </Column>
        <Column sizeSmallOrLess={12}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column4"}
          </Div>
        </Column>
        <Column sizeSmallOrLess={12}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column5"}
          </Div>
        </Column>
        <Column sizeSmallOrLess={12}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column6"}
          </Div>
        </Column>
        <Column sizeSmallOrLess={12}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column7"}
          </Div>
        </Column>
        <Column sizeSmallOrLess={12}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column8"}
          </Div>
        </Column>
        <Column sizeSmallOrLess={12}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column9"}
          </Div>
        </Column>
        <Column sizeSmallOrLess={12}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column10"}
          </Div>
        </Column>
        <Column sizeSmallOrLess={12}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column11"}
          </Div>
        </Column>
        <Column sizeSmallOrLess={12}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Column12"}
          </Div>
        </Column>
      </Columns>
    </Minolith>
  ),
};

export const Small6XSmall12: Story = {
  args: {},
  render: (props) => (
    <Minolith>
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
        <Column sizeSmall={6} sizeXSmall={12}>
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
    </Minolith>
  ),
};
