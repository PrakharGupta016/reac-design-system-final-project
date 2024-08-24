import { Layers } from "./components/1-layers-pattern/start";
import { Pad } from "./components/7-pad-pattern/start";
import NavBar from "./components/final-project/NavBar";
import { NavContainer } from "./components/final-project/NavContainer";
import { Center } from "./components/8-center-pattern/start";
import { Split } from "./components/2-split-pattern/start";
import { SideBar } from "./components/final-project/SideBar";
import styled from "styled-components";
import './index.css'
const DetailsContainer = styled.div`
    background:white;
    color:black;
    border-radius:8px;

`

const App = () => {
  return (
    <>
      <NavContainer>
        <Layers>
          <NavBar />
          <Center maxWidth="900px">
            <h1>Account Settings</h1>

            <DetailsContainer as={Pad} padding="l">
              <Split gutter="1/3">
                <SideBar/>
                <div>

                </div>
              </Split>
            </DetailsContainer>
          </Center>
        </Layers>
      </NavContainer>
    </>
  );
};

export default App;
