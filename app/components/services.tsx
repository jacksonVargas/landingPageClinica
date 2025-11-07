import { Smile, Sparkles, Shield, Heart } from 'lucide-react'

export default function Services() {
  const card = [
    {
      icon: <Smile size={30} />,
      title: 'Ortodontia',
      description: 'Alinhadores invisíveis e aparelhos modernos para o sorriso perfeito.'
    },
    {
      icon: <Sparkles size={30} />,
      title: 'Estética Dental',
      description: 'Clareamento, lentes de contato e harmonização do sorriso.'
    },
    {
      icon: <Shield size={30} />,
      title: 'Implantes',
      description: 'Tecnologia 3D para implantes precisos e seguros.'
    },
    {
      icon: <Heart size={30} />,
      title: 'Odontopediatria',
      description: 'Cuidado especial e carinhoso para os pequenos.'
    },
  ]

  return(
    <>
      <section className='py-20 p-5 md:px-20 bg-slate-100 flex flex-col'>
        <div className='flex flex-col items-center text-center gap-2'>
          <h3 className='text-[4rem] max-sm:text-[2.8rem] font-semibold leading-18'>
            Nossos Serviços
          </h3>

          <p className='text-[1.2rem] text-zinc-500'>
            Tratamentos completos com tecnologia de ponta para toda a família
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-15 cursor-default'>
          {
            card.map((item, index) =>  (
              <div key={index} className='transition-all duration-300 hover:-translate-y-2 animate-scale-in flex flex-col gap-3 place-items-center text-center p-8 bg-white rounded-xl'>
                <span className='w-[60px] h-[60px] rounded-full bg-teal-500 flex justify-center items-center text-white'>{item.icon}</span>
                <h3 className='text-2xl font-semibold'>{item.title}</h3>
                <p className='text-md text-zinc-500'>{item.description}</p>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}