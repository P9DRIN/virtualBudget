import styled from 'styled-components'

export const Container = styled.header`

    height: 15vh;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    

`

export const TextContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;

& svg{
        color: ${props => props.theme['yellow']};
        transform: rotate(0.1turn);
    }

    & span{
        font-family: 'Roboto', sans-serif;
        font-weight: 200;
        font-size: 2.5rem;
        text-align: center;
        display: flex;
        border-right: 1px solid ${props => props.theme['yellow']};
        padding-right: 1rem;
        flex-direction: column;
        
    }
    & p{
        font-size: 22px !important;
        font-weight: 700;
        
        
    }
`
