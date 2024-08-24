import styled from "styled-components"
import { Layers } from "../1-layers-pattern/start"
import { Column, Columns } from "../3-columns-pattern/start"
import { InlineBundle } from "../5-inline-bundle-pattern/start";
import { Pad } from "../7-pad-pattern/start";
import { Split } from "../2-split-pattern/start";
import { Logo } from "./Logo";

export const customLabel = styled.input`
    font-size:10px;
    color:blue;
`;
const FormContainer = styled.div`
    border-inline-start: 1px solid lightgray;
    > * + * {
        border-block-start: 1px solid lightgray;
    }
`;
const CustomButton = styled(Pad).attrs(() => ({ as: "button", padding: ['m', 'l'] }))`
    border: ${({ primary }) => primary ? "1px solid transparent" : "1px solid #0f1623"};
    color:${({ primary }) => primary ? "white" : "#0f1623"};
    background:${({ primary }) => primary ? "#0f1623" : "white"};
    border-radius:0.25rem;
        `;
const CustomInput = ({ label, children }) => {
    return (<Layers gutter='s' as='label'>
        {label}
        {children}
    </Layers>)
}

const StyledInput = styled.input`
    border: 1px solide lightgrey;
broder - radius: 0.25px;
color: #3030303;
height: 30px;

`;
export const Form = () => {
    return (<FormContainer>
        <Pad as="section" padding='l'>
            <Layers >
                <Layers as="header">
                    <h2>General Information</h2>
                    <span> basic verification info</span>
                </Layers>
                <div>
                    <Split fraction='auto-end'>
                        <Layers>
                            <CustomInput label={'Username'}>
                                <StyledInput />
                            </CustomInput>
                            <CustomInput label='About'>
                                <textarea />
                                <span> Tell a brief </span>
                            </CustomInput>

                        </Layers>
                        <CustomInput label={'Image'}>
                            <Logo size='4rem' inverse circle />
                        </CustomInput>
                    </Split>
                </div>
                <Columns columns={2} gutter="l">
                    <CustomInput label='First Name'>
                        <StyledInput />
                    </CustomInput>

                    <CustomInput label='Last Name'>
                        <StyledInput />
                    </CustomInput>

                    <CustomInput label='Linkedin'>
                        <StyledInput />
                    </CustomInput>

                    <CustomInput label='Employer'>
                        <StyledInput />
                    </CustomInput>

                </Columns>




            </Layers>

        </Pad>

        <InlineBundle as={Pad} justify='end' padding='l'>
            <CustomButton>Cancel</CustomButton>
            <CustomButton primary>Save</CustomButton>
        </InlineBundle>
    </FormContainer>)
}