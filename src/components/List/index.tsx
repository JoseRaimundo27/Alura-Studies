
import style from "./List.module.scss"
import Item from "./Item";
import { tarefaProps } from "../../types/tarefaProps";

interface props {
    listaTarefas: tarefaProps[],
    selecionaTarefa: (tarefaSelecionada: tarefaProps) => void
}

function Lista({listaTarefas, selecionaTarefa} : props) {
    return (
        <aside className={style.listaTarefas}>
            <h2 >Estudos do dia</h2>
            <ul>
                {listaTarefas.map((tarefa, index) => (
                    <Item key={index}
                        selecionaTarefa = {selecionaTarefa}
                        
                        {...tarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;