import { Layers } from "./components/1-layers-pattern/start";
import { Pad } from "./components/7-pad-pattern/start";
import NavBar from "./components/final-project/NavBar";
import { Center } from "./components/8-center-pattern/start";
import { Split } from "./components/2-split-pattern/start";
import { SideBar } from "./components/final-project/SideBar";
import styled from "styled-components";
import "./index.css";
import { Form } from "./components/final-project/form";
import { InlineBundle } from "./components/5-inline-bundle-pattern/start";

const ContentContainer = styled(Pad).attrs(() => ({
  padding: "xl",
}))`
  background-image: linear-gradient(
    to bottom,
    #0f1623 14rem,
    rgb(242, 242, 242) 14rem
  );
`;
const StyledSplit = styled(Split).attrs(() => ({
  gutter: "none",
  fraction: "1/4",
}))`
  background: white;
  border-radius: 0.5rem;
`;
const App = () => {
  return (
    <>
      <NavBar />
      <ContentContainer>
        <Center as={Layers} maxWidth="70rem" gutter="xl">
          <h1 style={{ color: "white" }}>Account Settings</h1>
          <StyledSplit>
            <SideBar />
            <Form />
          </StyledSplit>
        </Center>
      </ContentContainer>
    </>
  );
};

export default App;
