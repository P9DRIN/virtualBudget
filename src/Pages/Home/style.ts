import styled from 'styled-components'

export const Container = styled.div`
 
@media(max-width:425px){
    display: flex;
    flex-direction: column;
}

@media(min-width: 426px) {
    display: flex;
    flex-direction: column; 

  }



`

export const Wrapper = styled.div`

`

export const TableContainer = styled.div`

@media(min-width: 426px) {
  display: flex;
  flex-direction: column; 
  padding: 1rem;
  }

  @media(max-width: 425px){
    display: flex;
    flex-direction: column;
  }

  & h1{
    color: ${props => props.theme['white-100']};
    background: ${props => props.theme['base-user']};
    cursor: pointer;
    border-radius: 6px;
    padding: 1rem 2rem;
    margin-top: 1rem;
  }
`
export const ProjectContainer = styled.div`

  @media(max-width:425px){
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: .2rem;

  }
  @media(min-width: 426px) {
  display: flex;
  flex-direction: column;
  gap: 1rem; 
  padding: .5rem;
  justify-content: center;

  }

`

export const BudgetWrapper = styled.div`

  @media(max-width:425px){
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
    
    padding: 1rem;


    &:first-child{
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
 
}
&:last-child{
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  margin-bottom: 1rem;
}

  }
  @media(min-width: 426px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;

    &:first-child{
  border-top-right-radius: 0.4rem;
  border-top-left-radius: 0.4rem;
 
}
&:last-child{
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
 
}
  }


border: 1px solid ${props => props.theme['base-label']};




& .budgetName{
  
}


`



