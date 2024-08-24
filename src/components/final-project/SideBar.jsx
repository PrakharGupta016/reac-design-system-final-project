
import styled from "styled-components"
import { Layers } from "../1-layers-pattern/start"

const SideMenuContainer = styled(Layers).attrs(() => ({
    as: "ul",
    gutter: "xs",
}))`
    list-style-none:none;
    padding-left:0;
`;

export const SideBar = () => {
    return (<>
        <nav>
            <SideMenuContainer>
                <li>Profile</li>
                <li>Settings</li>
                <li>Authentication</li>
                <li>Email</li>
                <li>Plans</li>
                <li>APIS</li>
            </SideMenuContainer>
        </nav >


    </>)
}