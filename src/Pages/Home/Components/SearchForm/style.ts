import styled from 'styled-components'


export const SearchContainer = styled.form`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;


    & input{
        width: 100%;
        padding: .8rem;
        background: ${props => props.theme['base-input']};
        border: 1px solid ${props => props.theme['base-border']};
        color: ${props => props.theme['white-100']};
        
    
        &::placeholder{
            color: ${props => props.theme['white-100']};
            opacity: 0.7;
        }
        &:hover{
            border: 1px solid ${props => props.theme['blue']};
            opacity: 0.7;

        }
    }


    & button{
        margin-left: 1rem;
        
        padding: 1.5rem 2rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        background: transparent;
        border: 1px solid ${props => props.theme['blue']};
        color: ${props => props.theme['white-100']};
        border-radius: 6px;
       
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }

        &:disabled{
            opacity: 0.3;
            cursor: not-allowed;
        }
    }


`
export const NewProjectButton = styled.button`

padding: 1rem 2rem !important;

background: transparent;
border: 1px solid ${props => props.theme['base-label']};
border-radius: 6px;
color: white;
`