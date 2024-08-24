import { Layers } from "./components/1-layers-pattern/start";
import { Pad } from "./components/7-pad-pattern/start";
import NavBar from "./components/final-project/NavBar";
import { Center } from "./components/8-center-pattern/start";
import { Split } from "./components/2-split-pattern/start";
import { SideBar } from "./components/final-project/SideBar";
import styled from "styled-components";
import './index.css'
import { Form } from "./components/final-project/form";
import { InlineBundle } from "./components/5-inline-bundle-pattern/start";
const DetailsContainer = styled.div`
    background:white;
    color:black;
    border-radius:8px;

`

const App = () => {
  return (
    <>
        <Layers>
          <NavBar />
          <Pad padding={["none","xl"]}>
            <h1>Account Settings</h1>
          
            <DetailsContainer as={Pad} padding="l">
              <Split fraction="1/3">
                <SideBar/>
                <Form/>
              </Split>
            </DetailsContainer>
            </Pad>
        </Layers>
    </>
  );
};

export default App;
