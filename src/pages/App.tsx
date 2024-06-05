import React, { useEffect, useState } from 'react';
import Formulario from '../components/Form';
import Lista from "../components/List"
import style from "./App.module.scss"
import Cronometro from '../components/Cronometro';
import { tarefaProps } from '../types/tarefaProps';


function App() {
  const [tarefas, setTarefas] = useState<tarefaProps[]>([]);
  const [selecionado, setSelecionado] = useState<tarefaProps>()

  function selecionaTarefa(tarefaSelecionada: tarefaProps): void {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

    function finalizarTarefa() {
      if (selecionado) {
        setSelecionado(undefined)
        setTarefas(tarefasAnteriores =>
          tarefasAnteriores.map(
            tarefa => {
              if (tarefa.id == selecionado.id) {
                return ({
                  ...tarefa,
                  selecionado: false,
                  completado: true
                })
              }
              return tarefa
            }
          ))
      }
    }
    return (
      <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas} />
        <Lista
          listaTarefas={tarefas}
          selecionaTarefa={selecionaTarefa}
        />
        <Cronometro
          selecionado={selecionado}
          finalizarTarefa={finalizarTarefa} />
      </div>
    );
  }



  export default App;
