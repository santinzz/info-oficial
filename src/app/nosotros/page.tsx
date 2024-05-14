import { Check } from '@/components'
import bebasneueFont from '@/fonts/bebasneue'
import yesevaFont from '@/fonts/yeseva'
import { cn } from '@/lib'
import Image from 'next/image'

const ventages = [
  {
    id: 1,
    ventage: 'Ingredientes Frescos y de Calidad',
    description: 'Nos enorgullecemos de utilizar solo los ingredientes más frescos y de alta calidad en todos nuestros platos.'
  },
  {
    id: 2,
    ventage: 'Maestros Sushi Experimentados',
    description: 'Contamos con chefs altamente capacitados y experimentados en la preparación de sushi. Cada pieza es una obra de arte, elaborada con precisión y pasión para proporcionar una experiencia culinaria excepcional.'
  },
  {
    id: 3,
    ventage: 'Ambiente Tradicional Japonés',
    description: 'Nuestro restaurante está diseñado para ofrecer una auténtica experiencia japonesa. Desde la decoración minimalista hasta la música suave de fondo, hemos recreado un ambiente que te hará sentir como si estuvieras en Japón.'
  }
]

const AboutPage = () => {
  return (
    <main className='pb-8'>
      <section className='h-[800px] relative'>
        <div className='decorador'></div>
        <Image
          src='/comiendo-sushi.webp'
          alt='Comiendo sushi'
          width={1920}
          height={800}
        />
        <div className='decorador-abajo'></div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-8'>
          <Image src='/palillos.svg' alt='Palillos' width={80} height={80} />
          <h1 className={cn('text-7xl text-white', bebasneueFont)}>
            Sigue el sabor de Japón
          </h1>
          <p className={cn('text-white text-3xl', bebasneueFont)}>
            Conoce mas sobre nuestra historia y la pasión que ponemos en cada
            uno.
          </p>
        </div>
      </section>
      <section className='pt-40 max-w-7xl mx-auto w-full flex flex-col items-center gap-8'>
        <Image src='/palillos.svg' alt='Palillos' width={80} height={80} />
        <h2
          className={cn(
            'text-6xl text-green max-w-[700px] text-center',
            yesevaFont
          )}
        >
          El lugar perfecto para sentirte en Japón
        </h2>
        <p
          className={cn(
            'text-gray-600 text-xl text-center max-w-[800px]',
            bebasneueFont
          )}
        >
          Disfruta de una variedad de sushi fresco, ramen aromático y delicadas
          tempuras mientras te relajas en un entorno que captura la esencia del
          país del sol naciente.
        </p>

        <section className='flex mt-8'>
          <section>
            <Image src='/hero-image.webp' alt='Hero image' width={600} height={400} className='w-[700px] h-auto'/>
          </section>
          <section className='space-y-8'>
            <h3 className={cn('text-5xl text-green', yesevaFont)}>¿Porque deberías visitarnos?</h3>
            <p className={cn('text-xl text-gray-600', bebasneueFont)}>En nuestro restaurante, hemos recreado la auténtica atmósfera japonesa, desde la decoración tradicional hasta los exquisitos sabores de nuestra cocina.</p>
            <ul className='divide-y-2 divide-green divide-dashed'>
              {ventages.map(({ id, ventage, description }) => (
                <li key={id} className='flex items-center gap-4 py-4'>
                  <Check className='size-8'/>
                  <div>
                    <h4 className={cn('text-green text-3xl', yesevaFont)}>{ventage}</h4>
                    <p className={cn('text-gray-600 text-lg max-w-[600px]', bebasneueFont)}>{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </main>
  )
}

export default AboutPage
