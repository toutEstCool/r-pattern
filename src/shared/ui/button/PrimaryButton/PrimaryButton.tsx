import { ReactElement, ReactNode } from 'react'

interface PrimaryButtonProps {
  label: string | ReactNode
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const { label } = props
  return (
    <button className={'bg-slate-400 rounded-md p-3 text-white'}>
      {label}
    </button>
  )
}
