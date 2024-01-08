import { ArrowFatLinesDown, ArrowFatLinesUp, Wallet } from "phosphor-react";
import { Container, Card } from "./style";
import { useSum } from "../../hooks/useSum";

export function Summary(){

    const sum  = useSum()

    return(
        <>
            <Container>
                    <Card $variant='green'>
                        <p> Entradas <ArrowFatLinesUp size={30}/> </p>
                                <span>{sum.initialValue}</span>
                     </Card>

                    <Card $variant="red">
                        <p> Gastos <ArrowFatLinesDown size={30}/> </p>
                    <span> {sum.outcome} </span>
                    </Card>

                    <Card>
                        <p>Total <Wallet size={30} /></p>
                    <span> {sum.total} </span>
                    </Card>
            </Container>
        </>
    )

}