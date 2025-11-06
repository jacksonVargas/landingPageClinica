import { Calendar, Phone } from 'lucide-react'

export default function Hero() {
  return(
    <>
      <section className="min-h-screen flex flex-col justify-center gap-3 px-5 md:px-20">
        <h3 className='text-black text-[5rem] font-semibold leading-18'>
          Seu Sorriso

          <span className='block text-teal-500'>Merece o Melhor</span>
        </h3>
        <p className='text-[1.2rem] text-zinc-500 max-w-[600px] mb-5'>
          Tecnologia de ponta e atendimento humanizado para cuidar da sua saúde bucal com excelência.
        </p>

        <div className='flex items-center gap-2'>
          <a href="#" className='flex items-center gap-3 py-3 px-5 text-[1.1rem] bg-teal-500 text-white rounded-full hover:bg-teal-400'>
            <Calendar size={18} />
            Agende sua Consulta
          </a>

          <a href="#" className='flex items-center gap-3 py-3 px-5 text-[1.1rem] bg-teal-500 text-white rounded-full hover:bg-teal-400'>
            <Phone size={18} />
            (55) 9999-9999
          </a>
        </div>
      </section>
    </>
  )
}