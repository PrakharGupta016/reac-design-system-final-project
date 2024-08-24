
import styled from "styled-components"
import { Layers } from "../1-layers-pattern/start"
import { Logo } from "./Logo";
import { Pad } from "../7-pad-pattern/start";
import { InlineBundle } from "../5-inline-bundle-pattern/start";

const SideMenuContainer = styled(Layers).attrs(() => ({
    as: "ul",
    gutter: "s",
}))`
    list-style-type:none;
    padding-left:0;
`;

const CustomInline = styled(InlineBundle).attrs(() => ({
    as: Pad,
    gutter: "s",
    padding: ["m", "l"],
    align: 'center',
}))`
    border-inline-start: 0.25rem solid transparent;
    ${(props) => props.active && `
        border-inline-start-color: #324972;
        background: #1f29371c;
        
        `}



`;

export const SideBar = () => {
    return (<>
        <nav>
            <SideMenuContainer>
                <CustomInline active > <Logo size='1rem' inverse />Profile</CustomInline>
                <CustomInline> <Logo size='1rem' inverse />Settings</CustomInline>
                <CustomInline> <Logo size='1rem' inverse />Authentication</CustomInline>
                <CustomInline> <Logo size='1rem' inverse />Email</CustomInline>
                <CustomInline> <Logo size='1rem' inverse />Plans</CustomInline>
                <CustomInline> <Logo size='1rem' inverse />APIS</CustomInline>
            </SideMenuContainer>
        </nav >


    </>)
}