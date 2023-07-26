import './Campo.css'

interface CampoProps {
  aoAlterado: (valor: string) => void
  label: string
  placeholder: string
  valor?: string
  obrigatorio?: boolean
  tipo?: 'text' | 'password' | 'date' | 'email' | 'number' | 'color'
}

const Campo = ({ aoAlterado, tipo = 'text', label, placeholder, valor, obrigatorio = false }: CampoProps) => {

  return (
    <div className='campo'>
        <label>{label}</label>
      <input
        type={tipo}
        value={valor}
        onChange={evento => aoAlterado(evento.target.value)}
        required={obrigatorio}
        placeholder={placeholder}
      /> 
    </div>
  )
}

export default Campo