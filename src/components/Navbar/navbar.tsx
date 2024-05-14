import Link from 'next/link'
import Image from 'next/image'

import { cn } from '@/lib'
import bebasneueFont from '@/fonts/bebasneue'
import { Button } from '../Button'

const Navbar = () => {
  return (
    <header
      className={cn(
        'max-w-7xl mx-auto w-full px-4 py-2 flex gap-2 background items-center justify-between',
        bebasneueFont
      )}
    >
      <nav>
        <Image src='/sushi.svg' width={80} height={120} style={{ height: "auto"}} alt='Logo' />
      </nav>
      <nav className='font-medium text-xl flex gap-8 text-green'>
        <Link href='/' className='flex gap-2 items-center'>
          <div className='h-[3px] w-3 bg-current'></div>
          Inicio
        </Link>
        <Link href='/menu' className='flex gap-2 items-center'>
          <div className='h-[3px] w-3 bg-current'></div>
          Menú
        </Link>
        <Link
          href='/nosotros'
          className='flex gap-2 items-center nav-link'
        >
          <div className='h-[3px] w-3 bg-current'></div>
          Nosotros
        </Link>
      </nav>
      <nav>
        <Button>
          RESERVAR MESA
        </Button>
      </nav>
    </header>
  )
}

export default Navbar
