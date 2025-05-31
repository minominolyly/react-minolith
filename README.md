# react-minolith

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/minominolyly/react-minolith/blob/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/react-minolith)](https://www.npmjs.com/package/react-minolith)
[![npm downloads](https://img.shields.io/npm/dm/react-minolith)](https://www.npmjs.com/package/react-minolith)

[![NPM](https://nodei.co/npm/react-minolith.png)](https://nodei.co/npm/react-minolith/)

## Overview

react-minolith is an open-source react wrapper for [minolith](https://github.com/minominolyly/minolith).

## ⚠️Heed

react-minolith is still alpha.

## Installation

```shell
npm install react-minolith @emotion/react lodash
```

## Getting Started

After installation, you can import any react-minolith component and start playing around.

For example…

```tsx
import {
  Button,
  ColorScheme,
  Container,
  Footer,
  Hamburger,
  Header,
  Heading,
  Main,
  MinolithStatic,
  Nav,
  NavAccordion,
  NavBrand,
  NavBrandCenter,
  NavBrandLeft,
  NavBrandRight,
  NavMenu,
  NavMenuItem,
  Section,
} from "react-minolith";
import { useState } from "react";

export default function HelloWorldPage() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <MinolithStatic colorScheme={colorScheme}>
      <Header>
        <Nav>
          <NavAccordion>
            <NavBrand>
              <NavBrandLeft>
                <Hamburger
                  isActive={isActive}
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbar-menu"
                  onClick={() => {
                    setIsActive(!isActive);
                  }}
                />
              </NavBrandLeft>
              <NavBrandCenter>{"Hello world"}</NavBrandCenter>
              <NavBrandRight>
                <Button
                  spacing={{ margin: 1 }}
                  colorName={colorScheme === "light" ? "orange" : "blue"}
                  onClick={() =>
                    setColorScheme(colorScheme === "light" ? "dark" : "light")
                  }
                >
                  {colorScheme}
                </Button>
              </NavBrandRight>
            </NavBrand>
            <NavMenu isActive={isActive}>
              <NavMenuItem as="a" href="/about/">
                {"About"}
              </NavMenuItem>
              <NavMenuItem as="a" href="/products/">
                {"Products"}
              </NavMenuItem>
              <NavMenuItem as="a" href="/contact/">
                {"Contact"}
              </NavMenuItem>
            </NavMenu>
          </NavAccordion>
        </Nav>
      </Header>
      <Main>
        <Container>
          <Section spacing={{ padding: { y: 1 } }}>
            <Heading level={1}>{"Hello world"}</Heading>
          </Section>
        </Container>
      </Main>
      <Footer>
        <Container>{"©anonymous"}</Container>
      </Footer>
    </MinolithStatic>
  );
}
```

check out [Storybook](https://minominolyly.github.io/react-minolith/) for more details.

## License

This project is licensed under the terms of the [MIT license](https://github.com/minominolyly/react-minolith/blob/main/LICENSE).
