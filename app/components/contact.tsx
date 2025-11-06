import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Contact() {
  const card = [
    {
      icon: <MapPin size={20} />,
      title: 'Localização',
      descrition: 'Av. Paulista, 1000 - São Paulo, SP'
    },
    {
      icon: <Phone size={20} />,
      title: 'Telefone',
      descrition: '(11) 9999-9999'
    },
    {
      icon: <Mail size={20} />,
      title: 'Email',
      descrition: 'contato@clinicaodonto.com.br'
    },
    {
      icon: <Clock size={20} />,
      title: 'Horário',
      descrition: 'Seg-Sex: 8h-20h | Sáb: 8h-14h'
    },
  ]

  return (
    <>
      <section className='w-full py-20 px-5 md:px-20 flex flex-wrap items-center gap-5 bg-slate-100'>

        <form className='flex-1 bg-white flex flex-col gap-3 p-5 rounded-xl'>
          <h3 className='text-teal-500 font-semibold text-[2rem]'>Agende sua Consulta</h3>

          <input
            type='text'
            placeholder='Seu nome'
            required
            className='py-2 px-5 bg-transparent rounded-xl border border-zinc-300 focus:outline-teal-500'
          />

          <div className='w-full flex flex-wrap gap-3'>
            <input
              type='email'
              placeholder='Seu email'
              required
              className='flex-1 py-2 px-5 bg-transparent rounded-xl border border-zinc-300 focus:outline-teal-500'
            />

            <input
              type='number'
              placeholder='Seu telefone'
              required
              className='flex-1 py-2 px-5 bg-transparent rounded-xl border border-zinc-300 focus:outline-teal-500'
            />
          </div>

          <textarea
            placeholder='Mensagem (opcional)'
            className='resize-none h-50 py-2 px-5 bg-transparent rounded-xl border border-zinc-300 focus:outline-teal-500'
          />

          <button className='py-2 px-5 bg-teal-500 text-white text-lg cursor-pointer hover:bg-teal-400 rounded-xl'>
            Enviar Mensagem
          </button>
        </form>


        <div className='w-full flex-1 gap-2'>
          <div className='flex flex-wrap gap-5'>
            {
              card.map((item, index) => (
                <div key={index} className='transition-all duration-300 hover:-translate-y-2 animate-scale-in w-full flex items-center gap-4 p-8 rounded-xl bg-white cursor-default'>
                  <span className='w-[50px] h-[50px] rounded-full bg-teal-500 text-white flex justify-center items-center'>{item.icon}</span>
                  <div>
                    <h3 className='text-2xl font-semibold  text-teal-500'>{item.title}</h3>
                    <p className='text-zinc-500'>{item.descrition}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}