import type { Meta, StoryObj } from "@storybook/react-vite";

import Container from "./Container";
import Minolith from "../../base/Minolith";
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
    <Minolith>
      <Div border={{ style: "solid" }}>
        <Container {...props}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Container"}
          </Div>
        </Container>
      </Div>
    </Minolith>
  ),
};

export const HasGutter: Story = {
  args: {
    gutter: 1,
  },
  render: (props) => (
    <Minolith>
      <Div border={{ style: "solid" }}>
        <Container {...props}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Container"}
          </Div>
        </Container>
      </Div>
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
      <Div border={{ style: "solid" }}>
        <Container {...props}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Container"}
          </Div>
        </Container>
      </Div>
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
      <Div border={{ style: "solid" }}>
        <Container {...props}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Container"}
          </Div>
        </Container>
      </Div>
    </Minolith>
  ),
};

export const IsFluid: Story = {
  args: {
    isFluid: true,
  },
  render: (props) => (
    <Minolith>
      <Div border={{ style: "solid" }}>
        <Container {...props}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Container"}
          </Div>
        </Container>
      </Div>
    </Minolith>
  ),
};

export const IsFluidHasGutter: Story = {
  args: {
    isFluid: true,
    gutter: 1,
  },
  render: (props) => (
    <Minolith>
      <Div border={{ style: "solid" }}>
        <Container {...props}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Container"}
          </Div>
        </Container>
      </Div>
    </Minolith>
  ),
};

export const IsFluidHasGutterX: Story = {
  args: {
    isFluid: true,
    gutter: {
      x: 1,
    },
  },
  render: (props) => (
    <Minolith>
      <Div border={{ style: "solid" }}>
        <Container {...props}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Container"}
          </Div>
        </Container>
      </Div>
    </Minolith>
  ),
};

export const IsFluidHasGutterY: Story = {
  args: {
    isFluid: true,
    gutter: {
      y: 1,
    },
  },
  render: (props) => (
    <Minolith>
      <Div border={{ style: "solid" }}>
        <Container {...props}>
          <Div border={{ style: "solid" }} spacing={{ padding: 1 }}>
            {"Container"}
          </Div>
        </Container>
      </Div>
    </Minolith>
  ),
};
