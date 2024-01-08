import { CoinVertical } from 'phosphor-react'
import { Container, TextContainer } from './style'

export function Header(){
    return(
        <Container>
            <TextContainer>
                <span>Virtual<p>BUDGET</p></span>
            <CoinVertical size={64}/>

            </TextContainer>

        </Container>

    )
}