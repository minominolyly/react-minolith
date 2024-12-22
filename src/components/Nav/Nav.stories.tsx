import type { Meta, StoryObj } from "@storybook/react";

import Nav from "./Nav";
import { MinolithStatic } from "../../base/MinolithStatic";
import NavBrand from "./NavBrand";
import NavMenu from "./NavMenu";
import NavBrandLeft from "./NavBrandLeft";
import NavBrandCenter from "./NavBrandCenter";
import NavBrandRight from "./NavBrandRight";
import NavMenuItem from "./NavMenuItem";
import { Hamburger } from "../Hamburger";
import NavAccordion from "./NavAccordion";
import NavStatic from "./NavStatic";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Nav",
  component: Nav,
  tags: ["autodocs"],
  argTypes: {

  },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

const navMenuItems = (
  <>
    <NavMenuItem as="a" href="/">{"NavMenuItem1"}</NavMenuItem>
    <NavMenuItem as="a" href="/">{"NavMenuItem2"}</NavMenuItem>
    <NavMenuItem as="a" href="/">{"NavMenuItem3"}</NavMenuItem>
  </>
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain: Story = {
  args: {},
  render: (props) => (
    <MinolithStatic>
      <Nav {...props}>
        <NavAccordion isSmallOrLess>
          <NavBrand>
            <NavBrandLeft>
              <Hamburger />
            </NavBrandLeft>
            <NavBrandCenter>{"Center"}</NavBrandCenter>
            <NavBrandRight></NavBrandRight>
          </NavBrand>
          <NavMenu isActive={true}>{navMenuItems}</NavMenu>
        </NavAccordion>
        <NavStatic isMediumOrMore>
          <NavBrand>
            <NavBrandLeft>{"NavBrandLeft"}</NavBrandLeft>
            <NavBrandCenter>{"NavBrandCenter"}</NavBrandCenter>
            <NavBrandRight>{"NavBrandRight"}</NavBrandRight>
          </NavBrand>
          <NavMenu >{navMenuItems}</NavMenu>
        </NavStatic>
      </Nav>
    </MinolithStatic>
  ),
};
