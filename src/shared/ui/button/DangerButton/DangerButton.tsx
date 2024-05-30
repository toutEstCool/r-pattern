import { ReactElement, ReactNode } from 'react'

interface DangerButtonProps {
  label: string | ReactNode
}

export const DangerButton = (props: DangerButtonProps) => {
  const { label } = props
  return (
    <button className={'bg-red-500 rounded-md p-3 text-white'}>{label}</button>
  )
}
