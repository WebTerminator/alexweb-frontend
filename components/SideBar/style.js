import styled from 'styled-components'
import { mediaQ } from '../Style'

export const Wrapper = styled.aside`
    background-color: black;

    @media ${mediaQ.maxMedium} {
        left: ${p => p.isOpen ? `0` : `-100%`};
        position: fixed;
        width: 100%;
        transition: all .5s linear;
        top: 100px;
        height: 100%;
        padding: 0 20px 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    @media ${mediaQ.medium} {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        flex: 1.5;
    
        padding: 20px;
    }
`

export const BioText = styled.p`
    {
        color: #fff;
        font-size: 1rem;
        line-height: 1.4rem;
    }
`

export const BioWrapper = styled.div``

export const Copyright = styled.p`
    color: #fff;
    font-size: .8rem;
`