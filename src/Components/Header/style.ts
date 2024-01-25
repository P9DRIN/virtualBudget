import styled from 'styled-components'

export const Container = styled.header`

display: flex;
align-items: center;
justify-content: center;

   @media(max-width: 425px){
    padding: 1rem;
   }
   @media(min-width: 426px){
    padding: 1.5rem; 
    }

`

export const TextContainer = styled.div`
  @media(max-width: 425px){
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .2rem;
   }
   @media(min-width: 426px){
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .4rem;
    }

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
