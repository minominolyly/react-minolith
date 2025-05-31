import type { Meta, StoryObj } from "@storybook/react";

import Minolith from "./Minolith";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Column,
  Columns,
  Container,
  Dialogue,
  DialogueAvatar,
  DialogueAvatarContainer,
  DialogueContentContainer,
  DialogueMessage,
  DialogueMessageInner,
  DialogueName,
  Div,
  Footer,
  Gingham,
  Hamburger,
  Header,
  Main,
  Message,
  MessageBody,
  MessageHeader,
  MinolithCssVariable,
  Nav,
  NavAccordion,
  NavBrand,
  NavBrandCenter,
  NavBrandLeft,
  NavBrandRight,
  NavMenu,
  NavMenuItem,
  NavStatic,
  Paragraph,
  Ruby,
  Stripe,
} from "../../react-minolith";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Base/Minolith",
  component: Minolith,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Minolith>;

export default meta;
type Story = StoryObj<typeof meta>;

const minolithCssVariable: MinolithCssVariable = {
  color: {
    gray: {
      5: {
        chroma: 0,
        hue: 0,
        lightness: 5,
      },
      95: {
        chroma: 0,
        hue: 0,
        lightness: 95,
      },
    }
  }
};

const navMenuItems = (
  <>
    <NavMenuItem as="a" href="/">
      {"NavMenuItem1"}
    </NavMenuItem>
    <NavMenuItem as="a" href="/">
      {"NavMenuItem2"}
    </NavMenuItem>
    <NavMenuItem as="a" href="/">
      {"NavMenuItem3"}
    </NavMenuItem>
  </>
);

