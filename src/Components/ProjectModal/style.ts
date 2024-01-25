import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'


export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);

  
  
`

export const Content = styled(Dialog.Content)`

  @media(max-width: 425px){
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & input{
      width: 20rem;
    }
    
}

  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};
  border: 1px solid ${(props) => props.theme['black']};

  position: fixed;
  top: 50%;
  left: 50%;

  

  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme['base-label']};
      color: ${(props) => props.theme['white-100']};
      padding: 1rem;


      &::placeholder {
        color: ${(props) => props.theme['white-100']};
      }
    }
    button[type='submit'] {
      height: 58px;
      border: 0;
      background: ${(props) => props.theme['blue']};
      color: ${(props) => props.theme['white-100']};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;
      transition: background 0.2s;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
      }
    }
  }
`
export const CloseButton = styled(Dialog.Close)`

  @media(max-width:425px){
    top: 1.5rem;
    right: 4rem;
  }

  position: absolute;
  background: transparent;
  color: white;
  border: 0;

  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;

  cursor: pointer;

  color: ${(props) => props.theme['gray-300']};
`
