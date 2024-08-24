import styled from "styled-components"
import { Layers } from "../1-layers-pattern/start"
import { Column, Columns } from "../3-columns-pattern/start"
import { InlineBundle } from "../5-inline-bundle-pattern/start";

export const customLabel = styled.input`
    font-size:10px;
    color:blue;
`;
export const Form = () => {
    return (<>

        <form>
            <Layers gutter='md'>
            <span>
                knn
            </span>

            <Columns columns='6' gutter='s'>
                <Column $span='4'>
                    <Layers>
                        <label >dc</label>
                        <input id='name' placeholder="name" />
                    </Layers>
                </Column>


        
                <Column $span='2'>
                    <Layers>
                        <label htmlFor="name">Image</label>
                        <input id='name' placeholder="name" />
                    </Layers>
                </Column>


                    <Column $span='3'>
                        <Layers>
                            <label htmlFor="name">name</label>
                            <input id='name' placeholder="name" />
                        </Layers>
                    </Column>


                    <Column $span='3'>
                        <Layers>
                            <label htmlFor="name">Image</label>
                            <input id='name' placeholder="name" />
                        </Layers>
                    </Column>


                    <Column $span='3'>
                        <Layers>
                            <label htmlFor="name">name</label>
                            <input id='name' placeholder="name" />
                        </Layers>
                    </Column>


                    <Column $span='3'>
                        <Layers>
                            <label htmlFor="name">Image</label>
                            <input id='name' placeholder="name" />
                        </Layers>
                    </Column>
            </Columns>
            <InlineBundle justify='end'>
                    <button>knv</button>
                    <button>nj</button>
                </InlineBundle>
            </Layers>


        </form>
    </>)
}