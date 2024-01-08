import styled, { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    
`

interface CardProps { 
    $variant?: 'green' | 'red' 
}

export const Card = styled.div<CardProps>`
        width: 33rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        align-items: flex-end;
        padding: 1.5rem;
        font-size: 1.9rem;
        background: ${props => props.theme['base-project']};
        border-radius: 6px;

        & p{
            display: flex;
            align-items: center;
            gap: 0.5rem;
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