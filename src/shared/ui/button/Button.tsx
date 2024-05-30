import { JSXElementConstructor, ReactElement, ReactNode } from 'react'
import { DangerButton } from './DangerButton/DangerButton'
import { PrimaryButton } from './PrimaryButton/PrimaryButton'
import { SecondaryButton } from './SecondaryButton/SecondaryButton'

interface ButtonProps {
  type: string
  label: ReactNode
  onClick?: () => void
}

interface Props extends ButtonProps {
  type: 'primary' | 'secondary' | 'danger'
}

const Button = (props: Props) => {
  const { label, type, onClick } = props
  switch (type) {
    case 'primary':
      return <PrimaryButton label={label} />
    case 'secondary':
      return <SecondaryButton label={label} />
    case 'danger':
      return <DangerButton label={label} />
    default:
      return null
  }
}

export default Button
