import { useState } from "react"
import Banner from "./componentes/Banner"
import Formulario from "./componentes/Formulario"
import Rodape from "./componentes/Rodape"
import Time from "./componentes/Time"
import { IColaborador } from "./shared/interfaces/IColaborador"
import { ITime } from "./shared/interfaces/ITime"


const App = () => {

  const [ times, setTimes ] = useState([
    {
      id: 1,
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: 2,
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: 3,
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: 4,
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: 5,
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: 6,
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: 7,
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ])

  const [ colaboradores, setColaboradores ] = useState([
    {
      id: 1,
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[ 0 ].nome
    },
    {
      id: 2,
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[ 0 ].nome
    },
    {
      id: 3,
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[ 0 ].nome
    },
    {
      id: 4,
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[ 0 ].nome
    },
    {
      id: 5,
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[ 1 ].nome
    },
    {
      id: 6,
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[ 1 ].nome
    },
    {
      id: 7,
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[ 1 ].nome
    },
    {
      id: 8,
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[ 1 ].nome
    },
    {
      id: 9,
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[ 2 ].nome
    },
    {
      id: 10,
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[ 2 ].nome
    },
    {
      id: 11,
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[ 2 ].nome
    },
    {
      id: 12,
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[ 2 ].nome
    },
    {
      id: 13,
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[ 3 ].nome
    },
    {
      id: 14,
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[ 3 ].nome
    },
    {
      id: 15,
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[ 3 ].nome
    },
    {
      id: 16,
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[ 3 ].nome
    },
    {
      id: 17,
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[ 4 ].nome
    },
    {
      id: 18,
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[ 4 ].nome
    },
    {
      id: 19,
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[ 4 ].nome
    },
    {
      id: 20,
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[ 4 ].nome
    },
    {
      id: 21,
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[ 5 ].nome
    },
    {
      id: 22,
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[ 5 ].nome
    },
    {
      id: 23,
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[ 5 ].nome
    },
    {
      id: 24,
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[ 5 ].nome
    },
  ])

  function deletarColaborador( id: number ) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCor( cor: string , id: number ) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }

  function getRamdomId(): number {
    let min = Math.ceil(8)
    let max = Math.floor(100000000)
    return  Math.floor(Math.random() * (max - min) + min)
  }

  function cadastrarTime(novoTime: any) {
    setTimes([...times, { ...novoTime, id: getRamdomId() }])
    console.log(getRamdomId())
  }

  function resolverFavorito( id: number ) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito
      return colaborador
    }))
  }

  return (
    <div>
      <Banner enderecoImagem="/imagens/banner.png" textoAlternativo="Logo do Organo" />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)}
        aoCadastrar={(colaborador) => setColaboradores([ ...colaboradores, colaborador ])}
      />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) =>
          <Time
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCor}
            key={indice} time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
          />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
