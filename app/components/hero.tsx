import { Calendar, Phone } from 'lucide-react'
import heroImage from '../assets/heroImage.png'
import Image from 'next/image'

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center gap-3 px-5 md:px-20">

        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt='Imagem hero'
            className='w-full h-full object-cover'
            priority
          />

          <div className="absolute inset-0 bg-linear-to-r from-zinc-500 via-black/60 to-black/70" />
        </div>

        <div className='relative'>
          <h3 className='text-white text-[5rem] max-sm:text-[2.8rem] max-sm:leading-13 font-semibold leading-18'>
            Seu Sorriso

            <span className='block text-teal-500 mb-2'>Merece o Melhor</span>
          </h3>
          <p className='text-[1.2rem] text-zinc-300 max-w-[600px] mb-8'>
            Tecnologia de ponta e atendimento humanizado para cuidar da sua saúde bucal com excelência.
          </p>

          <div className='flex flex-wrap items-center gap-2'>
            <a href="#" className='flex items-center gap-3 py-3 px-5 text-[1.1rem] bg-white text-teal-600 rounded-full transition-all duration-300 hover:-translate-y-1 animate-scale-in'>
              <Calendar size={18} />
              Agende sua Consulta
            </a>

            <a href="#" className='flex items-center gap-3 py-3 px-5 text-[1.1rem] bg-white text-teal-600 rounded-full transition-all duration-300 hover:-translate-y-1 animate-scale-in'>
              <Phone size={18} />
              (55) 9999-9999
            </a>
          </div>
        </div>
      </section>
    </>
  )
}