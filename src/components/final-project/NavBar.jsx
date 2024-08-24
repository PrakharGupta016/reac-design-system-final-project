import styled from 'styled-components'
import { InlineBundle } from '../5-inline-bundle-pattern//start'
import { Inline } from '../6-inline-pattern/start'
import { Pad } from '../7-pad-pattern/start';


const NavContainer = styled(Inline).attrs(() => ({
    justify: 'start',
    stretch: 1,
}))`
`;

const NavBar = () => {
    return (<NavContainer as={Pad} padding={["l","l"]} justify='start' align='center' stretch='1' >
        <InlineBundle as={Pad} justify='start' align='center'>
            <span>
            🔵
            </span>
        </InlineBundle>
        <InlineBundle justify='start' align='center'>
            <span>Overview</span>
            <span>Position</span>
            <span>Candidates</span>
            <span>Employer</span>
        </InlineBundle>

        <InlineBundle justify='start' align='center'>
            <input placeholder='search'></input>
            <span>🟦</span>
            <span>🔵</span>
        </InlineBundle>
    </NavContainer>)

}
export default NavBar;