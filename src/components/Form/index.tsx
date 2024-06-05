import React, { FormEvent } from "react";
import Botao from "../Button"
import style from "./Form.module.scss"
import { tarefaProps } from "../../types/tarefaProps";
import {v4 as uuidv4} from "uuid";

class Formulario extends React.Component<{setTarefas : React.Dispatch<React.SetStateAction<tarefaProps[]>> }>{

    state = {
        tarefa: "",
        tempo: "00:00"
    }

    handleSubmit (event:FormEvent) {
        event.preventDefault();
        this.props.setTarefas( tarefasAntigas => [...tarefasAntigas, {...this.state, selecionado: false, completado: false, id: uuidv4()}])
        this.setState({
            tarefa: "",
            tempo: "00:00"
        })
    }
    render() {
        return(
            <form onSubmit={event => this.handleSubmit(event)} className={style.novaTarefa} >
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">Adicione um novo estudo</label>   
                    <input
                    value={this.state.tarefa} 
                    onChange={ (event) => {
                        this.setState({...this.state, tarefa: event.target.value})
                    }} 
                    type="text" 
                    name="tarefa" 
                    placeholder="O que você quer estudar?" 
                    required/>          
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="time">Tempo</label>
                    <input 
                    value={this.state.tempo} 
                    onChange={event => this.setState({...this.state, tempo : event.target.value})} 
                    type="time" 
                    step="1" 
                    name="time" 
                    min="00:00:00" 
                    max="01:30:00" 
                    required/>
                </div>
                <Botao 
                    texto="Adicionar"
                    tipo={"submit"}
                />
            </form>
        )
    }
}

export default Formulario;