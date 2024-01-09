import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface budgetProps {
    budgetName: string
    price: number
    category: string
    createdAt: string
}

interface projectsProps {
    id: number
    projectName: string
    inicialInvestiment: number
    budgets: budgetProps[]
}

interface CreateBudgetInput{
    id?: string
    projectName: string
    budgetName: string
    price: number
    category: string
    createdAt?: string
}

interface CreateProjectInput{
    projectName: string
    inicialInvestiment: number
}

interface ProjectsProviderProps {
    children: ReactNode
}

interface ProjectContextType {
    projects: projectsProps[]
    fetchProjects: (query?: string) => Promise<void>
    createProject: (data: CreateProjectInput) => Promise<void>
    createBudget: (data: CreateBudgetInput) => Promise<void>
}

export const ProjectContext = createContext({} as ProjectContextType)

export function ProjectProvider({ children }: ProjectsProviderProps){

    const [projects, setProjects] = useState<projectsProps[]>([])


   async function fetchProjects(query?: string){
    const response = await api.get(`project/${query}` 
    )
    setProjects(response.data.projects)
   }

async function createProject(data: CreateProjectInput){

    const { projectName, inicialInvestiment } = data

    await api.post('project', {
        projectName,
        inicialInvestiment
    })
    fetchProjects();
}

async function createBudget(data: CreateBudgetInput){

    const { projectName, budgetName, price, category } = data

    await api.post(`project/${projectName}/budgets`, { 
        projectName,
        budgetName,
        price,
        category,
        createdAt: new Date().toISOString(),
    })
    fetchProjects()
}

   useEffect(() => {
    fetchProjects()
}, [projects])

    return(
        <ProjectContext.Provider value={{ projects, fetchProjects, createProject, createBudget }}>
        {children}
        </ProjectContext.Provider>

    )

}
