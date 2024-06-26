import Botao from "../Button"
import Relogio  from "./Relogio"
import style from "./Cronometro.module.scss"
import { tarefaProps } from "../../types/tarefaProps"
import { useEffect, useState } from "react"
import { tempoParaSegundos } from "../../utils/time"

interface Props {
    selecionado: tarefaProps | undefined,
    finalizarTarefa: () => void
}
export default function Cronometro ({selecionado, finalizarTarefa} : Props) {

    const [tempo, setTempo] = useState<number>()
    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    }, [selecionado])
    
    function regressiva(contador:number = 0) {
        setTimeout(()=> {
            if(contador > 0) {
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            finalizarTarefa()
        }, 1000)
    }
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um car e inicie o cronômetro</p>
            
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={()=>{regressiva(tempo)}} 
            tipo="submit" 
            texto="Começar"/>
        </div>
    )
}