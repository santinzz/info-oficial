import Image from 'next/image'
import bebasneueFont from '@/fonts/bebasneue'
import { cn } from '@/lib'
import yesevaFont from '@/fonts/yeseva'
import { ArrowRight, Button } from '@/components'
import { chefSpecials } from './data'

const HomePage = () => {
  return (
    <main>
      <section className='max-w-7xl w-full mx-auto grid grid-cols-2 items-center pt-14'>
        <section className='flex flex-col gap-8'>
          <h1 className={cn('text-7xl text-green', yesevaFont)}>
            Disfruta el sabor completo de Japón
          </h1>
          <p className={cn('text-gray-600 text-xl', bebasneueFont)}>
            Desde los clásicos nigiri y sashimi hasta nuestras innovadoras
            creaciones de rollos, cada plato está meticulosamente elaborado para
            ofrecerte una experiencia gastronómica que trasciende lo ordinario.
          </p>
          <Button variant='orange' className='flex w-fit gap-3'>
            NUESTRO RESTAURANTE
            <ArrowRight className='size-6' />
          </Button>
        </section>
        <section>
          <Image
            src='/hero-image.webp'
            alt='Hero image'
            width={600}
            height={400}
            style={{ height: 'auto' }}
          />
        </section>
      </section>
      <section className='max-w-7xl w-full mx-auto flex flex-col gap-8 items-center pt-40 pb-8'>
        <Image src='/palillos.svg' alt='Palillos' width={80} height={80} />
        <h2 className={cn('text-6xl text-green', yesevaFont)}>
          Nuestros Platillos Especiales
        </h2>
        <p
          className={cn(
            'text-gray-600 text-2xl max-w-[500px] text-center',
            bebasneueFont
          )}
        >
          Estos son algunos de nuestros platillos más populares. Cada uno de
          ellos es una obra maestra culinaria.
        </p>
        <section className='grid grid-cols-2 grid-rows-3 gap-8'>
          {chefSpecials.map(({ id, name, description, image, rowSpan }) => (
            <section
              key={id}
              className={cn(
                'bg-white p-8 rounded-lg',
                rowSpan === 'row-span-3'
                  ? 'row-span-3 flex flex-col [&>img]:w-[400px] gap-28 items-center'
                  : 'flex gap-4'
              )}
            >
              <Image src={image} alt={name} width={200} height={100} />
              <div className='flex flex-col gap-6'>
                <h3 className={cn('text-4xl text-green', yesevaFont)}>
                  {name}
                </h3>
                <p className={cn('text-gray-600 text-xl', bebasneueFont)}>
                  {description}
                </p>
              </div>
            </section>
          ))}
        </section>
      </section>
    </main>
  )
}

export default HomePage
