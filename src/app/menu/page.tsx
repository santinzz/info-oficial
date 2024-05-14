import Image from "next/image"

import bebasneueFont from "@/fonts/bebasneue"
import yesevaFont from "@/fonts/yeseva"
import { cn } from "@/lib"
import { menuSection } from "./data"

const MenuPage = () => {
  return (
    <main>
      <section className='max-w-7xl w-full mx-auto flex flex-col items-center gap-4 py-32'>
        <Image src='/palillos.svg' alt='Palillos' width={80} height={80} />
        <h1 className={cn('text-7xl text-green max-w-[700px] text-center', yesevaFont)}>Disfruta el sabor de Japón</h1>
        <p className={cn('text-2xl text-gray-600', bebasneueFont)}>Ven y descubre el verdadero sabor de Japón en cada delicioso bocado.</p>
      </section>
      <Image src='/sushi-screen.webp' alt='Sushi' width={1920} height={1080} />
      <section className="py-32 max-w-7xl w-full mx-auto">
        {menuSection.map(({ id, title, description, image, foods }) => (
          <section key={id} className="bg-white rounded-lg p-14 flex">
            <section className="flex flex-col gap-6">
              <Image src='/palillos.svg' alt='Palillos' width={80} height={80} />
              <h2 className={cn('text-7xl text-green', yesevaFont)}>{title}</h2>
              <p className={cn('text-gray-600 text-xl', bebasneueFont)}>
                {description}
              </p>
              <section className="divide-y-2 divide-dashed divide-green">
                {foods.map(({ id, name, price, description }) => (
                  <section key={id} className="flex justify-between items-center gap-4 py-8">
                    <div>
                      <h3 className={cn('text-4xl text-green', yesevaFont)}>{name}</h3>
                      <p className={cn('text-gray-600', bebasneueFont)}>{description}</p>
                    </div>
                    <span className={cn('text-3xl text-green', yesevaFont)}>{price}</span>
                  </section>
                ))}
              </section>
            </section>
            <section>
              <Image src={image} alt={title} width={500} height={500} objectFit='cover' />
            </section>
          </section>
        ))}
      </section>
    </main>
  )
}

export default MenuPage