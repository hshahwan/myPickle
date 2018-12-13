import React from "react"

import {
  Heading,
  Container,
  Logo,
  Paragraph,
  TextLink,
  ButtonWrapper,
  Button,
  LandingDiv,
} from "./LandingStyle"

import Navbar from "../../Common/Navbar/Navbar"

const LandingPage = () => (
  <LandingDiv>
    <Navbar />
    <Container>
      <Logo />

      <Heading>My Pickle</Heading>
      <Paragraph>
        My Pickle brings together therapists and those who want their help. Find therapists, read
        articles written by them, and get the support you need.
      </Paragraph>
      <TextLink to="/">Find out more about My Pickle</TextLink>
      <ButtonWrapper>
        <Button to="/">Find Support</Button>
        <Button to="/">Offer Support</Button>
      </ButtonWrapper>
    </Container>
  </LandingDiv>
)

export default LandingPage