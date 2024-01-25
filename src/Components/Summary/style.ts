import styled, { css } from 'styled-components'

export const Container = styled.div`
  
  @media(max-width:425px){
    display: flex;
    justify-content: center;
  }
  @media(min-width: 426px){
    display: flex;
    justify-content: center;
  }
    
`
export const CardContainer = styled.div`
   @media(max-width: 425px){
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
    gap: 1rem;    

    margin-bottom: 1rem;
   }

   @media(min-width: 426px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
   }

`

interface CardProps { 
    $variant?: 'green' | 'red' 
}

export const Card = styled.div<CardProps>`
        

        font-size: 1.9rem;
        background: ${props => props.theme['base-project']};
        border-radius: 6px;

        @media(max-width: 425px){
            padding: 1rem;
            width: 15rem;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            flex-direction: column;

        }
        @media(min-width: 426px) {
          padding: 1rem;
          width: 8rem;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          flex-direction: column;
          font-size: 1.2rem;
  }
  @media(min-width: 768px) {
          padding: 1rem;
          width: 15rem;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          flex-direction: column;
          font-size: 1.9rem;
  }
        @media(min-width:1024px){
          padding: 1rem;
          width: 20rem;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          flex-direction: column;
        }
        @media(min-width:1440px){
          padding: 1rem;
          width: 25rem;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          flex-direction: column;
        }
        
        & p{
            display: flex;
            align-items: center;
            gap: .2rem;
            
        }
        & svg{
            color: ${props => props.theme['white-100']};
        }

        
        ${(props) =>
        props.$variant === 'green' &&
        css`
        background: ${props.theme['green']};
    `}
        ${(props) =>
        props.$variant === 'red' &&
        css`
      background: ${props.theme['red']};
    `}
  
`

