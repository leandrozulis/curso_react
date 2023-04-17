import { useState } from 'react'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import './Formulario.css';

const Formulario = (props) => {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradoresCadastrado({
      nome, cargo, imagem, time
    })
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" valor={nome} aoAlterado={nome => setNome(nome)}/>
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor={cargo} aoAlterado={cargo => setCargo(cargo)}/>
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" valor={imagem} aoAlterado={imagem => setImagem(imagem)}/>
        <ListaSuspensa obrigatorio={true} label="Time" itens={props.times} valor={time} aoAlterado={time => setTime(time)}/>
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  )

}

export default Formulario