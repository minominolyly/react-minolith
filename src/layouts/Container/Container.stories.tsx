import type { Meta, StoryObj } from "@storybook/react-vite";

import Container from "./Container";
import MinolithStatic  from "../../base/MinolithStatic";
import { Div } from "../../components/Div";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Layouts/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <MinolithStatic>
      <Div border={{ style: "solid" }}>
        <Container {...props}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Container"}
          </Div>
        </Container>
      </Div>
    </MinolithStatic>
  ),
};

export const HasGutterX: Story = {
  args: {
    gutter: {
      x: "1rem",
    },
  },
  render: (props) => (
    <MinolithStatic>
      <Div border={{ style: "solid" }}>
        <Container {...props}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Container"}
          </Div>
        </Container>
      </Div>
    </MinolithStatic>
  ),
};

export const IsFluid: Story = {
  args: {
    isFluid: true,
  },
  render: (props) => (
    <MinolithStatic>
      <Div border={{ style: "solid" }}>
        <Container {...props}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Container"}
          </Div>
        </Container>
      </Div>
    </MinolithStatic>
  ),
};

export const IsFluidHasGutterX: Story = {
  args: {
    isFluid: true,
    gutter: {
      x: "1rem",
    },
  },
  render: (props) => (
    <MinolithStatic>
      <Div border={{ style: "solid" }}>
        <Container {...props}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Container"}
          </Div>
        </Container>
      </Div>
    </MinolithStatic>
  ),
};
