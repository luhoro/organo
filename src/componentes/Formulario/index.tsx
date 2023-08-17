import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'
import { ITime } from '../../shared/interfaces/ITime'
import { IColaborador } from '../../shared/interfaces/IColaborador'

interface FormularioProps {
  aoCadastrar: (evento: any) => void
  times: string[]
  cadastrarTime: (evento: any) => void
}

const Formulario = ({ aoCadastrar, times, cadastrarTime }: FormularioProps) => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('')

  const aoSubmeter = (evento: any) => {
    evento.preventDefault()

    aoCadastrar({
      nome,
      cargo,
      imagem,
      time,
    })
  }

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome "
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo "
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          label="Imagem"
          placeholder="Informe o endereço da imagem "
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Times"
          items={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>

      
      <form className="formulario" onSubmit={(evento) => {
        evento.preventDefault()
        cadastrarTime({ nome: nomeTime, cor: corTime})
      }}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          obrigatorio={true}
          tipo='color'
          label="Cor"
          placeholder="Digite a cor do time (ex: #000000)"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao>Criar um novo time</Botao>
      </form>
    </section>
  )
}

export default Formulario
