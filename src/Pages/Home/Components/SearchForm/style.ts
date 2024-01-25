import styled from 'styled-components'


export const SearchContainer = styled.form`

@media(min-width:768px){
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    & input{
        width: 30%;
        padding: .5rem;
        border-radius: 6px;
    }

    & button{
        width: 20%;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .3rem;
        padding: 1.5rem;
        
    }
}

@media(min-width: 426px) and (max-width:767px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    & input{
        padding: .5rem;
        border-radius: 6px;
    }

    & button{
        width: 20rem;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .3rem;
        padding: 1.5rem;
        
    }
}

    @media(max-width:425px){
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  
    align-items: center;
    
    
    & input{
        width: 90%;
        padding: .5rem;
        border-radius: 6px;
    }

    & button{
        width: 80%;
        height: 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
}
        
        & input{
            
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

background: transparent;
border: 1px solid ${props => props.theme['base-label']};
border-radius: 6px;
color: white;

`
