import styled from 'styled-components'
import { InlineBundle } from '../5-inline-bundle-pattern//start'
import { Inline } from '../6-inline-pattern/start'
import { Pad } from '../7-pad-pattern/start';
import { Logo } from './Logo';


const NavContainer = styled(Inline).attrs(() => ({
    justify: 'start',
    stretch: 1,
}))`

 background:#0f1623;
 color:white;
 border-block-end: 1px solid #303030;


`;

const SearchBar = styled(Pad).attrs(()=>({

        padding:["m","l"],
        as:"input",

}))`
    border-radius:0.25rem;
    background:#1f2937;
    border:none;
    color:white;

`;

const NavBar = () => {
    return (<NavContainer as={Pad} padding={["l","xl"]} align='center' stretch='1' >
        <InlineBundle as={Pad} justify='start' align='center'>
            <div>
                <Logo size="2.5rem"/>
            </div>
        </InlineBundle>
        <InlineBundle justify='start' align='center'>
            <span>Overview</span>
            <span>Position</span>
            <span>Candidates</span>
            <span>Employer</span>
        </InlineBundle>

        <InlineBundle justify='start' align='center'>
            <SearchBar placeholder='search'></SearchBar>
            <span><Logo size='1.5rem'/></span>
            <span><Logo size='2rem' circle={true}/></span>
        </InlineBundle>
    </NavContainer>)

}
export default NavBar;