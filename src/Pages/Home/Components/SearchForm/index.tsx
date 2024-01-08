import { MagnifyingGlass, CirclesThreePlus } from "phosphor-react";
import { SearchContainer, NewProjectButton } from "./style";
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ProjectContext } from "../../../../context/ProjectContext";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from '@radix-ui/react-dialog'
import { ProjectModal } from '../../../../Components/ProjectModal'
import { BudgetModal } from "../../../../Components/BudgetModal";

const searchFormSchema = z.object({
    query: z.string(),
})
type SearchFormInputs = z.infer<typeof searchFormSchema>


export function SearchForm(){

    const { fetchProjects } = useContext(ProjectContext)

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchProjects(data: SearchFormInputs){
        await fetchProjects(data.query)
    }

    return(
        <>
            <SearchContainer onSubmit={handleSubmit(handleSearchProjects)}>
                <input type="text" placeholder="Procure por algo..." {...register('query')}/>
                <button type='submit' disabled={isSubmitting}>
                    Buscar
                    <MagnifyingGlass size={22}/>
                </button>

                <Dialog.Root>
                <Dialog.Trigger asChild>
                    <NewProjectButton>Novo Orçamento
                    <CirclesThreePlus size={22}/>
                    </NewProjectButton>
                </Dialog.Trigger>
                <BudgetModal/>
            </Dialog.Root>

                <Dialog.Root>
                <Dialog.Trigger asChild>
                    <NewProjectButton>Novo Projeto
                    <CirclesThreePlus size={22}/>
                    </NewProjectButton>
                </Dialog.Trigger>
                <ProjectModal/>
            </Dialog.Root>

            


            </SearchContainer>
        </>
    )
}