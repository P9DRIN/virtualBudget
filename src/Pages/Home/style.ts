import styled from 'styled-components'



export const Container = styled.div`
  width: 100%;
  max-width: 103rem;
  margin: 2rem auto 0;
`

export const TableContainer = styled.div`
  margin-top: 1.5rem;
  
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

width: 100%;
margin-top: 1.5rem;

display: flex;
flex-direction: column;

`

export const BudgetWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
min-width: 1000px;
gap: 10rem;
padding: 1.5rem 2rem;

border: 1px solid ${props => props.theme['base-label']};


&:first-child{
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}
&:last-child{
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

& .budgetName{
  width: 65%;
}

& div{
  width: 25%;
}
`