const elem = (
  <>
    <Header isSticky={true}>
      <Nav>
        <NavAccordion isSmallOrLess>
          <NavBrand>
            <NavBrandLeft>
              <Hamburger />
            </NavBrandLeft>
            <NavBrandCenter>{"react-minolith"}</NavBrandCenter>
            <NavBrandRight></NavBrandRight>
          </NavBrand>
          <NavMenu isActive={true}>{navMenuItems}</NavMenu>
        </NavAccordion>
        <NavStatic isMediumOrMore>
          <NavBrand>
            <NavBrandLeft>
              <Div spacing={{ padding: 1 }}>{"react-minolith"}</Div>
            </NavBrandLeft>
            <NavBrandCenter></NavBrandCenter>
            <NavBrandRight></NavBrandRight>
          </NavBrand>
          <NavMenu>{navMenuItems}</NavMenu>
        </NavStatic>
      </Nav>
    </Header>
    <Main>
      <Container>
        <Div spacing={{ padding: 1 }}>
          <Accordion>
            <AccordionSummary>
              <Ruby rubyText="えもーしょん">{"Emotion"}</Ruby>
            </AccordionSummary>
            <AccordionDetails as={Gingham}>
              <Paragraph
                fore={{ color: { default: { name: "red", lightness: 80 } } }}
                back={{ color: { default: { name: "blue", lightness: 20 } } }}
                highlighter={{ color: { default: { name: "yellow", lightness: 80 } } }}
                css={{ fontSize: "1.5rem" }}
              >
                {"It uses emotion css prop to style components"}
              </Paragraph>
            </AccordionDetails>
          </Accordion>
        </Div>
        <Div spacing={{ padding: 1 }}>
          <Accordion>
            <AccordionSummary>
              <Ruby rubyText="バッジ">{"Badge"}</Ruby>
            </AccordionSummary>
            <AccordionDetails as={Gingham} degree={45}>
              <Div spacing={{ padding: 1 }}>
                <Columns>
                  <Column>
                    <Badge>{"Badge"}</Badge>
                  </Column>
                  <Column>
                    <Badge colorName="red">{"Badge"}</Badge>
                  </Column>
                  <Column>
                    <Badge colorName="orange">{"Badge"}</Badge>
                  </Column>
                  <Column>
                    <Badge colorName="yellow">{"Badge"}</Badge>
                  </Column>
                  <Column>
                    <Badge colorName="green">{"Badge"}</Badge>
                  </Column>
                  <Column>
                    <Badge colorName="cyan">{"Badge"}</Badge>
                  </Column>
                  <Column>
                    <Badge colorName="blue">{"Badge"}</Badge>
                  </Column>
                  <Column>
                    <Badge colorName="violet">{"Badge"}</Badge>
                  </Column>
                  <Column>
                    <Badge colorName="magenta">{"Badge"}</Badge>
                  </Column>
                </Columns>
              </Div>
            </AccordionDetails>
          </Accordion>
        </Div>
        <Div spacing={{ padding: 1 }}>
          <Accordion>
            <AccordionSummary>
              <Ruby rubyText="ボタン">{"Button"}</Ruby>
            </AccordionSummary>
            <AccordionDetails>
              <Div spacing={{ padding: 1 }}>
                <Columns>
                  <Column>
                    <Button>{"Button"}</Button>
                  </Column>
                  <Column>
                    <Button colorName="red">{"Button"}</Button>
                  </Column>
                  <Column>
                    <Button colorName="orange">{"Button"}</Button>
                  </Column>
                  <Column>
                    <Button colorName="yellow">{"Button"}</Button>
                  </Column>
                  <Column>
                    <Button colorName="green">{"Badge"}</Button>
                  </Column>
                  <Column>
                    <Button colorName="cyan">{"Button"}</Button>
                  </Column>
                  <Column>
                    <Button colorName="blue">{"Button"}</Button>
                  </Column>
                  <Column>
                    <Button colorName="violet">{"Button"}</Button>
                  </Column>
                  <Column>
                    <Button colorName="magenta">{"Button"}</Button>
                  </Column>
                </Columns>
              </Div>
            </AccordionDetails>
          </Accordion>
        </Div>
        <Div spacing={{ padding: 1 }}>
          <Accordion>
            <AccordionSummary>
              <Ruby rubyText="カード">{"Card"}</Ruby>
            </AccordionSummary>
            <AccordionDetails>
              <Div spacing={{ padding: 1 }}>
                <Card>
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Card colorName="red">
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Card colorName="orange">
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Card colorName="yellow">
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Card colorName="green">
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Card colorName="cyan">
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Card colorName="blue">
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Card colorName="violet">
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Card colorName="magenta">
                  <CardHeader>{"CardHeader"}</CardHeader>
                  <CardBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </CardBody>
                  <CardFooter>{"CardFooter"}</CardFooter>
                </Card>
              </Div>
            </AccordionDetails>
          </Accordion>
        </Div>
        <Div spacing={{ padding: 1 }}>
          <Accordion>
            <AccordionSummary>
              <Ruby rubyText="せりふ">{"Dialogue"}</Ruby>
            </AccordionSummary>
            <AccordionDetails>
              <Div spacing={{ padding: 1 }}>
                <Dialogue>
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Dialogue colorName="red" isAvatarCircle={true}>
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Dialogue colorName="orange">
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Dialogue colorName="yellow">
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Dialogue colorName="green">
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Dialogue colorName="cyan">
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Dialogue colorName="blue">
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Dialogue colorName="violet">
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Dialogue colorName="magenta">
                  <DialogueAvatarContainer>
                    <DialogueAvatar
                      src="https://minominolyly.github.io/minolith/images/avatar.png"
                      alt="avatar"
                    />
                  </DialogueAvatarContainer>
                  <DialogueContentContainer>
                    <DialogueName>{"DialogueName"}</DialogueName>
                    <DialogueMessage>
                      <DialogueMessageInner>
                        {
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        }
                      </DialogueMessageInner>
                    </DialogueMessage>
                  </DialogueContentContainer>
                </Dialogue>
              </Div>
            </AccordionDetails>
          </Accordion>
        </Div>
        <Div spacing={{ padding: 1 }}>
          <Accordion>
            <AccordionSummary>
              <Ruby rubyText="メッセージ">{"Message"}</Ruby>
            </AccordionSummary>
            <AccordionDetails>
              <Div spacing={{ padding: 1 }}>
                <Message>
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Message colorName="red">
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Message colorName="orange">
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Message colorName="yellow">
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Message colorName="green">
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Message colorName="cyan">
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Message colorName="blue">
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Message colorName="violet">
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Message colorName="magenta">
                  <MessageHeader>{"Message"}</MessageHeader>
                  <MessageBody>
                    {
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  </MessageBody>
                </Message>
              </Div>
            </AccordionDetails>
          </Accordion>
        </Div>
        <Div spacing={{ padding: 1 }}>
          <Accordion>
            <AccordionSummary>
              <Ruby rubyText="ギンガム">{"Gingham"}</Ruby>
            </AccordionSummary>
            <AccordionDetails>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="gray" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="red" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="orange" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="yellow" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="green" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="cyan" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="blue" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="violet" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Gingham colorName="magenta" sizing={{ aspectRatio: "16:9" }}>
                  {"Gingham"}
                </Gingham>
              </Div>
            </AccordionDetails>
          </Accordion>
        </Div>
        <Div spacing={{ padding: 1 }}>
          <Accordion>
            <AccordionSummary>
              <Ruby rubyText="ストライプ">{"Stripe"}</Ruby>
            </AccordionSummary>
            <AccordionDetails>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="gray" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="red" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="orange" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="yellow" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="green" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="cyan" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="blue" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="violet" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
              <Div spacing={{ padding: 1 }}>
                <Stripe colorName="magenta" sizing={{ aspectRatio: "16:9" }}>
                  {"Stripe"}
                </Stripe>
              </Div>
            </AccordionDetails>
          </Accordion>
        </Div>
      </Container>
    </Main>
    <Footer>
      <Container>
        <Div spacing={{ padding: 1 }}>{"© minominolyly"}</Div>
      </Container>
    </Footer>
  </>
);

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LightTheme: Story = {
  args: {
    colorScheme: "light",
  },
  render: (props) => (
    <Minolith as={Gingham} cssVariableSetting={minolithCssVariable} {...props}>
      {elem}
    </Minolith>
  ),
};
export const DarkTheme: Story = {
  args: {
    colorScheme: "dark",
  },
  render: (props) => (
    <Minolith as={Gingham} cssVariableSetting={minolithCssVariable} {...props}>
      {elem}
    </Minolith>
  ),
};
