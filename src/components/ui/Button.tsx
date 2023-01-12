import { FunctionComponent } from 'react'

interface Props {
  text: string
}

const Button: FunctionComponent<Props> = ({ text }) => {
  return <button>{text}</button>
}

export default Button
