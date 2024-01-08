import { Header } from "../../Components/Header";
import { SearchForm } from "./Components/SearchForm";
import { Summary } from "../../Components/Summary";
import { Container, TableContainer, ProjectContainer, BudgetWrapper } from "./style";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";


export function Home(){

    const { projects } = useContext(ProjectContext)


    return(
        <>
       <Header/>
        <Summary/>
  
            <Container>
                <SearchForm/>
                
               
                {projects.map((sis) => {
                    return(
                       
                        <TableContainer key={sis.projectName}>
                         <h1>{sis.projectName}</h1>
                         
                        <ProjectContainer>
                        {sis.budgets.map((bud) => {
                            return(
                               
                                <BudgetWrapper key={bud.budgetName}>
                                <div className="budgetName">{bud.budgetName}</div>
                                <div>{bud.category}</div>
                                <div>{priceFormatter.format(bud.price)}</div>
                                <div>{dateFormatter.format(new Date(bud.createdAt))}</div>
                                </BudgetWrapper>
                                
                            )
                        })}
                        </ProjectContainer>
                        </TableContainer>
                       

                    )
                })} 
                
               
               

            </Container>
        
        </>
        
    )
}

