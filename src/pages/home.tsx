import Button from '@/shared/ui/button/Button'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function HomePage() {
  return (
    <main
      className={`bg-[whitesmoke] h-screen flex justify-center items-center ${inter.className}`}
    >
      <div className={'flex gap-5'}>
        <div className={'w-[500px] bg-white p-3 rounded-md'}>
          <h4 className={'text-center text-2xl'}>Button</h4>
          <span className={'text-[12px]'}>Factory Method</span>
          <div className={'border-t-2 p-4 flex gap-3'}>
            <Button label={'Danger'} type="danger" />
            <Button label={'Primary'} type="primary" />
            <Button label={'Secondary'} type="secondary" />
          </div>
        </div>
        <div className={'w-[500px] bg-white p-3 rounded-md'}>
          <h4 className={'text-center text-2xl'}>Form</h4>
          <span className={'text-[12px]'}>Builder Method</span>
          <div className={'border-t-2 p-4'}>
            <button>CLick</button>
          </div>
        </div>
      </div>
    </main>
  )
}
