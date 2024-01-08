import * as Dialog from '@radix-ui/react-dialog'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { CloseButton, Content, Overlay } from './style'
import { X } from 'phosphor-react'
import { ProjectContext } from '../../context/ProjectContext'

const newBudgetFormSchema = z.object({
    projectName: z.string(),
    budgetName: z.string(),
    price: z.number(),
    category: z.string(),
})

type NewBudgetFormInputs = z.infer<typeof newBudgetFormSchema>

export function BudgetModal(){
    
    const { createBudget } = useContext(ProjectContext)

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<NewBudgetFormInputs>({
        resolver: zodResolver(newBudgetFormSchema)
    })

    async function handleCreateNewBudget(data: NewBudgetFormInputs){

        const { projectName, budgetName, price, category } = data

        await createBudget({
            projectName,
            budgetName, 
            price,
            category,
        })
        reset();
    }

    return (
        <Dialog.Portal>
          <Overlay />
          <Content>
            <Dialog.Title>Novo Orçamento</Dialog.Title>
    
            <CloseButton>
              <X size={24} />
            </CloseButton>
    
            <form action="" onSubmit={handleSubmit(handleCreateNewBudget)}>
              <input
                {...register('projectName')}
                type="text"
                placeholder="Nome do projeto"
                required
              />
              <input
                {...register('budgetName')}
                type="text"
                placeholder="Nome do orçamento"
                required
              />
              <input
                {...register('price', { valueAsNumber: true })}
                type="number"
                placeholder="Preço"
                required
              />
              <input
                {...register('category')}
                type="text"
                placeholder="Categoria"
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