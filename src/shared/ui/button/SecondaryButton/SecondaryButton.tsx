import { ReactElement, ReactNode } from 'react'

interface SecondaryButtonProps {
  label: string | ReactNode
}

export const SecondaryButton = (props: SecondaryButtonProps) => {
  const { label } = props
  return (
    <button className={'bg-black rounded-md p-3 text-white'}>{label}</button>
  )
}
