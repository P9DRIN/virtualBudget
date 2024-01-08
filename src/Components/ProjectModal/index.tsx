import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { CloseButton, Content, Overlay } from './style'
import { X } from 'phosphor-react'
import { ProjectContext } from '../../context/ProjectContext'

const newProjectFormSchema = z.object({
    projectName: z.string(),
    inicialInvestiment: z.number(),
})

type NewProjectFormInputs = z.infer<typeof newProjectFormSchema>

export function ProjectModal(){
    
    const { createProject } = useContext(ProjectContext)

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<NewProjectFormInputs>({
        resolver: zodResolver(newProjectFormSchema),
    })

    async function handleCreateNewProject(data: NewProjectFormInputs){

        const { projectName, inicialInvestiment } = data

        await createProject({
            projectName,
            inicialInvestiment,
        })
        reset()
    }

    return (
        <Dialog.Portal>
          <Overlay />
          <Content>
            <Dialog.Title>Novo Projeto</Dialog.Title>
    
            <CloseButton>
              <X size={24} />
            </CloseButton>
    
            <form action="" onSubmit={handleSubmit(handleCreateNewProject)}>
              <input
                {...register('projectName')}
                type="text"
                placeholder="Descrição"
                required
              />
              <input
                {...register('inicialInvestiment', { valueAsNumber: true })}
                type="number"
                placeholder="Preço"
                required
              />
    
              <button type="submit" disabled={isSubmitting}>
                Cadastrar
              </button>
            </form>
          </Content>
        </Dialog.Portal>
      )
    }