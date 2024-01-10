import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

export function useSum(){
    const { projects } = useContext(ProjectContext); 

    const sum = projects.reduce(
        (acc, project) => {
            acc.income += project.inicialInvestiment
            
            const somaPrices = projects.reduce((accProjeto, currProjeto) => {
                const somaBudgets = currProjeto.budgets.reduce((accBudget, currBudget) => {
                    return accBudget + currBudget.price;
                }, 0);

                return accProjeto + somaBudgets;

            }, 0);
            
            acc.initialValue += project.inicialInvestiment

            acc.outcome = somaPrices
            acc.total = acc.income - acc.outcome 
        
            return acc
        },
        {
            income: 0,
            outcome: 0,
            total: 0,
            initialValue: 0,
        }
    )
    return sum
}
